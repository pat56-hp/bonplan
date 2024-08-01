<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commodite extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at', 'created_by', 'updated_at'
    ];

    public function etablissements(){
        return $this->belongsToMany(Etablissement::class, 'etablissement_commodites', 'commodite_id', 'etablissement_id');
    }
}
