<?php

namespace App\Http\Controllers;

use App\Services\UploadFileService;
use Illuminate\Http\Request;

class ImageController extends Controller
{

    private UploadFileService $uploadFile;

    public function __construct(UploadFileService $uploadFile){
        $this->uploadFile = $uploadFile;
    }
    public function __invoke(Request $request)
    {
        $request->validate([
            'file' => ['required']
        ]);

        try {
            return response()->json([
                'file' => $this->uploadFile->execute($request->file)
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
             ], 415);
        }
    }
}
