<?php

namespace App\Domain;

interface ActivityRepositoryInterface{
    public function save(array $data): void;
}