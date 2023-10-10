<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'user_id',
        'category_id',
        'country_id',
        'whatsapp_country_id',
        'title',
        'organisateur',
        'ville',
        'commune',
        'adresse',
        'map',
        'site',
        'debut',
        'fin',
        'heure_debut',
        'heure_fin',
        'phone',
        'email',
        'whatsapp',
        'description',
        'phone_country_id',
        'facebook',
        'instagram',
        'tweeter',
        'status',
        'validated',
        'created_by',
        'validated_by',
    ];

    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function categorie(){
        return $this->belongsTo(Eventcategorie::class, 'category_id');
    }

    public function pays(){
        return $this->belongsTo(Pays::class, 'country_id');
    }

    public function phonecountry(){
        return $this->belongsTo(Pays::class, 'phone_country_id');
    }

    public function whatsappcountry(){
        return $this->belongsTo(Pays::class, 'whatsapp_country_id');
    }

    public function photo(){
        return $this->hasOne(Picture::class, 'event_id');
    }
}
