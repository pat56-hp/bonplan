<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

    public $fillable = [
        'title', 'subtitle', 'image', 'btn_first', 'btn_first_title', 'btn_first_url', 'btn_second', 'btn_second_title', 'btn_second_url', 'statut', 'created_by'
    ];
}
