<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'user_id', 'endroit_id', 'description', 'price', 'created_by', 'status'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function endroit(){
        return $this->belongsTo(Endroit::class, 'endroit_id');
    }

    public function image(){
        return $this->hasOne(Picture::class, 'offer_id');
    }
}
