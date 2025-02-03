<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commodite extends Model
{
    use HasFactory;

    protected $fillable = [
        'libelle', 'created_by', 'status', 'icon'
    ];

    public function etablissements(){
        return $this->belongsToMany(Etablissement::class, 'etablissement_commodites', 'commodite_id', 'etablissement_id');
    }
}
