<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\View;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');
        View::share('menu', 'admin');
        View::share('page_title', 'Utilisateurs');
        View::share('title', 'Utilisateurs');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['admins'] = Admin::orderBy('name')->get();
        $module = 'Utilisateur';
        $action = 'Affichage de la liste des utilisateurs';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des utilisateurs';
        return view('pages.admin.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $module = 'Utilisateur';
        $action = 'Affichage de la page de creation d\'un utilisateur';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à la création d\'un utilisateurs';
        return view('pages.admin.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:admins',
            'phone' => 'required|unique:admins',
            'adresse' => 'required',
            'role' => 'required',
            'status' => 'required|integer'
        ]);

        $data['password'] = !empty($request->password) ? Hash::make($request->email) : Hash::make($request->password);
        $data['created_by'] = Auth::user()->name.' '.Auth::user()->lastname;

        if (Admin::create($data)){
            $module = 'Utilisateur';
            $action = 'Enregistrement de l\'utilisateur '.ucfirst($request->name).' '.ucfirst($request->lastname);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Nouvel utilisateur enregistré avec succès.');
            return to_route('admin.index');
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement. Veuillez rééssayer svp!');
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
        if ($admin = Admin::find($request->id)){
            $module = 'Utilisateur';
            $action = 'Affichage de la page de modification de l\'utilisateur '.$admin->name.' '.$admin->lastname;
            Activity::saveActivity($module, $action);
            $data['admin'] = $admin;
            $data['sub_title'] = 'Cette page est destinée à la modification des informations du profil de l\'utilisateur '.$admin->name.' '.$admin->lastname;
            return view('pages.admin.edit', $data);
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucun utilisateur n\'a pu être trouvé.');
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'adresse' => 'required',
            'role' => 'required',
            'status' => 'required|integer',
            'id' => 'required|integer'
        ]);

        if (!$admin = Admin::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucun utilisateur n\'a pu être trouvé.');
            return back();
        }

        if (Admin::where('email', $request->email)->where('id', '!=', $admin->id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, l\'email saisie est déjà utilisé.');
            return back();
        }

        if (Admin::where('phone', $request->phone)->where('id', '!=', $admin->id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, le contact saisie est déjà utilisé.');
            return back();
        }

        //dd($request->password);
        if(!empty($request->password))
            $data['password'] = Hash::make($request->password);
        else
            unset($data['password']);

        if ($admin->update($data)){
            $module = 'Utilisateur';
            $action = 'Modification des informations de l\'utilisateur '.ucfirst($request->name).' '.ucfirst($request->lastname);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les information de l\'utilisateur ont bien été modifiées avec succès.');
            return to_route('admin.index');
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement. Veuillez rééssayer svp!');
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        if($admin = Admin::find($request->id)){
            $admin->delete();

            $module = 'Utilisateur';
            $action = 'Suppression du compte de l\'utilisateur '.$admin->name.' '.$admin->lastname;
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Le compte de l\'utilisateur a bien été supprimé.');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucun utilisateur n\'a pu être trouvé.');
            return back();
        }
    }

    public function editStatus(Request $request){
        if($admin = Admin::find($request->id)){
            $admin->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activé' : $statusMsg = 'désactivé';

            $admin->update(['status' => $newStatus]);
            $module = 'Utilisateur';
            $action = 'a '.$statusMsg.' le compte de l\'utilisateur '.$admin->name.' '.$admin->lastname;
            Activity::saveActivity($module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'Le compte de l\'utilisateur a bien été '.$statusMsg);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucun utilisateur n\'a pu être trouvé.');
            return back();
        }
    }
}
