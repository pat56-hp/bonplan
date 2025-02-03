<?php
namespace App\Domain;

use App\Models\User;

interface ClientRepositoryInterface{
    public function findById(string $id): ?User;
    public function save(User $user): void;
    public function delete(User $user): void;
}