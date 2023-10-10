<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoriesplan extends Model
{
    use HasFactory;

    protected $fillable = [
        'libelle', 'created_by', 'status', 'image', 'icon'
    ];

    public function bonplans(){
        return $this->hasMany(Endroit::class, 'categorie_id');
    }


}
