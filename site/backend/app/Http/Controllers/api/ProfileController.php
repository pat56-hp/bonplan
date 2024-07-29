<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * @param ProfileRequest $request
     * Update profile of customer and Prestataire
     * @return JsonResponse
     */
    public function updateProfile(ProfileRequest $request){
        $user = auth('api')->user();

        try {
            $user->update([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'phone' => $request->phone,
                'adresse' => $request->adresse
            ]);

            return response()->json([
                'data' => $user,
                'message' => 'Profile modifié avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update password of customer and prestataire
     * @param Request $request
     * @return JsonResponse
     */
    public function updatePassword(Request $request){
        $request->validate([
            'oldpassword' => 'required',
            'newpassword' => 'required|min:6|confirmed',
        ]);

        //Verification du mot de passe actuel
        if (!Hash::check($request->oldpassword, auth('api')->user()->password)){
            return response()->json([
                'message' => 'Votre mot de passe actuel est invalide'
            ], Response::HTTP_NOT_ACCEPTABLE);
        }else{
            auth('api')->user()->update([
                'password' => Hash::make($request->newpassword)
            ]);

            return response()->json([
                'message' => 'Mot de passe modifié avec succès'
            ]);
        }
    }
}
