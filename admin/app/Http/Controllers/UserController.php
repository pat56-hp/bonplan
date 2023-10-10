<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Commune;
use App\Models\Pays;
use App\Models\Picture;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');
        View::share('page_title', 'Inscription');
        View::share('title', 'Inscription');
        View::share('countries', Pays::all());
        View::share('communes', Commune::all());
        View::share('menu', 'user');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $module = 'Inscriptions';
        $action = 'Affichage de la liste des inscriptions';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des inscriptions';
        $data['users'] = User::orderByDesc('created_by')->paginate(100);
        return view('pages.user.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $module = 'Inscriptions';
        $action = 'Affichage de la liste des inscriptions';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à la creation des inscriptions';
        return view('pages.user.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'type' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users',
            'country_code' => 'required',
            'city' => 'required',
            'state' => 'required',
            'picture' => 'nullable',
            'recto' => 'nullable',
            'verso' => 'nullable',
            'password' => 'required',
            'status' => 'required'
        ]);

        $data = [
            'name' => htmlspecialchars($request->name),
            'lastname' => htmlspecialchars($request->lastname),
            'type' => htmlspecialchars($request->type),
            'email' => htmlspecialchars($request->email),
            'phone' => htmlspecialchars($request->phone),
            'address' => htmlspecialchars($request->address),
            'country_id' => Pays::where('iso', $request->country_code)->first()->id ?? 53,
            'city' => htmlspecialchars($request->city),
            'state' => htmlspecialchars($request->state),
            'password' => $request->password ? Hash::make($request->password) : Hash::make($request->email),
            'status' => htmlspecialchars($request->status),
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
            'validation_status' => 1,
            'validation_date' => Carbon::now()
        ];

        //Enregistrement des donnees
        if ($user = User::create($data)){
            if ($request->picture){
                Picture::create([
                    'name' => $request->picture,
                    'status' => 1,
                    'user_id' => $user->id,
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname
                ]);
            }
            if ($request->recto){
                Picture::create([
                    'name' => $request->recto,
                    'status' => 1,
                    'user_identity_id' => $user->id,
                    'type' => 1,
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname
                ]);
            }
            if ($request->verso){
                Picture::create([
                    'name' => $request->verso,
                    'status' => 1,
                    'type' => 2,
                    'user_identity_id' => $user->id,
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname
                ]);
            }

            $module = 'Inscription';
            $action = 'Enregistrement des informations de l\'inscription de  '.ucfirst($user->name).' '.ucfirst($user->lastname);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les informations de l\'utilisateur ont bien été enregistrées avec succès.');
            return to_route('user.index');

        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite pendant l\'enregistrement.');
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        if ($user = User::find($request->id)){
            $module = 'Inscription';
            $action = 'Affichage de la page de modification de l\'utilisateur '.$user->name.' '.$user->lastname;
            Activity::saveActivity($module, $action);
            $data['user'] = $user;
            $data['sub_title'] = 'Cette page est destinée à la modification des informations du profil de l\'utilisateur '.$user->name.' '.$user->lastname;
            return view('pages.user.edit', $data);
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
        $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'type' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'country_code' => 'required',
            'city' => 'required',
            'state' => 'required',
            'status' => 'required'
        ]);

        if (!$user = User::where('id', $request->id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, aucun utilisateur n\'a pu être trouvé.');
            return back();
        }

        if(User::where('email', $request->email)->where('id', '!=', $user->id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, cet adresse email est déjà utilisé.');
            return back();
        }

        if(User::where('phone', $request->phone)->where('id', '!=', $user->id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, ce contact est déjà utilisé.');
            return back();
        }

        $data = [
            'password' => $request->password ? Hash::make($request->password) : $user->password,
            'name' => htmlspecialchars($request->name),
            'lastname' => htmlspecialchars($request->lastname),
            'type' => htmlspecialchars($request->type),
            'email' => htmlspecialchars($request->email),
            'phone' => htmlspecialchars($request->phone),
            'address' => htmlspecialchars($request->address),
            'country_id' => Pays::where('iso', $request->country_code)->first()->id ?? 53,
            'city' => htmlspecialchars($request->city),
            'state' => htmlspecialchars($request->state),
            'status' => htmlspecialchars($request->status),
        ];

        //Enregistrement des donnees
        if ($user->update($data)){
            if ($request->picture){
                if (!Picture::where('user_id', $user->id)->update(['name' => $request->picture])){
                    Picture::create([
                        'name' => $request->picture,
                        'status' => 1,
                        'user_id' => $user->id,
                        'created_by' => Auth::user()->name.' '.Auth::user()->lastname
                    ]);
                }
            }
            if ($request->recto){
                if (!Picture::where(['user_identity_id'=> $user->id, 'type' => 1])->update(['name' => $request->recto])){
                    Picture::create([
                        'name' => $request->recto,
                        'status' => 1,
                        'user_identity_id' => $user->id,
                        'type' => 1,
                        'created_by' => Auth::user()->name.' '.Auth::user()->lastname
                    ]);
                }
            }
            if ($request->verso){
                if (!Picture::where(['user_identity_id'=> $user->id, 'type' => 2])->update(['name' => $request->verso])){
                    Picture::create([
                        'name' => $request->verso,
                        'status' => 1,
                        'user_identity_id' => $user->id,
                        'type' => 2,
                        'created_by' => Auth::user()->name.' '.Auth::user()->lastname
                    ]);
                }
            }

            $module = 'Inscription';
            $action = 'Enregistrement des informations de  '.ucfirst($user->name).' '.ucfirst($user->lastname);
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Les information de l\'utilisateur ont bien été enregistrées avec succès.');
            return to_route('user.index');

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
        if($user = User::find($request->id)){
            $user->delete();

            $module = 'Inscription';
            $action = 'Suppression du compte de l\'utilisateur '.$user->name.' '.$user->lastname;
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
        if($user = User::find($request->id)){
            $user->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activé' : $statusMsg = 'désactivé';

            $user->update(['status' => $newStatus]);
            $module = 'Inscription';
            $action = 'a '.$statusMsg.' le compte de l\'utilisateur '.$user->name.' '.$user->lastname;
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

    public function validation(Request $request){
        if($user = User::find($request->id)){
            $request->status == 1 ? $statusMsg = 'validée' : $statusMsg = 'refusée';

            $user->update([
                'validation_status' => $request->status,
                'validation_date' => Carbon::now(),
            ]);
            $module = 'Inscription';
            $action = 'a '.$statusMsg.' le compte de l\'utilisateur '.$user->name.' '.$user->lastname;
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

    public function storeImg(Request $request){
        $request->validate([
            'file' => ['required']
        ]);

        if ($request->hasFile('file')){

            if (!verifyImageExtension($request->file)) {
                return response()->json([
                    'message' => 'Les images doivent avoir l\'extension png, jpeg, jpg ou ico'
                ], 415);
            }


            $fileName = 'user-'. time() . '-img.'.$request->file->extension();
            $path = 'assets/profile/';
            $imgUrl = storeFile($request->file, $path, $fileName);

            return response()->json([
                'file' => $imgUrl
            ], 200);
        }

        return response()->json([
            'message' => 'Une erreur s\'est produite, image incorrecte ou corrompue'
        ], 415);
    }
}
