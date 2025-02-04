<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Categoriesplan;
use App\Models\Endroit;
use App\Models\Etablissement;
use App\Services\ActivityService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class CategorieController extends Controller
{
    private $module;
    private ActivityService $activityService;

    public function __construct(ActivityService $activityService)
    {
        $this->middleware('auth');
        $this->middleware('status');
        $this->activityService = $activityService;
        $this->module = "Categories d'établissement";
        View::share('page_title', 'Categories de plan');
        View::share('title', 'Categories de plan');
        View::share('categories', Categoriesplan::withCount('etablissements')->get());
        View::share('menu', 'categorieplan');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $action = 'Affichage de la liste des Categories de plan';
        $this->activityService->createActivity($this->module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des Categories de plan';
        return view('pages.etablissements.categorie.index', $data);
    }

    public function etablissement(Request $request){
        if(!$categorie = Categoriesplan::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucune categorie trouvée');
            return back();
        }

        $action = 'Affichage de la liste des bons plans';
        $this->activityService->createActivity($this->module, $action);
        $data['title'] = $categorie->libelle;
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des des bons plans de  '.$categorie->libelle;
        $data['etablissements'] = Etablissement::where('category_id', $categorie->id)->orderByDesc('created_at')->paginate(100);
        return view('pages.etablissements.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'libelle' => 'required|unique:categoriesplans',
            'icon' => 'required'
        ]);

        $data = [
            'libelle' => htmlspecialchars($request->libelle),
            'icon' => $request->icon,
            'status' => 1,
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname
        ];

        if (Categoriesplan::create($data)){
            $action = 'Enregistrement des informations de la Categories de plan  '.ucfirst($request->libelle);
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'Les informations de la Categories de plan ont bien été enregistrées avec succès.');
        }else{
            alert('danger', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        if ($categorie = Categoriesplan::find($request->id)){
            $action = 'Affichage de la page de modification de la Categories de plan '.$categorie->libelle;
            $this->activityService->createActivity($this->module, $action);
            $data['category'] = $categorie;
            $data['sub_title'] = 'Cette page est destinée à la modification des informations de la Categories de plan '.$categorie->libelle;
            return view('pages.etablissements.categorie.edit', $data);
        }else{
            alert('danger', 'Oups, une erreur s\'est produite, aucune Categories de plan n\'a pu être trouvée.');
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'libelle' => 'required',
            'icon' => 'required'
        ]);

        if(!$categorie = Categoriesplan::find($request->id)){
            alert('danger', 'Oups, une erreur s\'est produite, aucune Categories de plan n\'a pu être trouvée.');
            return back();
        }

        $data = [
            'libelle' => htmlspecialchars($request->libelle),
            'icon' => $request->icon,
            'status' => htmlspecialchars($request->status),
        ];

        if ($categorie->update($data)){
            $action = 'Enregistrement des informations de la Categories de plan  '.ucfirst($request->libelle);
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'Les informations de la Categories de plan ont bien été enregistrées avec succès.');
            return to_route('etablissements.categorie.index');
        }else{
            alert('danger', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        if($categorie = Categoriesplan::find($request->id)){
            $categorie->delete();

            $action = 'Suppression de la Categories de plan '.$categorie->libelle;
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'La Categories de plan a bien été supprimée');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            alert('danger', 'Oups, une erreur s\'est produite, aucune Categories de plan n\'a pu être trouvée.');
            return back();
        }
    }

    public function editStatus(Request $request){
        if($categorie = Categoriesplan::find($request->id)){
            $categorie->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activée' : $statusMsg = 'désactivée';

            $categorie->update(['status' => $newStatus]);
            $action = 'a '.$statusMsg.' la Categories de plan '.$categorie->libelle;
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'La Categories de plan a bien été '.$statusMsg);
            return back();
        }else{
            alert('danger', 'Oups, une erreur s\'est produite, aucune Categories de plan n\'a pu être trouvée.');
            return back();
        }
    }
}
