<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventcategorie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'status', 'created_by'
    ];

    public function events(){
        return $this->hasMany(Event::class, 'category_id');
    }
}
