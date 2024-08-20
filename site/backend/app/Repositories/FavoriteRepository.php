<?php
namespace App\Repositories;

use App\Models\Favoris;

class FavoriteRepository{

    private $favoris;

    public function __construct(Favoris $favoris){
        $this->favoris = $favoris;
    }

    public function getAll(){
        
        $favoris = auth('api')->user()->favoris->load('etablissement');
        return $favoris;
    }

    public function find($id){
        return $this->favoris->findOrFail($id);
    }

    public function delete($id){
        $favoris = $this->find($id);
        $favoris->delete();
    }

}