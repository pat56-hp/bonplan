<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;
    protected $table = 'categoriesplans';

    protected $hidden = [
        'created_at',
        'created_by',
        'updated_at'
    ];

    public function entreprises(){
        return $this->hasMany(Etablissement::class, 'category_id')->where(['status' => 1, 'validate' => 1]);
    }
}
