<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommentaireRequest;
use App\Repositories\CommentaireRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CommentaireController extends Controller
{
    private $repository;
    
    public function __construct(CommentaireRepository $repository){
        $this->repository = $repository;
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(CommentaireRequest $request)
    {
        $data = $request->only(['etablissement', 'note', 'commentaire']);

        try {
            return response()->json([
                'data' => $this->repository->store($data),
                'message' => 'Commentaire ajouté avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'data' => [
                    'line' => $e->getLine(),
                    'file' => $e->getFile(),
                    'code' => $e->getCode(),
                ]
            ], Response::HTTP_NOT_ACCEPTABLE);
        }
    }
}
