<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pays extends Model
{
    use HasFactory;

    protected $fillable = [
        'iso', 'name', 'nicename', 'iso3', 'numcode', 'phonecode'
    ];

    public function users(){
        return $this->hasMany(User::class, 'country_id');
    }

    public function admins(){
        return $this->hasMany(Admin::class);
    }

    public function events(){
        return $this->hasMany(Event::class, 'country_id');
    }

    public function phonecountries(){
        return $this->hasMany(Event::class, 'phonecountry');
    }

    public function whatsappcountries(){
        return $this->hasMany(Event::class, 'whatsappcountry');
    }


}
