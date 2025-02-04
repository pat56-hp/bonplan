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

    public function etablissements(){
        return $this->hasMany(Etablissement::class, 'category_id');
    }


}
