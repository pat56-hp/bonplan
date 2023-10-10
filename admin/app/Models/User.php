<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'name',
        'lastname',
        'email',
        'password',
        'phone',
        'country_id',
        'city',
        'state',
        'address',
        'status',
        'validation_status',
        'validation_date',
        'created_by',
        'type'
    ];

    public function image(){
        return $this->hasOne(Picture::class, 'user_id');
    }

    public function recto(){
        $picture = Picture::where(['user_identity_id' => $this->id, 'type' => 1])->first();
        return $picture->name ?? null;
    }

    public function verso(){
        $picture =  Picture::where(['user_identity_id' => $this->id, 'type' => 2])->first();
        return $picture->name ?? null;
    }

    public function pays(){
        return $this->belongsTo(Pays::class, 'country_id');
    }

    public function commune(){
        return $this->belongsTo(Commune::class, 'commune_id');
    }

    public function offers(){
        return $this->hasMany(Offer::class, 'user_id');
    }

    public function deals(){
        return $this->hasMany(Deal::class);
    }
}
