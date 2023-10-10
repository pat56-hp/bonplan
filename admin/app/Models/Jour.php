<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jour extends Model
{
    use HasFactory;

    protected $fillable = ['libelle'];

    public function horaires(){
        return $this->hasMany(Horaire::class, 'jour_id');
    }
}
