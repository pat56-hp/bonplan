<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FrontendController extends Controller
{
    /**
     * Recuperation des categories
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getCategories(){
        return CategoryResource::collection(
            Categories::whereStatus(1)->orderBy('libelle')->get()
        );
    }
}
