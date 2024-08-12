<?php

namespace App\Repositories;

use App\Http\Resources\EtablissementResource;
use App\Models\Etablissement;
use App\Models\Gallerie;
use App\Services\UploadFile;
use Exception;
use Illuminate\Support\Facades\DB;

class EtablissementRepository {

    protected $etablissement;
    protected $uploadFile;

    public function __construct(Etablissement $etablissement, UploadFile $uploadFile){
        $this->etablissement = $etablissement;
        $this->uploadFile = $uploadFile;
    }

    //Recuperation de tous les etablissements
    public function getAll($key = null){
        $etablissements = $this->etablissement
        ->when(!empty($key), fn($q) => $q->whereAll(['libelle', 'description'], 'LIKE', '%' . $key . '%'))
        ->where(['client_id' => auth('api')->id()])
        ->latest()
        ->paginate(30);

        return $etablissements;
    }

    //Enregistrement ou modification d'un etablissement
    public function storeOrUpdate($data, $id = null){
        DB::beginTransaction();
        try {
            if (is_null($id)) {
                $etablissement = $this->etablissement->create([
                    'libelle' => $data['libelle'],
                    'phone' => $data['phone'],
                    'client_id' => auth('api')->id(),
                    'category_id' => $data['category'],
                    'adresse' => $data['adresse'],
                    'ville' => $data['ville'],
                    'email' => $data['email'] ?? null,
                    'image' => $data['image'],
                    'facebook' => $data['facebook'] ?? null,
                    'instagram' => $data['instagram'] ?? null,
                    'description' => $data['description'],
                    'status' => 1
                ]);
            }else{
                $etablissement = $this->find($id);
                $etablissement->update([
                    'libelle' => $data['libelle'],
                    'phone' => $data['phone'],
                    'category_id' => $data['category'],
                    'adresse' => $data['adresse'],
                    'ville' => $data['ville'],
                    'email' => $data['email'] ?? null,
                    'image' => $data['image'] ?? $etablissement->image,
                    'facebook' => $data['facebook'] ?? null,
                    'instagram' => $data['instagram'] ?? null,
                    'description' => $data['description'],
                ]);
            }

            if (isset($data['commodites'])) {
                $commodites = json_decode($data['commodites']);
                $etablissement->commodites()->sync($commodites);
            }

            if (isset($data['horaires'])) {
                $horaires = json_decode($data['horaires']);
                $etablissement->jours()->detach();
                foreach ($horaires as $horaire) {
                    $etablissement->jours()->attach($horaire->value+1, [
                        'ouverture' => date('H:i', strtotime($horaire->ouverture)),
                        'fermeture' => date('H:i', strtotime($horaire->fermeture))
                    ]);
                }
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

            DB::commit();
            return $etablissement;
        } catch (\Exception $e) {
            DB::rollback();
            //Suppression des fichiers
            if (isset($data['gallerie'])) {
                foreach($data['gallerie'] as $key => $image){
                    $this->uploadFile->delete($image);
                }
            }

            throw new \Exception($e->getMessage());
        }
    }

    //Retrouver un etablissement a partir de L'ID
    public function find($id){
        return $this->etablissement
            ->where('client_id', auth('api')->id())
            ->with(['galleries', 'category', 'commodites', 'jours'])
            ->findOrFail($id);
    }

    //Suppression d'un etablissement
    public function delete($id){
        $etablissement = $this->find($id);
        $galleries = $etablissement->galleries;
        //Suppression de la gallerie
        foreach ($galleries as $key => $value) {
            $this->uploadFile->delete($value);
        }

        $etablissement->galleries()->delete();
        $etablissement->commodites()->detach();
        $etablissement->jours()->delete();

        //Suppression de l'image de l'etablissement
        $this->uploadFile->delete($etablissement->image);

        $etablissement->delete();
    }

    //Modification du status d'un etablissement
    public function changeStatus($id){
        $etablissement = $this->find($id);
        $newStatus = $etablissement->status === 1 ? 0 : 1;
        $etablissement->update([
            'status' => $newStatus
        ]);
    }

    //Suppresion d'une image
    public function deleteImage($image){
        $basePath = url('/');
        $baseName = explode($basePath, $image);
        $filePath = join($baseName);
        $imageGallery = Gallerie::where('image', $filePath)->firstOrFail();
        
        if ($imageGallery) {
            $this->uploadFile->delete($filePath);
            $imageGallery->delete();
        }else 
            throw new Exception('Impossible de supprimer l\'image');
    }
}