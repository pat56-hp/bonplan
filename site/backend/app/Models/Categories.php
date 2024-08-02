<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;
    protected $table = 'categoriesplans';

    public function entreprises(){
        return $this->hasMany(Etablissement::class, 'category_id');
    }
}
