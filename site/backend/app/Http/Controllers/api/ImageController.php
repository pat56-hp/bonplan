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
            $this->uploadFile->delete($request->image);
            return response()->json([
                'message' => 'Image supprimé avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Oups, ne erreur s\'est produite'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
