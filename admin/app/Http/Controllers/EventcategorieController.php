<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Event;
use App\Models\Eventcategorie;
use App\Models\Pays;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use function Brick\Math\mod;

class EventcategorieController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');

        View::share('page_title', 'Catégories des évènements');
        View::share('title', 'Catégories des évènements');
        View::share('menu', 'event');
        $this->module = 'Catégories des évènements';
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $action = 'Affichage de la liste des catégories des évènements';
        Activity::saveActivity($this->module, $action);
        $data['categories'] = Eventcategorie::orderBy('title')->get();
        $data['sub_title'] = 'Cette page est utilisée pour afficher la liste des évènements';
        return view('pages.events.categories.index', $data);
    }

    public function events(Request $request){
        if(!$categorie = Eventcategorie::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucune categorie trouvée');
            return back();
        }

        $action = 'Affichage de la liste des évènements';
        Activity::saveActivity($this->module, $action);
        $data['title'] = $categorie->title;
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des évènements de la catégorie '.$categorie->title;
        $data['events'] = Event::where('category_id', $categorie->id)->orderByDesc('created_at')->paginate(100);
        return view('pages.events.index', $data);
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
            'title' => 'required|unique:eventcategories',
        ]);

        $data = [
            'title' => htmlspecialchars($request->title),
            'status' => 1,
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname
        ];

        if (Eventcategorie::create($data)){
            $action = 'Enregistrement des informations de la catégorie d\'eventement  '.ucfirst($request->title);
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la catégorie d\'eventement ont bien été enregistrées avec succès.');
            return to_route('events.categorie.index');

        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Eventcategorie $eventcategorie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        if ($categorie = Eventcategorie::find($request->id)){
            $action = 'Affichage de la page de modification de la categorie '.$categorie->title;
            Activity::saveActivity($this->module, $action);
            $data['commune'] = $categorie;
            $data['sub_title'] = 'Cette page est destinée à la modification des informations de la categorie '.$categorie->title;
            return view('pages.events.categories.edit', $data);
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune Categorie n\'a pu être trouvée.');
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'status' => 'required'
        ]);

        if(!$categorie = Eventcategorie::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, aucune catégorie trouvée.');
            return back();
        }

        if (Eventcategorie::whereTitle($request->title)->where('id', '!=', $categorie->id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Ce titre existe déjà.');
            return back();
        }

        $data = [
            'title' => htmlspecialchars($request->title),
            'status' => htmlspecialchars($request->status),
        ];

        if ($categorie->update($data)){
            $action = 'Enregistrement des informations de la Categories '.ucfirst($request->title);
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la categorie ont bien été enregistrées avec succès.');
            return to_route('events.categorie.index');

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
        if($categorie = Eventcategorie::find($request->id)){
            $categorie->delete();

            $action = 'Suppression de la categorie de plan '.$categorie->title;
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'La categorie a bien été supprimée.');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune categorie n\'a pu être trouvée.');
            return back();
        }
    }

    public function editStatus(Request $request){
        if($categorie = Eventcategorie::find($request->id)){
            $categorie->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activée' : $statusMsg = 'désactivée';

            $categorie->update(['status' => $newStatus]);
            $action = 'a '.$statusMsg.' la categorie '.$categorie->libelle;
            Activity::saveActivity($this->module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'La categorie a bien été '.$statusMsg);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune Categorie n\'a pu être trouvée.');
            return back();
        }
    }
}
