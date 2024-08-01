<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\UploadFile;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ImageController extends Controller
{
    /**
     * @var uploadFile
     */
    protected $uploadFile;

    /**
     * Contructor method
     * @param UploadFile $uploadFile
     */
    public function __construct(UploadFile $uploadFile){
        $this->uploadFile = $uploadFile;
    }

    /**
     * Delete image from gallery
     */
    public function __invoke(Request $request)
    {
        try {
            $resp = $this->uploadFile->delete($request->image);
            throw_if(!$resp, 'Impossible de supprimer l\'image');
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
