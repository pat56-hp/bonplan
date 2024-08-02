<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CommoditeResource;
use App\Models\Categories;
use App\Models\Commodite;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Http;

class FrontendController extends Controller
{
    /**
     * Recuperation des categories
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getCategories(): JsonResource{
        return CategoryResource::collection(
            Categories::whereStatus(1)->orderBy('libelle')->get()
        );
    }

    /**
     * Recuperation des commodites
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getCommodites(): JsonResource{
        return CommoditeResource::collection(
            Commodite::whereStatus(1)->orderBy('libelle')->get()
        );
    }
}
