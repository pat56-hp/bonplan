<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallerie extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $fillable = [
        'etablissement_id', 'image'
    ];

    public function etablissement(){
        return $this->belongsTo(Etablissement::class, 'etablissement_id');
    }
}
