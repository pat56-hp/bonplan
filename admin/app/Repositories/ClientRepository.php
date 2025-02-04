<?php

namespace App\Repositories;

use App\Domain\ClientRepositoryInterface;
use App\Models\{
    Client,
    User
};
use Illuminate\Support\Facades\DB;

class ClientRepository implements ClientRepositoryInterface{
    protected Client $client;

    public function __construct(Client $client){
        $this->client = $client;
    }

    public function findById(string $id): Client{
        return $this->client->findOrFail($id);
    }

    public function save(array $data): mixed{
        if (isset($data['id'])) {
            $oldclient = $this->findById($data['id']);
        }

        DB::beginTransaction();

        try {
            $client = $this->client->updateOrCreate([
                'id' => $data['id']
            ], [
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'phone' => $data['phone'],
                'adresse' => $data['adresse'],
                'status' => $data['status'] ?? 1,
                'validate' => $data['validate'] ?? 1,
                'type' => $data['type'],
                'password' => $oldclient?->$oldclient ?? bcrypt($data['password']),
                'image' => $data['image'] ?? '/assets/images/avatars/avatar2.png'
            ]);

            DB::commit();
            return $client;
        } catch (\Throwable $th) {
            throw new \Exception($th->getMessage());
        }
    }

    public function delete(Client $client): void{
        $client->etablissements()->delete();
        $client->delete();
    }
}