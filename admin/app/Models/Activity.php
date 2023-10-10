<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id','module','action','ip','navigator','pays','codepays','url',
    ];

    public function admin() {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

    public static function saveActivity($module, $action){

        $activity = new Activity;            
        $activity->admin_id = Auth::user()->id;
        $activity->module = $module;
        $activity->action = $action;
        $activity->save();

        return $activity;
    }
}
