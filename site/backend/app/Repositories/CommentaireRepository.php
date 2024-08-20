<?php

namespace App\Repositories;

use App\Models\Commentaire;

class CommentaireRepository {

    private $commentaire;
    private $etablissementRepository;

    public function __construct(Commentaire $commentaire, EtablissementRepository $etablissementRepository){
        $this->commentaire = $commentaire;
        $this->etablissementRepository = $etablissementRepository;
    }

    public function store($data){
        $commentaire = $this->commentaire->create([
            'commentaire' => $data['commentaire'],
            'note' => $data['note'] ?? 0,
            'etablissement_id' => $this->etablissementRepository->find($data['etablissement'])?->id,
            'client_id' => auth('api')->id()
        ]);

        return $commentaire;
    }
}