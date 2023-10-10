<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Endroit extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'name', 'user_id', 'categorie_id', 'adresse', 'country_id', 'commune', 'ville', 'phone', 'email', 'description', 'status', 'created_by',
        'facebook', 'instagram', 'siteweb'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function categorie(){
        return $this->belongsTo(Categoriesplan::class, 'categorie_id');
    }

    public function pays(){
        return $this->belongsTo(Pays::class, 'country_id');
    }

    public function images(){
        $pictures = Picture::where(['endroit_id' => $this->id, 'first' => 0])->get();
        return $pictures;
    }

    public function photo(){
        $picture = Picture::where(['endroit_id' => $this->id, 'first' => 1])->first();
        return $picture->name ?? null;
    }

    public function pictures(){
        return $this->hasMany(Picture::class, 'endroit_id');
    }

    public function offers(){
        return $this->hasMany(Offer::class, 'endroit_id');
    }

    public function deals(){
        return $this->hasMany(Deal::class);
    }

    public function commodites(){
        return $this->belongsToMany(Commodite::class, 'endroit_commodites')->withPivot('id', 'statut', 'created_by');
    }

    public function horaires(){
        return $this->hasMany(Horaire::class, 'endroit_id');
    }


}
