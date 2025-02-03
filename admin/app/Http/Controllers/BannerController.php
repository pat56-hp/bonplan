<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Banner;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class BannerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');
        View::share('page_title', 'Categories de plan');
        View::share('title', 'Bannières');
        View::share('menu', 'banner');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $module = 'Bannière';
        $action = 'Affichage de la liste des Bannières';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des Bannières';
        $data['banners'] = Banner::orderByDesc('created_at')->get();
        return view('pages.banner.index', $data);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $module = 'Bannière';
        $action = 'Affichage de la vue de creation des Bannières';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à la creation des Bannières';
        return view('pages.banner.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'image' => 'required'
        ]);

        $data = [
            'title' => htmlspecialchars($request->title),
            'subtitle' => htmlspecialchars($request->subtitle),
            'btn_first' => !empty($request->btn_first_title) ? 1 : 0,
            'btn_first_title' => htmlspecialchars($request->btn_first_title),
            'btn_first_url' => htmlspecialchars($request->btn_first_url),
            'btn_second' => !empty($request->btn_second_title) ? 1 : 0,
            'btn_second_title' => htmlspecialchars($request->btn_second_title),
            'btn_second_url' => htmlspecialchars($request->btn_second_url),
            'image' => $request->image,
            'statut' => 1,
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname
        ];

        if (Banner::create($data)){
            $module = 'Banniere';
            $action = 'Enregistrement des informations de la banniere ';
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la banniere ont bien été enregistrées avec succès.');
            return to_route('banner.index');

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
        if ($banner = Banner::find($request->id)){
            $module = 'Banniere';
            $action = 'Affichage de la page de modification d\'une banniere';
            Activity::saveActivity($module, $action);
            $data['banner'] = $banner;
            $data['sub_title'] = 'Cette page est destinée à la modification des informations d\'une banniere';
            return view('pages.banner.edit', $data);
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune banniere n\'a pu être trouvée.');
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'image' => 'required'
        ]);

        if(!$banner = Banner::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, Aucune banniere ne correspond.');
            return back();
        }

        $data = [
            'title' => htmlspecialchars($request->title),
            'subtitle' => htmlspecialchars($request->subtitle),
            'btn_first' => !empty($request->btn_first_title) ? 1 : 0,
            'btn_first_title' => htmlspecialchars($request->btn_first_title),
            'btn_first_url' => htmlspecialchars($request->btn_first_url),
            'btn_second' => !empty($request->btn_second_title) ? 1 : 0,
            'btn_second_title' => htmlspecialchars($request->btn_second_title),
            'btn_second_url' => htmlspecialchars($request->btn_second_url),
            'image' => $request->image,

        ];

        if ($banner->update($data)){
            $module = 'Banniere';
            $action = 'Enregistrement des informations de la banniere ';
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de la banniere ont bien été enregistrées avec succès.');
            return to_route('banner.index');

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
        if($banner = Banner::find($request->id)){
            $banner->delete();

            $module = 'Categories de plan';
            $action = 'Suppression de la banniere';
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'La banniere a bien été supprimée.');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune banniere n\'a pu être trouvée.');
            return back();
        }
    }

    public function editStatus(Request $request){
        if($banner = Banner::find($request->id)){
            $banner->statut == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activée' : $statusMsg = 'désactivée';

            $banner->update(['statut' => $newStatus]);
            $module = 'Categories de plan';
            $action = 'a '.$statusMsg.' la banniere'.$banner->libelle;
            Activity::saveActivity($module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'La banniere a bien été '.$statusMsg);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune banniere n\'a pu être trouvée.');
            return back();
        }
    }
}
