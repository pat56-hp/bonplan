<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'file' => ['required']
        ]);

        if ($request->hasFile('file')){

            if (!verifyImageExtension($request->file)) {
                return response()->json([
                    'message' => 'Les images doivent avoir l\'extension png, jpeg, jpg ou ico'
                 ], 415);
            }


            $fileName = 'bonplan-'. time() . '-img.'.$request->file->extension();
            $path = 'assets/bonplans/';
            $filePath = storeFile($request->file, $path, $fileName);

            return response()->json([
                'file' => $filePath
            ], 200);
        }

        return response()->json([
           'message' => 'Une erreur s\'est produite, image incorrecte ou corrompue'
        ], 415);
    }
}
