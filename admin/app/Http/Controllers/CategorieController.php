<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Categoriesplan;
use App\Models\Endroit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class CategorieController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');
        View::share('page_title', 'Categories de plan');
        View::share('title', 'Categories de plan');
        View::share('categories', Categoriesplan::all());
        View::share('menu', 'categorieplan');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $module = 'Categories de plan';
        $action = 'Affichage de la liste des Categories de plan';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des Categories de plan';
        return view('pages.bonplan.categorie.index', $data);
    }

    public function bonplan(Request $request){
        if(!$categorie = Categoriesplan::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucune categorie trouvée');
            return back();
        }

        $module = 'Bons plans de divertissement';
        $action = 'Affichage de la liste des bons plans';
        Activity::saveActivity($module, $action);
        $data['title'] = $categorie->libelle;
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des des bons plans de  '.$categorie->libelle;
        $data['bonplans'] = Endroit::where('categorie_id', $categorie->id)->orderByDesc('created_at')->paginate(100);
        return view('pages.bonplan.index', $data);
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
            $module = 'Categories de plan';
            $action = 'Enregistrement des informations de la Categories de plan  '.ucfirst($request->libelle);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la Categorie de plan ont bien été enregistrées avec succès.');
            return to_route('bonplan.categorie.index');

        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
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
            $module = 'Categories de plan';
            $action = 'Affichage de la page de modification de la Categories de plan '.$categorie->libelle;
            Activity::saveActivity($module, $action);
            $data['category'] = $categorie;
            $data['sub_title'] = 'Cette page est destinée à la modification des informations de la Categories de plan '.$categorie->libelle;
            return view('pages.bonplan.categorie.edit', $data);
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune Categories de plan n\'a pu être trouvée.');
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
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
            return back();
        }

        $data = [
            'libelle' => htmlspecialchars($request->libelle),
            'icon' => $request->icon,
            'status' => htmlspecialchars($request->status),
        ];

        if ($categorie->update($data)){
            $module = 'Categories de plan';
            $action = 'Enregistrement des informations de la Categories de plan  '.ucfirst($request->libelle);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la Categories de plan ont bien été enregistrées avec succès.');
            return to_route('bonplan.categorie.index');

        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
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

            $module = 'Categories de plan';
            $action = 'Suppression de la Categories de plan '.$categorie->libelle;
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'La Categories de plan a bien été supprimée.');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune Categories de plan n\'a pu être trouvée.');
            return back();
        }
    }

    public function editStatus(Request $request){
        if($categorie = Categoriesplan::find($request->id)){
            $categorie->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activée' : $statusMsg = 'désactivée';

            $categorie->update(['status' => $newStatus]);
            $module = 'Categories de plan';
            $action = 'a '.$statusMsg.' la Categories de plan '.$categorie->libelle;
            Activity::saveActivity($module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'La Categories de plan a bien été '.$statusMsg);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune Categories de plan n\'a pu être trouvée.');
            return back();
        }
    }
}
