<?php

namespace App\Services;

class UploadFileService{
    public function execute($file){
        try {
            if (!verifyImageExtension($file)) {
                throw new \Exception('Les images doivent avoir l\'extension png, jpeg, jpg ou ico');
            }

            $fileName = 'bonplan-'. time().'-'. rand(0, 99999) . '-img.'.$file->extension();
            $path = 'assets/bonplans/';
            return storeFile($file, $path, $fileName);
        } catch (\Throwable $th) {
            throw new \Exception($th->getMessage());
        }
    }
}