<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\Categories;
use App\Models\Client;
use App\Models\Etablissement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Login users function
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);


        if ($validator->fails()){
            return response()->json([
                'data' => $validator->errors(),
                'message' => 'Oups, une erreur dans le formulaire'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $credentials = request(['email', 'password']);
        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json([
                'message' => 'Email ou mot de passe incorrect'
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Register customer
     */
    public function register(RegisterRequest $request)
    {
        DB::beginTransaction();

        $client = Client::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'type' => $request->type, //Customer
            'status' => 1, // Actif
            'image' => '/images/user.png',
            'validate' => 0
        ]);

        if ($client){
            $credentials = request(['email', 'password']);
            $token = auth('api')->attempt($credentials);

            DB::commit();
            return $this->respondWithToken($token);
        }


        DB::rollBack();
        return response()->json(['error' => 'Une erreur s\'est produite.'], Response::HTTP_BAD_REQUEST);
    }

    /**
     * Return auth informations
     */
    public function me()
    {
        return response()->json(auth('api')->user());
    }

    /**
     * Logout user
     */
    public function logout()
    {
        auth('api')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => auth('api')->user(),
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
}
