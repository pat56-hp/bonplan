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
     * @return void
     */
    public function save(array $data): void{}

    /**
     * Suppression d'un etablissement
     * @param Etablissement $etablissement
     * @return void
     */
    public function delete(Etablissement $etablissement): void{}

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