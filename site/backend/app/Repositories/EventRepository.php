<?php
namespace App\Repositories;

use App\Models\Event;
use App\Models\Gallerie;
use App\Services\UploadFile;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;

class EventRepository{
    protected $event;
    protected $uploadFile;

    public function __construct(Event $event, UploadFile $uploadFile){
        $this->event = $event;
        $this->uploadFile = $uploadFile;
    }

    /**
     * Recuperation des evenements
     */
    public function getAll($key = null){
        $events = $this->event
        ->when(!empty($key), fn($q) => $q->whereAll(['titre', 'description'], 'LIKE', '%' . $key . '%'))
        ->where(['client_id' => auth('api')->id()])
        ->latest()
        ->paginate(30);

        return $events;
    }

    /**
     * Recuperation d'un evenement
     */
    public function find($id){
        return $this->event
            ->where('client_id', auth('api')->id())
            ->with(['galleries'])
            ->findOrFail($id);
    }

    /**
     * Sauvegarde ou modification d'un evenemement
     */
    public function storeOrUpdate($data, $id = null){
        DB::beginTransaction();
        try {
            
            //Nouvel enregistrement
            if (is_null($id)) {
                $event = $this->event->create([
                    'titre' => $data['titre'],
                    'category_id' => $data['category'],
                    'organisateur' => $data['organisateur'],
                    'adresse' => $data['adresse'],
                    'siteweb' => $data['site'] ?? null,
                    'debut' => Carbon::parse($data['debut']),
                    'fin' => Carbon::parse($data['fin']),
                    'contact' => $data['contact'],
                    'whatsapp' => isset($data['whatsapp']) && $data['whatsapp'] != 'null' ? $data['whatsapp'] : null,
                    'email' => $data['email'] ?? null,
                    'description' => $data['description'],
                    'facebook' => $data['facebook'] ?? null,
                    'instagram' => $data['instagram'] ?? null,
                    'image' => $data['image'],
                    'client_id' => auth('api')->id(),
                    'longitude' => $data['longitude'] ?? null,
                    'latitude' => $data['latitude'] ?? null,
                ]);
            }else{//Modification
                $event = $this->find($id);
                $event->update([
                    'titre' => $data['titre'],
                    'category_id' => $data['category'],
                    'organisateur' => $data['organisateur'],
                    'adresse' => $data['adresse'],
                    'siteweb' => $data['site'] ?? null,
                    'debut' => Carbon::parse($data['debut']),
                    'fin' => Carbon::parse($data['fin']),
                    'contact' => $data['contact'],
                    'whatsapp' => isset($data['whatsapp']) && $data['whatsapp'] != 'null' ? $data['whatsapp'] : null,
                    'email' => $data['email'] ?? null,
                    'description' => $data['description'],
                    'facebook' => $data['facebook'] ?? null,
                    'instagram' => $data['instagram'] ?? null,
                    'image' => $data['image'] ?? $event->image,
                    'longitude' => $data['longitude'] ?? null,
                    'latitude' => $data['latitude'] ?? null,
                ]);
            }

            //Sauvegarde de la gallerie
            if (isset($data['gallerie'])) {
                foreach($data['gallerie'] as $key => $image){
                    Gallerie::create([
                        'event_id' => $event->id,
                        'image' => $image
                    ]);
                }
            }

            DB::commit();
            return $event;
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

    /**
     * Suppression d'un evenemement
     */
    public function delete($id){
        $event = $this->find($id);
        $galleries = $event->galleries;
        
        //Suppression de la gallerie
        foreach ($galleries as $key => $value) {
            $this->uploadFile->delete($value);
        }

        $event->galleries()->delete();

        //Suppression de l'image de l'event
        $this->uploadFile->delete($event->image);

        $event->delete();
    }

    /**
     * Modification du statut d'un evenement
     */
    public function changeStatus($id){
        $event = $this->find($id);
        $newStatus = $event->status === 1 ? 0 : 1;
        $event->update([
            'status' => $newStatus
        ]);
    }


    /**
     * Suppression d'une image
     */
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