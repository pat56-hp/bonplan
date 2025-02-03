<?php
namespace App\Repositories;

use App\Domain\EtablissementRepositoryInterface;
use App\Models\{
    Etablissement,
    Categoriesplan,
    Commodite,
    Jour,
    Client
};
use DateTime;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class EtablissementRepository implements EtablissementRepositoryInterface{

    private Etablissement $etablissement;

    public function __construct(Etablissement $etablissement){
        $this->etablissement = $etablissement;
    }

    /**
     * Recuperer la liste des etablissements
     */
    public function getAll(){
        return $this->etablissement->latest()->paginate();
    }

    /**
     * Recuperer un etablissement par son id
     * @param string $id
     * @return ?Etablissement
     * 
     */
    public function findById(string $id): ?Etablissement {
        return $this->etablissement->findOrFail($id);
    }


    /**
     * Sauvegarde des informations d'un etablissement
     * @param array $data
     * @return mixed
     */
    public function save(array $data): mixed{
        DB::beginTransaction();

        try {
            $etablissement = $this->etablissement->updateOrCreate([
                'id' => $data['id'],
            ],[
                'libelle' => $data['libelle'],
                'ville' => $data['ville'],
                'adresse' => $data['adresse'],
                'phone' => $data['phone'],
                'email' => $data['email'],
                'facebook' => $data['facebook'],
                'instagram' => $data['instagram'],
                'description' => $data['description'],
                'image' => $data['image'],
                'client_id' => $data['client'],
                'category_id' => $data['categorie'],
                'status' => $data['status'] ?? 1,
                'validate' => $data['validate'] ?? 1,
            ]);
    
            // Sauvegarde de la gallerie
            if (isset($data['galerie'])) {
                $etablissement->galleries()->delete();
                $gallery = explode(',', $data['galerie']);
                foreach ($gallery as $image) {
                    $etablissement->galleries()->create([
                        'image' => $image
                    ]);
                }
            }
    
            //Sauvegarde des commodités
            $etablissement->commodites()->sync($data['commodite']);
    
            //Sauvegarde des horaires
            $horaires = $data['jour'];
            $etablissement->jours()->detach();
    
            foreach ($horaires as $key => $jour){
                $etablissement->jours()->attach($jour, [
                    'ouverture' => $data['ouverture'][$jour],
                    'fermeture' => $data['fermeture'][$jour],
                    'created_by' => auth()->user()->name.' '.auth()->user()->lastname,
                ]);
            }

            DB::commit();
            return $etablissement;
        } catch (\Throwable $th) {
            throw new \Exception($th->getMessage());
        }
        
    }

    /**
     * Suppression d'un etablissement
     * @param Etablissement $etablissement
     * @return void
     */
    public function delete(Etablissement $etablissement): void{
        deleteFile($etablissement->image);
        
        foreach ($etablissement->galleries as $gallery) {
            deleteFile($gallery->image);
            $gallery->delete();
        }
        
        $etablissement->commodites()->detach();
        $etablissement->jours()->detach();
        $etablissement->delete();
        
    }

    /**
     * Recuperation des datas pour la sauvegarde et l'edition
     */
    public function getElementToFront(): array{
        return [
            'categories' => Categoriesplan::where('status', 1)->get(),
            'clients' => Client::where(['type' => 1, 'status' => 1, 'validate' => 1])->get(),
            'commodites' => Commodite::orderBy('libelle')->where(['status' => 1])->get(),
            'jours' => Jour::all()
        ];
    }
}