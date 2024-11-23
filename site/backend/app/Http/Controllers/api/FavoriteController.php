<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\EtablissementResource;
use App\Models\Etablissement;
use App\Repositories\FavoriteRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FavoriteController extends Controller
{
    private $respository;
    public function __construct(FavoriteRepository $respository)
    {
        $this->middleware(['auth:api']);
        $this->respository = $respository;
    }

    /**
     * Recuperation des favoris d'un utilisateur
     */
    public function index()
    {
        return response()->json([
            'data' => $this->respository->getAll(),
            'message' => 'Liste des favoris'
        ]);
    }

    public function getEtablissementFavorite(){
        $etablissements = Etablissement::whereHas('favoris', fn($q) => $q->where('client_id', auth('api')->id()))->get();

        return response()->json([
            'data' => EtablissementResource::collection($etablissements),
            'message' => 'Liste des favoris'
        ]);
    }

    /**
     * Suppression d'un element de la liste des favoris
     */
    public function delete(Request $request)
    {
        try {
            $this->respository->delete($request->id);
            return response()->json([
                'data' => true,
                'message' => 'Element supprime de la liste des favoris'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => [
                    'code' => $e->getCode(),
                    'line' => $e->getLine(),
                    'file' => $e->getFile()
                ],
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
