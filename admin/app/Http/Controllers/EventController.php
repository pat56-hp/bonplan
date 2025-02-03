<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Event;
use App\Models\Eventcategorie;
use App\Models\Pays;
use App\Models\Picture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');

        View::share('page_title', 'Evènements');
        View::share('title', 'Evènements');
        View::share('menu', 'event');
        View::share([
            'pays' => Pays::all(),
            'categories' => Eventcategorie::where('status', 1)->orderBy('title')->get()
        ]);
        $this->module = 'Evènements';
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->event){
            if ($request->status){
                $event = Event::find(htmlspecialchars($request->event));
                if($event){
                    $statusNew = $event->status == 1 ? 0 : 1;
                    $msg = $statusNew == 1 ? 'activé' : 'désactivé';
                    if ($event->update(['status' => $statusNew])){
                        $action = 'A '.$msg.'L\'évènement '. $event->title;
                        Activity::saveActivity($this->module, $action);
                        session()->flash('type', 'alert-success');
                        session()->flash('message', 'L\'évènement a bien é '. $msg);
                        return back();
                    }
                }

                session()->flash('type', 'alert-danger');
                session()->flash('message', 'Oups, une erreur s\'est produite. Veuillez reessayer svp.');
                return back();
            }

            if ($request->validation){
                $failed = ($request->validation != 1 && $request->validation != 2) ? false : true;

                if (!$failed){
                    session()->flash('type', 'alert-danger');
                    session()->flash('message', 'Oups, une erreur s\'est produite. Veuillez reessayer svp.');
                    return back();
                }

                $msg = $request->validate == 1 ? 'validé' : 'refusé';
                $event = Event::find(htmlspecialchars($request->event));
                if ($event->update(['validated' => $request->validation, 'validated_by' => Auth::user()->name.' '.Auth::user()->lastname])){

                    $action = 'A '.$msg.'L\'évènement '. $event->title;
                    Activity::saveActivity($this->module, $action);
                    session()->flash('type', 'alert-success');
                    session()->flash('message', 'L\'évènement a bien é '. $msg);
                    return back();
                }

                session()->flash('type', 'alert-danger');
                session()->flash('message', 'Oups, une erreur s\'est produite. Veuillez reessayer svp.');
                return back();
            }
        }

        $data['sub_title'] = 'Cette page est distinée à l\'affichage de la liste des évènements';
        $data['events'] = Event::orderByDesc('created_at')->paginate(100);
        $action = 'Affichage de la liste des évènements';
        Activity::saveActivity($this->module, $action);
        return view('pages.events.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['sub_title'] = 'Cette page est distinée à la creation des évènements';
        $action = 'Affichage de la page de creation des évènements';
        Activity::saveActivity($this->module, $action);
        return view('pages.events.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'country_id' => 'required',
            'ville' => 'required',
            'adresse' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'country_code_phone' => 'required',
            'organisateur' => 'required',
            'whatsapp' => 'required',
            'country_code_whatsapp' => 'required',
            'debut' => 'required|date',
            'heure_debut' => 'required',
            'heure_fin' => 'required',
            'description' => 'required',
            'image' => 'required',
        ]);

        //Verification du pays
        if (!$pays = Pays::where('id', $request->country_id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le pays sélectionné est introuvable.');
            return back();
        }

        //Verification de la categorie
        if (!$categorie = Eventcategorie::where('id', $request->category_id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le categorie sélectionnée est introuvable.');
            return back();
        }

        //Verification des code de pays
        if (!$code_phone = Pays::where('iso', strtoupper($request->country_code_phone))->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le code du téléphone sélectionné est introuvable.');
            return back();
        }

        if (!$code_whatsapp = Pays::where('iso', strtoupper($request->country_code_whatsapp))->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le code du contact whatsapp sélectionné est introuvable.');
            return back();
        }


        $data = [
            'category_id' => $categorie->id,
            'country_id' => $pays->id,
            'phone_country_id' => $code_phone->id,
            'whatsapp_country_id' => $code_whatsapp->id,
            'title' => htmlspecialchars($request->title),
            'organisateur' => htmlspecialchars($request->organisateur),
            'commune' => htmlspecialchars($request->commune),
            'adresse' => htmlspecialchars($request->adresse),
            'ville' => htmlspecialchars($request->ville),
            'map' => htmlspecialchars($request->map),
            'site' => htmlspecialchars($request->site),
            'debut' => htmlspecialchars($request->debut),
            'fin' => htmlspecialchars($request->fin),
            'heure_debut' => htmlspecialchars($request->heure_debut),
            'heure_fin' => htmlspecialchars($request->heure_fin),
            'phone' => htmlspecialchars($request->phone),
            'email' => htmlspecialchars($request->email),
            'whatsapp' => htmlspecialchars($request->whatsapp),
            'description' => htmlspecialchars($request->description),
            'facebook' => htmlspecialchars($request->facebook),
            'instagram' => htmlspecialchars($request->instagram),
            'tweeter' => htmlspecialchars($request->twitter),
            'status' => 1,
            'validated' => 1,
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
            'validated_by' => Auth::user()->name.' '.Auth::user()->lastname,
        ];

        if ($event = Event::create($data)){
            /**
             * Sauvegarde de L'image*
             */

            Picture::create([
                'name' => htmlspecialchars($request->image),
                'status' => 1,
                'event_id' => $event->id,
                'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                'first' => 1
            ]);

            $action = 'Sauvegarde d\'un nouvel évènement';
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Evènement enregistré avec succes');
            return to_route('events.index');
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Une erreur s\'est produite lors de l\'enregistrement.');
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        if (!$event = Event::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun  évènement trouvé.');
            return back();
        }

        $data['event'] = $event;
        $action = 'Edition de l\'évènement '. $event->title;
        Activity::saveActivity($this->module, $action);
        $data['sub_title'] = 'Cette page est destinée à la modification d\'un évènement';
        return view('pages.events.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'country_id' => 'required',
            'ville' => 'required',
            'adresse' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'country_code_phone' => 'required',
            'organisateur' => 'required',
            'whatsapp' => 'required',
            'country_code_whatsapp' => 'required',
            'debut' => 'required|date',
            'heure_debut' => 'required',
            'heure_fin' => 'required',
            'description' => 'required',
            'image' => 'required',
            'validated' => 'required',
            'status' => 'required',
        ]);

        //Verification du pays
        if (!$pays = Pays::where('id', $request->country_id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le pays sélectionné est introuvable.');
            return back();
        }

        //Verification de la categorie
        if (!$categorie = Eventcategorie::where('id', $request->category_id)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le categorie sélectionnée est introuvable.');
            return back();
        }

        //Verification des code de pays
        if (!$code_phone = Pays::where('iso', strtoupper($request->country_code_phone))->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le code du téléphone sélectionné est introuvable.');
            return back();
        }

        if (!$code_whatsapp = Pays::where('iso', strtoupper($request->country_code_whatsapp))->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le code du contact whatsapp sélectionné est introuvable.');
            return back();
        }

        if (!$event = Event::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun  évènement trouvé.');
            return back();
        }

        $data = [
            'category_id' => $categorie->id,
            'country_id' => $pays->id,
            'phone_country_id' => $code_phone->id,
            'whatsapp_country_id' => $code_whatsapp->id,
            'title' => htmlspecialchars($request->title),
            'organisateur' => htmlspecialchars($request->organisateur),
            'commune' => htmlspecialchars($request->commune),
            'adresse' => htmlspecialchars($request->adresse),
            'ville' => htmlspecialchars($request->ville),
            'map' => htmlspecialchars($request->map),
            'site' => htmlspecialchars($request->site),
            'debut' => htmlspecialchars($request->debut),
            'fin' => htmlspecialchars($request->fin),
            'heure_debut' => htmlspecialchars($request->heure_debut),
            'heure_fin' => htmlspecialchars($request->heure_fin),
            'phone' => htmlspecialchars($request->phone),
            'email' => htmlspecialchars($request->email),
            'whatsapp' => htmlspecialchars($request->whatsapp),
            'description' => htmlspecialchars($request->description),
            'facebook' => htmlspecialchars($request->facebook),
            'instagram' => htmlspecialchars($request->instagram),
            'tweeter' => htmlspecialchars($request->twitter),
            'status' => htmlspecialchars($request->status),
            'validated' => htmlspecialchars($request->validated),
        ];

        if ($event->update($data)){
            /**
             * Sauvegarde de L'image*
             */


            Picture::whereEventId($event->id)->update([
                'name' => htmlspecialchars($request->image),
                'status' => 1,
                'event_id' => $event->id,
                'first' => 1
            ]);

            $action = 'Modification de l\'évènement '. $event->title;
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Evènement enregistré avec succes');
            return to_route('events.index');
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Une erreur s\'est produite lors de l\'enregistrement.');
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        if (!$event = Event::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun évènement trouvé.');
            return back();
        }

        if ($event->delete()){
            $event->photo()->delete();

            $action = 'Suppression de l\'évènement '. $event->name;
            Activity::saveActivity($this->module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Evènement supprimé avec succes');
            return back();
        }

        session()->flash('type', 'alert-danger');
        session()->flash('message', 'Une erreur s\'est produite lors de la suppression.');
        return back();
    }




    public function storeImg(Request $request){
        $request->validate([
            'file' => 'required|mimes:jpg,png,jpeg'
        ]);

        if ($request->hasFile('file')){
            if (!verifyImageExtension($request->file)) {
                return response()->json([
                    'message' => 'Les images doivent avoir l\'extension png, jpeg, jpg ou ico'
                ], 415);
            }

            $fileName = 'event-'. time() . '-img.'.$request->file->extension();
            $path = 'assets/events/';
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
