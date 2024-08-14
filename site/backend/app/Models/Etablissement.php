<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Etablissement extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'libelle', 'ville', 'adresse', 'email', 'phone', 'image', 'client_id', 'category_id', 'facebook', 'instagram', 'status', 'description'
    ];

    protected $appends = ['open'];

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
    public function getOpenAttribute(){
        $now = Carbon::now();
        $jours = $this->jours;

        $dayOfWeek = $now->dayOfWeek + 1;

        //Verifie si le jour fait parti des horaires
        if (in_array($dayOfWeek, $jours->pluck('id')->toArray())) {
            $jour = $jours->where('id', $dayOfWeek)->first();

            if (!empty($jour)) {
                $horaire = $jour->pivot;
                $currentHour = $now->format('H:i:s');

                if ($horaire['ouverture'] <= $currentHour && $horaire['fermeture'] >= $currentHour) {
                    return true;
                } elseif ($horaire['ouverture'] <= $currentHour && $horaire['fermeture'] < $horaire['ouverture']) {
                    return true;
                } elseif ($horaire['ouverture'] > $horaire['fermeture'] && ($currentHour >= $horaire['ouverture'] || $currentHour <= $horaire['fermeture'])) {
                    return true;
                }
            }
        }

        return false;
    }
}
