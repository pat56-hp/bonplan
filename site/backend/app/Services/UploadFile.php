<?php

namespace App\Services;

class UploadFile {

    /**
     * Upload et sauvegarde de fichier
     * @param File $file
     * @param string $doc
     */
    public function run($file, $doc){
        try {
            $fileName = time() . '-' . $file->getExtension();
            $path = 'public/uploads/' . $doc . '/' . date('Y').'/' . date('m');
            $file->move($path, $fileName);
            $urlFile = url($path.'/'.$fileName);
            return $urlFile;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * Suppression de fichier
     * @param string path
     */
    public function delete($path){
        if (!file_exists($path)) {
            return;
        }

        unlink($path);
    }

}