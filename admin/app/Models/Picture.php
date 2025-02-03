<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Picture extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'name', 'type','status', 'user_id', 'endroit_id', 'user_identity_id', 'article_id', 'event_id', 'offer_id', 'publisher_id', 'commodity_id', 'entreprise_id', 'created_by', 'first'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function endroit(){
        return $this->belongsTo(Endroit::class, 'endroit_id');
    }

    public function user_identity(){
        return $this->belongsTo(User::class, 'user_identity_id');
    }

    public function offer(){
        return $this->belongsTo(Offer::class, 'offer_id');
    }

    public function event(){
        return $this->belongsTo(Event::class, 'event_id');
    }

    // public function article(){
    //     return $this->belongsTo(Article)
    // }
}
