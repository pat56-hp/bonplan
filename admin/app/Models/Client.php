<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'name', 'lastname', 'email', 'phone', 'password', 'status', 'validate', 'adresse', 'type', 'image'
    ];

    protected $paginate = 100;

    public function etablissements(){
        return $this->hasMany(Etablissement::class, 'client_id', 'id');
    }


}
