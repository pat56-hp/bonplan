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

    public function endroits(){
        return $this->belongsToMany(Endroit::class, 'endroit_commodites')->withPivot('id', 'statut', 'created_by');
    }
}
