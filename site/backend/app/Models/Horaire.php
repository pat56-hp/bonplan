<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Horaire extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'etablissement_id',
        'jour_id',
        'ouverture',
        'fermeture',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
