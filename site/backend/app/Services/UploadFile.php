<?php

namespace App\Services;

use PharIo\Manifest\Url;

class UploadFile {

    /**
     * Upload et sauvegarde de fichier
     * @param File $file
     * @param string $doc
     */
    public function run($file, $doc){
        try {
            $fileName = time() . '-' . rand(0, 9999) . '.' . $file->extension();
            $path = 'uploads/' . $doc . '/' . date('Y').'/' . date('m');
            $file->move($path, $fileName);
            $filePath = '/' . $path.'/'.$fileName;
            return $filePath;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Suppression de fichier
     * @param string path
     */
    public function delete($path){
         if (file_exists(public_path($path))) {
            unlink(public_path($path));
            return true;
        }elseif(file_exists(url($path))) {
            unlink(url($path));
            return true;
        }

        return false;
    }
}