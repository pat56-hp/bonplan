<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    use HasFactory;

    protected $fillable = [
        'endroit_id', 'user_id', 'debut', 'fin', 'status', 'created_by'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function endroit(){
        return $this->belongsTo(Endroit::class, 'endroit_id');
    }
}
