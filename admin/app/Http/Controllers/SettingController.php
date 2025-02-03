<?php

namespace App\Http\Controllers;
use App\Models\Pays;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Activity;
use Illuminate\Support\Str;

class SettingController extends Controller
{

    public function __construct(){
        View::share('menu', 'profile');
        View::share('page_title', 'Mon profil');
        View::share('title', 'Paramètres');
        $this->middleware('auth');
        $this->middleware('status');
    }


    /**
     * Affiche la page de modification du profil d'un utilisateur connecté
     */
    public function profile(){
        $module = 'Profil';
        $action = 'Affichage du profil';
        $data['sub_title'] = 'Cette page est destinée à la modification du profil';
        Activity::saveActivity($module, $action);
        return view('pages.profile.index', $data);
    }

    public function editprofile(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'country_code' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'adresse' => 'required',
        ]);

        //dd($request->country_code);

        $pays = Pays::where('iso', $request->country_code)->firstOrFail();
        $data['pays_id'] = $pays->id;

        if (auth()->user()->update($data)) {
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Informations modifiees avec succes.');
            $module = 'Profil';
            $action = 'Modification du profil';
            Activity::saveActivity($module, $action);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Une erreur s\'est produite. Veuillez reessayer svp.');
            return back();
        }
    }

    public function editpassword(Request $request){
        $data = $request->validate([
            'password-old' => 'required',
            'password' => 'required|confirmed|min:6',
        ]);

        if (Hash::check($data['password-old'], Auth::user()->password)) {
            Auth::user()->update([
                'password' => Hash::make($data['password'])
            ]);

            //Fonction d'envoie de mail relative a la modification du mot de passe

            session()->flash('type', 'alert-success');
            session()->flash('message', 'Votre mot de passe a bien été modifié.');
            $module = 'Profil';
            $action = 'Modification du mot de passe';
            Activity::saveActivity($module, $action);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'L\'ancien mot de passe n\'est pas conforme. Veuillez entrer le bon.');
            return back();
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $module = 'Parametres';
        $action = 'Configuration des parametres';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à la modification des paramètres du site web.';
        return view('pages.setting.index', $data);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
           'name' => 'required',
           'email' => 'required|email',
           'logo' => 'required|',
           'logo_black' => 'required|',
           'favicon' => 'required|',
            'facebook' => 'nullable|url',
            'twitter' => 'nullable|url',
            'instagram' => 'nullable|url',
            'auteur' => 'required'
        ]);

        if (!$setting = Setting::first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite. Aucune configuration n\'a pu être trouvee.');
            return back();
        }

        $data = [
          'name' => htmlspecialchars($request->name),
          'slogan' => htmlspecialchars($request->slogan),
          'auteur' => htmlspecialchars($request->auteur),
          'mot_cle' => htmlspecialchars($request->mot_cle),
          'lien' => htmlspecialchars($request->lien),
          'email' => htmlspecialchars($request->email),
          'facebook' => htmlspecialchars($request->facebook),
          'twitter' => htmlspecialchars($request->twitter),
          'instagram' => htmlspecialchars($request->instagram),
          'phone' => htmlspecialchars($request->phone),
          'map' => htmlspecialchars($request->map),
          'logo' => htmlspecialchars($request->logo),
          'logo_black' => htmlspecialchars($request->logo_black),
          'favicon' => htmlspecialchars($request->favicon),
        ];

        if ($setting->update($data)){
            $module = 'Parametres';
            $action = 'Modification des configurations des parametres';
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les information ont bien été enregistrées avec succès.');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement, veuillez reessayer svp.');
            return back();
        }
    }
}
