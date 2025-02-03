<?php
namespace App\Domain;

use App\Models\Client;

interface ClientRepositoryInterface{
    public function findById(string $id): ?Client;
    public function save(array $data): mixed;
    public function delete(Client $client): void;
}