<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CommoditeResource;
use App\Http\Resources\EtablissementResource;
use App\Models\Categories;
use App\Models\Commodite;
use App\Models\Etablissement;
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

    /**
     * Recuperation des datas sur la page d'acceuil
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getDataToHome(){
        $categories = CategoryResource::collection(
            Categories::whereStatus(1)->orderBy('libelle')->get()
        );

        $recommandes = EtablissementResource::collection(
            Etablissement::where(['status' => 1, 'validate' => 1])->inRandomOrder()->take(9)->get()
        );

        $bonPlans = EtablissementResource::collection(
            Etablissement::where(['status' => 1, 'validate' => 1])->inRandomOrder()->take(9)->get()
        );

        return response()->json([
            'categories' => $categories,
            'recommandes' => $recommandes,
            'bonPlans' => $bonPlans
        ]);
    }

    /**
     * Recuperation de tous les etablissements
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function explorePlan(Request $request){
        $etablissements = Etablissement::where(['status' => 1, 'validate' => 1])
            ->when(!empty($request->adresse), fn($q) => $q->whereAll(['adresse', 'ville'], 'LiKE', '%'.$request->adresse.'%'))
            ->when(!empty($request->category), fn($q) => $q->where('category_id', $request->category))
            ->latest()
            ->paginate(50);
        
        $etablissementResource = EtablissementResource::collection($etablissements);

        return response()->json([
            'data' => $etablissementResource,
            'meta' => [
                'current_page' => $etablissements->currentPage(),
                'total' => $etablissements->total(),
                'per_page' => $etablissements->perPage()
            ]
        ]);
    }
}
