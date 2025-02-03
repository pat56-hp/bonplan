<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horaire extends Model
{
    use HasFactory;

    protected $fillable = ['jour_id', 'etablissement_id', 'ouverture', 'fermeture', 'created_by'];

    public function etablissement(){
        return $this->belongsTo(Etablissement::class, 'etablissement_id');
    }

    public function jour(){
        return $this->belongsTo(Jour::class, 'jour_id');
    }
}
