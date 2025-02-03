<?php
namespace App\Domain;

use App\Models\Etablissement;

interface EtablissementRepositoryInterface{
    public function getAll();
    public function findById(string $id): ?Etablissement;
    public function save(array $data): mixed;
    public function delete(Etablissement $etablissement): void;
    public function getElementToFront(): array;
}