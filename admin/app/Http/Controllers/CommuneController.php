<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Commune;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class CommuneController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');
        View::share('page_title', 'Communes');
        View::share('title', 'Communes');
        View::share('communes', Commune::all());
        View::share('menu', 'commune');
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $module = 'Communes';
        $action = 'Affichage de la liste des communes';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des communes';
        return view('pages.commune.index', $data);
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
           'libelle' => 'required|unique:communes'
        ]);
        
        $data = [
            'libelle' => htmlspecialchars($request->libelle),
            'status' => 1,
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname
        ];
        
        if (Commune::create($data)){
            $module = 'Commune';
            $action = 'Enregistrement des informations de la commune  '.ucfirst($request->libelle);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la commune ont bien été enregistrées avec succès.');
            return to_route('commune.index');

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
        if ($commune = Commune::find($request->id)){
            $module = 'Communes';
            $action = 'Affichage de la page de modification de la commune '.$commune->libelle;
            Activity::saveActivity($module, $action);
            $data['commune'] = $commune;
            $data['sub_title'] = 'Cette page est destinée à la modification des informations de la commune '.$commune->libelle;
            return view('pages.commune.edit', $data);
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune commune n\'a pu être trouvée.');
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'libelle' => 'required'
        ]);
        
        if(!$commune = Commune::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
            return back();
        }

        $data = [
            'libelle' => htmlspecialchars($request->libelle),
            'status' => htmlspecialchars($request->status),
        ];

        if ($commune->update($data)){
            $module = 'Commune';
            $action = 'Enregistrement des informations de la commune  '.ucfirst($request->libelle);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la commune ont bien été enregistrées avec succès.');
            return to_route('commune.index');

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
        if($commune = Commune::find($request->id)){
            $commune->delete();

            $module = 'Communes';
            $action = 'Suppression de la commune '.$commune->libelle;
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'La commune a bien été supprimée.');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune commune n\'a pu être trouvée.');
            return back();
        }
    }

    public function editStatus(Request $request){
        if($commune = Commune::find($request->id)){
            $commune->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activée' : $statusMsg = 'désactivée';

            $commune->update(['status' => $newStatus]);
            $module = 'Communes';
            $action = 'a '.$statusMsg.' la commune '.$commune->libelle;
            Activity::saveActivity($module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'La commune a bien été '.$statusMsg);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune commune n\'a pu être trouvée.');
            return back();
        }
    }
}
