<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Categoriesplan;
use App\Models\Commune;
use App\Models\Deal;
use App\Models\Endroit;
use App\Models\Pays;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class DealController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');

        View::share('page_title', 'Plan de la semaine');
        View::share('title', 'Plan de la semaine');
        View::share('categories', Categoriesplan::where('status', 1)->get());
        View::share('communes', Commune::where('status', 1)->get());
        View::share('users', User::where(['type' => 1, 'status' => 1, 'validation_status' => 1])->get());
        View::share('plans', Endroit::where(['status' => 1])->get());
        View::share('countries', Pays::all());
        View::share('menu', 'bonplan');
        $this->module = 'Bons plans de divertissement';
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $action = 'Affichage de la liste des plans de la semaine';
        Activity::saveActivity($this->module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des plans de la semaine';
        $data['deals'] = Deal::orderByDesc('created_at')->paginate(100);
        return view('pages.bonplan.deal.index', $data);
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
        $request->validate([
            'debut' => 'required|date',
            'fin' => 'required|date',
        ]);

        //Verification des dates
        if ($request->fin < $request->debut || $request->fin < now()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Veuillez vérifier les dates renseignées svp.');
            return back();
        }

        if(!$endroit = Endroit::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun plan de divertissement trouvé.');
            return back();
        }

        $data = [
            'user_id' => $endroit->user_id,
            'endroit_id' => $endroit->id,
            'debut' => htmlspecialchars($request->debut),
            'fin' => htmlspecialchars($request->fin),
            'status' => 1,
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname
        ];

        if (Deal::create($data)){
            $action = 'Sauvegarde d\'un nouveau deal : '. $endroit->name;
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Plan de divertissement ajouté aux deals avec succes');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Une erreur s\'est produite lors de l\'enregistrement.');
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        if ($deal = Deal::find($request->id)){
            $deal->delete();

            $action = 'Suppression de '. $deal->endroit->name.' de la liste des plans de la semaine.';
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Plan de divertissement retiré des plans de la semaine avec succès');
            return back();
        }

        session()->flash('type', 'alert-danger');
        session()->flash('message', 'Une erreur s\'est produite.');
        return back();
    }

    public function changeStatus(Request $request){
        if ($deal = Deal::find($request->id)){
            $oldStatus = $deal->status;
            $newStatus = $oldStatus == 1 ? 0 : 1;
            $message = $newStatus == 1 ? 'activé' : 'désactivé';

            $deal->update(['status' => $newStatus]);

            $action = 'a '. $message . ' '. $deal->endroit->name.' de la liste des plans de la semaine.';
            Activity::saveActivity($this->module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'Le plan de la semaine a bien ete '. $message);
            return back();
        }

        session()->flash('type', 'alert-danger');
        session()->flash('message', 'Une erreur s\'est produite, aucun plan de la semaine trouvé.');
        return back();
    }
}
