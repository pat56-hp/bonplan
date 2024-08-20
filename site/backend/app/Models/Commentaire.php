<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commentaire extends Model
{
    use HasFactory;

    protected $appends = ['date'];

    protected $fillable = [
        'commentaire',
        'note',
        'client_id',
        'etablissement_id'
    ];

    protected $hidden = ['updated_at'];

    public function etablissement(){
        return $this->belongsTo(Etablissement::class, 'etablissement_id');
    }

    public function client(){
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function getDateAttribute(){
        return Carbon::parse($this->created_at)->diffForHumans();
    }
}
