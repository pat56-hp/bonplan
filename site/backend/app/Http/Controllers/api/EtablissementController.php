<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EtablissementFormRequest;
use App\Http\Resources\EtablissementResource;
use App\Models\Etablissement;
use App\Models\Gallerie;
use App\Repositories\EtablissementRepository;
use App\Services\UploadFile;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EtablissementController extends Controller
{
    /**
     * @var EtablissementRepository
     */
    protected $repository;

    /**
     * @var UploadFile
     */
    protected $uploadFile;

    /**
     * Constructor to initialize repository object
     * @param EtablissementRepository $repository
     */
    public function __construct(EtablissementRepository $repository, UploadFile $uploadFile)
    {
        $this->middleware('auth:api');
        $this->repository = $repository;
        $this->uploadFile = $uploadFile;
    }

    /**
     * Display a listing of etablissement.
     */
    public function index(Request $request)
    {   $etablissements = $this->repository->getAll($request->key);
        return response()->json([
            'data' => EtablissementResource::collection($etablissements),
            'meta' => [
                'current_page' => $etablissements->currentPage(),
                'last_page' => $etablissements->lastPage(),
                'per_page' => $etablissements->perPage(),
                'total' => $etablissements->total(),
            ]
        ]);
    }

    /**
     * Store informations of etablissement
     * @param EtablissementFormRequest $request
     */
    public function store(EtablissementFormRequest $request)
    {
        try {
            $data = $request->only([
                'libelle', 'adresse', 'facebook', 'instagram', 'phone', 'category', 'email', 'ville', 'facebook', 'instagram', 'description', 'horaires', 'commodites'
            ]);

            //return $data;

            $data['image'] = $this->uploadFile->run($request->image, 'etablissements');
            if ($request->gallery) {
                foreach($request->gallery as $key => $gallerie) {
                    $data['gallerie'][$key] = $this->uploadFile->run($gallerie, 'gallerie');
                }
            }

            return response()->json([
                'data' => $this->repository->storeOrUpdate($data),
                'message' => 'Etablissement enregistré avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display etablissement
     */
    public function show(Request $request)
    {
        return response()->json([
            'data' => $this->repository->find($request->id)
        ]);
    }

    /**
     * Update etablissement informations
     */
    public function update(EtablissementFormRequest $request, $id)
    {
        try {
            $data = $request->only([
                'libelle', 'adresse', 'facebook', 'instagram', 'phone', 'category', 'email', 'ville', 'facebook', 'instagram', 'description', 'horaires', 'commodites'
            ]);

            if ($request->hasFile('image')){
                //Suppression de l'ancienne image
                $etablissement = $this->repository->find($id);
                if(!empty($etablissement->image)) $this->uploadFile->delete($etablissement->image);
                //Upload de la nouvelle image
                $data['image'] = $this->uploadFile->run($request->image, 'etablissements');
            }
            
            if ($request->gallery) {
                foreach($request->gallery as $key => $gallerie) {
                    $data['gallerie'][$key] = $this->uploadFile->run($gallerie, 'gallerie');
                }
            }

            return response()->json([
                'data' => $this->repository->storeOrUpdate($data, $id),
                'message' => 'Etablissement modifié avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite',
                'trace' => $e->getTrace()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove Etablissement
     */
    public function destroy(Request $request)
    {
        try {
            $this->repository->delete($request->id);
            return response()->json([
                'message' => 'Etablissement supprimé avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Modification du status
     */
    public function updateStatus(Request $request){
        try {
            $this->repository->changeStatus($request->id);
            return response()->json([
                'message' => 'Statut de l\'etablissement changé avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Suppression d'une image dans la gallerie
     */
    public function deleteImage(Request $request){
        try {
            $this->repository->deleteImage($request->image);
            return response()->json([
                'message' => 'Image supprimée avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
