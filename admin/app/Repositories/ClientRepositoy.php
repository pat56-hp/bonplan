<?php

namespace App\Repositories;

use App\Domain\ClientRepositoryInterface;
use App\Models\{
    User
};

class ClientRepository implements ClientRepositoryInterface{


    public function findById(string $id): User{
        return User::findOrFail($id);
    }

    public function save(User $user): void{}

    public function delete(User $user): void{}
}