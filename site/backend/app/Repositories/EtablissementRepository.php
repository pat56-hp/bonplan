<?php

namespace App\Repositories;

use App\Http\Resources\EtablissementResource;
use App\Models\Etablissement;
use App\Models\Gallerie;
use App\Services\UploadFile;

class EtablissementRepository {

    protected $etablissement;
    protected $uploadFile;

    public function __construct(Etablissement $etablissement, UploadFile $uploadFile){
        $this->etablissement = $etablissement;
        $this->uploadFile = $uploadFile;
    }

    public function getAll(){
        $etablissements = EtablissementResource::collection(
            $this->etablissement->where('client_id', auth('api')->id())->latest()->paginate(50)
        );

        return $etablissements;
    }

    public function storeOrUpdate($data, $id = null){
        try {
            if (is_null($id)) {
                $etablissement = $this->etablissement->create([
                    'libelle' => $data['libelle'],
                    'phone' => $data['phone'],
                    'client_id' => auth('api')->id(),
                    'category_id' => $data['category'],
                    'adresse' => $data['adresse'],
                    'ville' => $data['ville'],
                    'email' => $data['email'],
                    'image' => $data['image'],
                ]);
            }else{
                $etablissement = $this->find($id);
                $etablissement->update([
                    'libelle' => $data['libelle'],
                    'phone' => $data['phone'],
                    'category_id' => $data['category'],
                    'adresse' => $data['adresse'],
                    'ville' => $data['ville'],
                    'email' => $data['email'],
                    'image' => $data['image'] ?? $etablissement->image,
                ]);
            }
            
    
            //Sauvegarde de la gallerie
            if (isset($data['gallerie'])) {
                foreach($data['gallerie'] as $key => $image){
                    Gallerie::create([
                        'etablissement_id' => $etablissement->id,
                        'image' => $image
                    ]);
                }
            }

            return $etablissement;
        } catch (\Exception $e) {
            //Suppression des fichiers
            foreach($data['gallerie'] as $key => $image){
                $this->uploadFile->delete($image);
            }

            throw new \Exception($e->getMessage());
        }
    }

    public function find($id){
        return $this->etablissement->where('client_id', auth('api')->id())->with('galleries')->findOrFail($id);
    }

    public function update(){

    }

    public function delete($id){
        $etablissement = $this->find($id);
        $galleries = $etablissement->galleries;
        //Suppression de la gallerie
        foreach ($galleries as $key => $value) {
            $this->uploadFile->delete($value);
        }
        $etablissement->galleries()->delete();

        //Suppression de l'image de l'etablissement
        $this->uploadFile->delete($etablissement->image);

        $etablissement->delete();
    }
}