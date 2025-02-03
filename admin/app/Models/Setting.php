<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slogan', 'email', 'phone', 'logo', 'logo_black', 'favicon', 'facebook', 'instagram', 'twitter', 'map', 'created_by', 'mot_cle', 'auteur', 'lien'
    ];
}
