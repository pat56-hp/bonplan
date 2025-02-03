<?php
namespace App\Domain;

use App\Models\Etablissement;

interface EtablissementRepositoryInterface{
    public function getAll();
    public function findById(string $id): ?Etablissement;
    public function save(array $data): void;
    public function delete(Etablissement $etablissement): void;
    public function getElementToFront(): array;
}