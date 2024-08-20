<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favoris extends Model
{
    use HasFactory;

    protected $fillable = [
        'etablissement_id', 'client_id'
    ];

    protected $hidden = ['created_at', 'updated_at'];

    public function etablissement(){
        return $this->belongsTo(Etablissement::class, 'etablissement_id');
    }

    public function client(){
        return $this->belongsTo(Client::class, 'client_id');
    }
}
