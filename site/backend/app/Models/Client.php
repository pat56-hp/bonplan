<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Client extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name', 'lastname', 'email', 'phone', 'password', 'status', 'validate', 'adresse', 'type', 'image'
    ];

    protected $hidden = [
        'password',
        'updated_at'
    ];

    public function etablissements(){
        return $this->hasMany(Etablissement::class, 'client_id');
    }

    public function favoris(){
        return $this->hasMany(Favoris::class, 'client_id');
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
