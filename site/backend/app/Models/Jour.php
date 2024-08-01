<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jour extends Model
{
    use HasFactory;

    public function etablissements(){
        return $this->hasMany(Etablissement::class, 'horaires', 'jour_id', 'etablissement_id');
    }
}
