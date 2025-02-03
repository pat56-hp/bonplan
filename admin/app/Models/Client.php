<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name', 'lastname', 'email', 'phone', 'password', 'status', 'validate', 'adresse', 'type', 'image'
    ];

    protected $paginate = 100;


}
