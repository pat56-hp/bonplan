<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $fillable = [
        'clien_id', 'category_id', 'titre', 'organisateur', 'adresse', 
        'localisation_map', 'siteweb', 'debut', 'fin', 'contact', 'whatsapp', 
        'email', 'description', 'facebook', 'instagram', 'status', 'validated', 'image'
    ];

    public function client(){
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function category(){
        return $this->belongsTo(EventCategory::class, 'category_id');
    }

    public function galleries(){
        return $this->hasMany(Gallerie::class, 'event_id');
    }
}
