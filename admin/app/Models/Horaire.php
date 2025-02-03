<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horaire extends Model
{
    use HasFactory;

    protected $fillable = ['jour_id', 'endroit_id', 'ouverture', 'fermeture', 'created_by'];

    public function endroit(){
        return $this->belongsTo(Endroit::class, 'endroit_id');
    }

    public function jour(){
        return $this->belongsTo(Jour::class, 'jour_id');
    }
}
