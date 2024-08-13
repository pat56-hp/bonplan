<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Etablissement extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'libelle', 'ville', 'adresse', 'email', 'phone', 'image', 'client_id', 'category_id', 'facebook', 'instagram', 'status', 'description'
    ];

    protected $hidden = [
        'updated_at'
    ];

    public function client(){
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function category(){
        return $this->belongsTo(Categories::class, 'category_id');
    }

    public function galleries(){
        return $this->hasMany(Gallerie::class, 'etablissement_id');
    }

    public function commodites(){
        return $this->belongsToMany(Commodite::class, 'etablissement_commodites', 'etablissement_id', 'commodite_id');
    }

    public function jours(){
        return $this->belongsToMany(Jour::class, 'horaires', 'etablissement_id', 'jour_id')->withPivot(['ouverture', 'fermeture']);
    }

    /**
     * Verifie si l'etablissement est ouvert ou non
     */
    public function getOpenAttribute() :bool{
        $now = now();
        $jours = $this->jours;

        $dayOfWeek = now()->dayOfWeek();

        //Verifie si le jour fait parti des horaires
        if (in_array(($dayOfWeek + 1), $jours->pluck('id'))) {
            $jour = $jours->whereId($dayOfWeek + 1)->first();

            if (!empty($jour)) {
                $horaire = $jour->pluck('pivot');
                $hourToDay = $now()->form('H:i:s');

                //Verifie si l'heure actuelle est compris entre l'ouverture et la fermeture
                if ($horaire['ouverture'] >= $hourToDay && $horaire['fermeture'] <= $hourToDay) {
                    return true;
                }
            }
        }

        return false;
    }
}
