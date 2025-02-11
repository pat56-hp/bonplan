<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CommoditeResource;
use App\Http\Resources\EtablissementResource;
use App\Http\Resources\EventCategoryResource;
use App\Http\Resources\EventResource;
use App\Models\Category;
use App\Models\Commentaire;
use App\Models\Commodite;
use App\Models\Etablissement;
use App\Models\Event;
use App\Models\EventCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FrontendController extends Controller
{
    /**
     * Recuperation des categories
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getCategories(): JsonResource{
        return CategoryResource::collection(
            Category::whereStatus(1)->orderBy('libelle')->get()
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
     * Recuperation des categories des evenements
     */
    public function getEventCategories() :JsonResponse{
        $total = Event::where(['status' => 1, 'validate' => 1])->count();
        $categories = EventCategoryResource::collection(
            EventCategory::whereStatus(1)->orderBy('title')->get()
        );

        return response()->json([
            'data' => $categories,
            'total_event' => $total
        ]);
    }

    /**
     * Recuperation des datas sur la page d'acceuil
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getDataToHome(){

        $events = EventResource::collection(
            Event::where(['status' => 1, 'validate' => 1])->inRandomOrder()->take(4)->get()
        );

        $categories = CategoryResource::collection(
            Category::whereStatus(1)->orderBy('libelle')->get()
        );

        $recommandes = EtablissementResource::collection(
            Etablissement::where(['status' => 1, 'validate' => 1])->inRandomOrder()->take(9)->get()
        );

        $bonPlans = EtablissementResource::collection(
            Etablissement::where(['status' => 1, 'validate' => 1])->inRandomOrder()->take(9)->get()
        );

        $totalPlan = Etablissement::where(['status' => 1, 'validate' => 1])->count();

        return response()->json([
            'events' => $events,
            'categories' => $categories,
            'recommandes' => $recommandes,
            'bonPlans' => $bonPlans,
            'total' => $totalPlan
        ]);
    }

    /**
     * Recuperation de tous les etablissements
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function explorePlan(Request $request){
        $etablissements = Etablissement::where(['status' => 1, 'validate' => 1])
            ->when(!empty($request->adresse), fn($q) => $q->whereAll(['adresse', 'ville'], 'LiKE', '%'.$request->adresse.'%'))
            ->when(!empty($request->libelle) && $request->libelle !== 'null' && $request->libelle !== '', fn($q) => $q->whereAny(['libelle', 'adresse', 'ville', 'description'], 'LiKE', '%'. $request->libelle .'%'))
            ->when(!empty($request->category), fn($q) => $q->whereIn('category_id', explode(',', $request->category)))
            ->when(!empty($request->commodite), fn($q) => $q->whereHas('commodites', fn($q) => $q->whereIn('commodite_id', explode(',', $request->commodite))))
            ->latest()
            ->paginate(10);
        //return explode(',',$request->category);
        $etablissementResource = EtablissementResource::collection($etablissements);

        return response()->json([
            'data' => $etablissementResource,
            'meta' => [
                'current_page' => $etablissements->currentPage(),
                'total' => $etablissements->total(),
                'per_page' => $etablissements->perPage(),
            ]
        ]);
    }

    /**
     * Recuperation des informations liees a un etablissement
     */
    public function showEtablissement(Etablissement $etablissement){
        $commentaireQuery = Commentaire::where(['etablissement_id' => $etablissement->id]);
        $commentaires = $commentaireQuery->clone()->with(['client'])->paginate(5);
        $sommeAvis = $commentaireQuery->clone()->sum('note');
        $ratingNote = [
            1 => $commentaireQuery->clone()->where('note', 1)->count(),
            2 => $commentaireQuery->clone()->where('note', 2)->count(),
            3 => $commentaireQuery->clone()->where('note', 3)->count(),
            4 => $commentaireQuery->clone()->where('note', 4)->count(),
            5 => $commentaireQuery->clone()->where('note', 5)->count(),
        ];

        $note = 0;
        if ($commentaires->total() > 0) {
            $note =  $sommeAvis / (float) $commentaires->total();
            $note = number_format($note, 2, '.', ' ');
        }

        return response()->json([
            'data' => $etablissement->load(['category', 'galleries', 'commodites', 'jours']),
            'commentaires' => $commentaires,
            'commentaireMeta' => [
                'current_page' => $commentaires->currentPage(),
                'total' => $commentaires->total(),
                'per_page' => $commentaires->perPage()
            ],
            'globalNote' => $note,
            'noteByRating' => $ratingNote,
            'other' => EtablissementResource::collection(
                Etablissement::where(['status' => 1, 'validate' => 1])
                    ->where('id', '!=', $etablissement->id)
                    ->inRandomOrder()
                    ->take(6)
                    ->get()
            ),
            'message' => 'Details de l\'etablissement'
        ]);
    }

    /**
     * Recuperation des evenenements
     */
    public function getEvents(Request $request){
        $events = Event::where(['status' => 1, 'validate' => 1])
            ->when(!empty($request->q) && $request->q !== 'null' && $request->q !== '', fn($q) => $q->whereAny(['titre', 'organisateur', 'adresse', 'description'], 'LIKE', '%' . $request->q . '%'))
            ->when(!empty($request->category), fn($q) => $q->where('category_id', $request->category))
            ->latest()
            ->paginate(50);

        $eventResources = EventResource::collection($events);

        return response()->json([
            'data' => $eventResources,
            'meta' => [
                'current_page' => $events->currentPage(),
                'total' => $events->total(),
                'per_page' => $events->perPage()
            ]
        ]);
    }

    /**
     * Recuperation des informations d'un evenement
     */
    public function showEvent(Event $event){
        return response()->json([
            'data' => $event->load(['category', 'galleries']),
            'other' => EventResource::collection(
                Event::where(['status' => 1, 'validate' => 1])
                    ->where('id', '!=', $event->id)
                    ->inRandomOrder()
                    ->take(4)
                    ->get()
            ),
            'message' => 'Details de L\'evenement'
        ]);
    }

    /**
     * Recuperation des elements de la pages d'accueil du mobile
     */

     public function getMobleDataHome(){
        $planOfWeek = EtablissementResource::collection(
            Etablissement::where(['status' => 1, 'validate' => 1])->inRandomOrder()->take(9)->get()
        );

        $planByCategory = EtablissementResource::collection(
            Etablissement::where(['status' => 1, 'validate' => 1])->inRandomOrder()->take(10)->get()
        );

        $categories = CategoryResource::collection(
            Category::whereStatus(1)->orderBy('libelle')->get()
        );

        return response()->json([
            'planOfWeek' => $planOfWeek,
            'categories' => $categories,
            'planByCategory' => $planByCategory
        ]);
     }

}
