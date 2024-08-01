<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EtablissementFormRequest;
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
    public function index()
    {
        return response()->json([
            'data' => $this->repository->getAll()
        ]);
    }

    /**
     * Store informations of etablissement
     * @param EtablissementFormRequest $request
     */
    public function store(EtablissementFormRequest $request)
    {
        //dd('ok');
        try {
            $data = $request->only([
                'libelle', 'adresse', 'facebook', 'instagram', 'phone', 'category', 'email', 'ville', 'facebook', 'instagram'
            ]);

            $data['image'] = $this->uploadFile->run($request->image, 'etablissements');
            if ($request->gallerie) {
                foreach($request->gallerie as $key => $gallerie) {
                    $data['gallerie'][$key] = $this->uploadFile->run($gallerie, 'gallerie');
                }
            }

            return response()->json([
                'data' => $this->repository->storeOrUpdate($data),
                'message' => 'Etablissement enregistré avec succès'
            ]);
        } catch (\Exception $e) {
            //dd($e->getMessage());
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
        //dd($request->libelle);
        try {
            $data = $request->only([
                'libelle', 'adresse', 'facebook', 'instagram', 'phone', 'category', 'email', 'ville', 'facebook', 'instagram', 'status'
            ]);

            if ($request->hasFile('image')){
                //Suppression de l'ancienne image
                $etablissement = $this->repository->find($id);
                $this->uploadFile->delete($etablissement->image);
                //Upload de la nouvelle image
                $data['image'] = $this->uploadFile->run($request->image, 'etablissements');
            }
            
            if ($request->gallerie) {
                foreach($request->gallerie as $key => $gallerie) {
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
                'message' => 'Oups, ne erreur s\'est produite'
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
                'message' => 'Oups, ne erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
