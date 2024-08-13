<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Http\Resources\EventResource;
use App\Repositories\EventRepository;
use App\Services\UploadFile;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EventController extends Controller
{
    protected $repository;
    protected $uploadFile;

    public function __construct(EventRepository $repository, UploadFile $uploadFile){
        $this->repository = $repository;
        $this->uploadFile = $uploadFile;
        $this->middleware('auth:api');
    }
    /**
     * Recuperation des evenements
     */
    public function index(Request $request)
    {
        $events = $this->repository->getAll($request->key);
        return response()->json([
            'data' => EventResource::collection($events),
            'meta' => [
                'current_page' => $events->currentPage(),
                'total' => $events->total(),
                'per_page' => $events->perPage()
            ]
        ]);
    }

    /**
     * Creation d'un evenement
     */
    public function store(EventRequest $request)
    {
       try {
            $data = $request->only([
                'titre', 'category', 'image', 'organisateur', 'adresse', 'localisation', 'site', 'debut', 'fin', 'contact',
                'whatsapp', 'email', 'description', 'facebook', 'instagram'
            ]);

            $data['image'] = $this->uploadFile->run($request->image, 'events');
            if ($request->gallery) {
                    foreach($request->gallery as $key => $gallerie) {
                        $data['gallerie'][$key] = $this->uploadFile->run($gallerie, 'gallerie');
                    }
            }

            return response()->json([
                'data' => $this->repository->storeOrUpdate($data),
                'message' => 'Evenement enregistré avec succès'
            ]);
       } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return response()->json([
            'data' => $this->repository->find($request->id)
        ]);
    }

    /**
     * Modification d'un evenement
     */
    public function update(EventRequest $request, $id){

        try {
            $data = $request->only([
                'titre', 'category', 'organisateur', 'adresse', 'localisation', 'site', 'debut', 'fin', 'contact',
                'whatsapp', 'email', 'description', 'facebook', 'instagram'
            ]);

            if ($request->hasFile('image')){
                //Suppression de l'ancienne image
                $event = $this->repository->find($id);
                if(!empty($event->image)) $this->uploadFile->delete($event->image);
                //Upload de la nouvelle image
                $data['image'] = $this->uploadFile->run($request->image, 'events');
            }

            if ($request->gallery) {
                foreach($request->gallery as $key => $gallerie) {
                    $data['gallerie'][$key] = $this->uploadFile->run($gallerie, 'gallerie');
                }
            }

            return response()->json([
                'data' => $this->repository->storeOrUpdate($data, $id),
                'message' => 'Evenement modifié avec succès'
            ]);
       } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, une erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Supprimer un eveneme
     */
    public function destroy(Request $request)
    {
        try {
            $this->repository->delete($request->id);
            return response()->json([
                'message' => 'Evenement supprimé avec succès'
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
