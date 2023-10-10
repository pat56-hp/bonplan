<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Categoriesplan;
use App\Models\Commodite;
use App\Models\Commune;
use App\Models\Endroit;
use App\Models\Horaire;
use App\Models\Jour;
use App\Models\Offer;
use App\Models\Pays;
use App\Models\Picture;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;

class BonplanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('status');
        View::share('page_title', 'Bons plans de divertissement');
        View::share('title', 'Bons plans de divertissement');
        View::share('categories', Categoriesplan::where('status', 1)->get());
        View::share('communes', Commune::where('status', 1)->get());
        View::share('users', User::where(['type' => 1, 'status' => 1, 'validation_status' => 1])->get());
        View::share('commodites', Commodite::orderBy('libelle')->where(['status' => 1])->get());
        View::share('plans', Endroit::where('status', 1)->get());
        View::share('countries', Pays::all());
        View::share('jours', Jour::all());
        View::share('menu', 'bonplan');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $module = 'Bons plans de divertissement';
        $action = 'Affichage de la liste des bons plans';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des bons plans';
        $data['bonplans'] = Endroit::orderByDesc('created_at')->paginate(100);
        return view('pages.bonplan.index', $data);
    }

    public function offres(Request $request){
        if (!$bonplan = Endroit::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun plan de divertissement trouvé');
            return back();
        }

        $module = 'Bons plans de divertissement';
        $action = 'Affichage de la liste des bons plans';
        Activity::saveActivity($module, $action);
        $data['title'] = $bonplan->name;
        $data['menu']='specialite';
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des offres des du plan d\'investissement '.$bonplan->name;
        $data['offers'] = Offer::where('endroit_id', $bonplan->id)->orderByDesc('created_at')->get();
        return view('pages.bonplan.offer.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $module = 'Bons plans de divertissement';
        $action = 'Affichage de la page de creation d\'un bon plan';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à la creation des bons plans';
        return view('pages.bonplan.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'user_id' => 'required',
            'categorie_id' => 'required',
            'email' => 'nullable',
            'country_code' => 'required',
            'phone' => 'required',
            'ville' => 'required',
            'commune' => 'required',
            'adresse' => 'required',
            'photo' => 'required',
            'description' => 'required',
            'commodite' => 'required',
            /*'specialite.*.libelle' => 'required',
            'specialite.*.prix' => 'required',
            'specialite.*.photo' => 'required',*/
        ], [
            'specialite.*.libelle' => 'Le libelle de la specialte est requis',
            'specialite.*.prix' => 'Le prix de la specialte est requis',
            'specialite.*.photo' => 'La photo de la specialte est requise',
        ]);

        dd($request->all());


        //Verification de l'utilisateur sélectionné
        if (!$user = User::find($request->user_id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le responsable sélectionné est introuvable.');
            return back();
        }

        //Verification de la categorie sélectionnée
        if (!$categorie = Categoriesplan::find($request->categorie_id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'La catégorie sélectionnée est introuvable.');
            return back();
        }

        //Verification du code de telephone
        if (!$pays = Pays::where('iso', $request->country_code)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le code du pays sélectionné est introuvable.');
            return back();
        }

        if ($request->galerie){
            $expGalerie = explode(',', $request->galerie);
        }

        //dd($expGalerie);

        //Enregistrement des informations sur le bon plan
        $data = [
            'name' => htmlspecialchars($request->name),
            'user_id' => $user->id,
            'commune' => htmlspecialchars($request->commune),
            'ville' => htmlspecialchars($request->ville),
            'categorie_id' => $categorie->id,
            'adresse' => htmlspecialchars($request->adresse),
            'country_id' => $pays->id,
            'phone' => htmlspecialchars($request->phone),
            'email' => htmlspecialchars($request->email),
            'description' => htmlspecialchars($request->description),
            'facebook' => htmlspecialchars($request->facebook),
            'instagram' => htmlspecialchars($request->instagram),
            'siteweb' => htmlspecialchars($request->siteweb),
            'status' => 1,
            'map' => htmlspecialchars($request->map),
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname
        ];

        if ($bonplan = Endroit::create($data)){
            /**
             * Sauvegarde des images du bon plan*
             */

            //Photo
            Picture::create([
                'name' => htmlspecialchars($request->photo),
                'status' => 1,
                'endroit_id' => $bonplan->id,
                'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                'first' => 1
            ]);

            //Galerie
            if ($request->galerie){
                foreach ($expGalerie as $galerie){
                    if (isset($galerie)){
                        Picture::create([
                            'name' => htmlspecialchars($galerie),
                            'status' => 1,
                            'endroit_id' => $bonplan->id,
                            'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                            'first' => 0
                        ]);
                    }
                }
            }

            //Sauvegarde des horaires
            foreach ($request->jour as $key => $jour){
                Horaire::create([
                    'endroit_id' => $bonplan->id,
                    'jour_id' => $jour,
                    'ouverture' => $request->ouverture[$jour],
                    'fermeture' => $request->fermeture[$jour],
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                ]);
            }

            //Sauvegarde des specialites
            foreach ($request->specialite as $key => $value){
                $offer = Offer::create([
                    'user_id' => htmlspecialchars($request->user_id),
                    'endroit_id' => $bonplan->id,
                    'name' => $value['libelle'],
                    'price' => $value['prix'],
                    'statut' => 1,
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname

                ]);

                //Photo
                Picture::create([
                    'name' => $value['photo'],
                    'status' => 1,
                    'offer_id' => $offer->id,
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                    'first' => 1
                ]);
            }

            //Sauvegarde des commodites
            foreach ($request->commodite as $commodite){
                $commodite = Commodite::find($commodite);
                if ($commodite) $bonplan->commodites()->attach($commodite, ['statut' => 1, 'created_by' => Auth::user()->name.' '.Auth::user()->lastname]);
            }

            $module = 'Bons plans de divertissement';
            $action = 'Sauvegarde d\'un nouveau plan de divertissement';
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Plan de divertissement enregistré avec succes');
            return to_route('bonplan.index');
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Une erreur s\'est produite lors de l\'enregistrement.');
            return back();
        }
    }



    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        if (!$endroit = Endroit::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun plan de divertissement trouvé.');
            return back();
        }

        $data['bonplan'] = $endroit;
        $module = 'Bons plans de divertissement';
        $action = 'Edition du plan de divertissement '. html_entity_decode($endroit->name);
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée aux détails du plan '. html_entity_decode($endroit->name);
        return view('pages.bonplan.show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        if (!$endroit = Endroit::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun plan de divertissement trouvé.');
            return back();
        }

        $data['bonplan'] = $endroit;
        $module = 'Bons plans de divertissement';
        $action = 'Edition du plan de divertissement '. $endroit->name;
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à la modification d\'un bon plan';
        return view('pages.bonplan.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'user_id' => 'required',
            'categorie_id' => 'required',
            'email' => 'nullable',
            'country_code' => 'required',
            'phone' => 'required',
            'ville' => 'required',
            'commune' => 'required',
            'adresse' => 'required',
            'photo' => 'required',
            'description' => 'required',
            'commodite' => 'required',
            'specialite.*.libelle' => 'required',
            'specialite.*.prix' => 'required',
            'specialite.*.photo' => 'required',
        ], [
            'specialite.*.libelle' => 'Le libelle de la specialte est requis',
            'specialite.*.prix' => 'Le prix de la specialte est requis',
            'specialite.*.photo' => 'La photo de la specialte est requise',
        ]);

        if(!$bonplan = Endroit::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le plan de divertissement à modifier est introuvable.');
            return back();
        }

        //Verification de l'utilisateur sélectionné
        if (!$user = User::find($request->user_id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le responsable sélectionné est introuvable.');
            return back();
        }


        //Verification de la categorie sélectionnée
        if (!$categorie = Categoriesplan::find($request->categorie_id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'La catégorie sélectionnée est introuvable.');
            return back();
        }

        //Verification du code de telephone
        if (!$pays = Pays::where('iso', $request->country_code)->first()){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le code du pays sélectionné est introuvable.');
            return back();
        }

        if ($request->galerie){
            $expGalerie = explode(',', $request->galerie);
        }

        //dd($expGalerie);

        //Enregistrement des informations sur le bon plan
        $data = [
            'name' => htmlspecialchars($request->name),
            'user_id' => $user->id,
            'commune' => htmlspecialchars($request->commune),
            'ville' => htmlspecialchars($request->ville),
            'categorie_id' => $categorie->id,
            'adresse' => htmlspecialchars($request->adresse),
            'country_id' => $pays->id,
            'phone' => htmlspecialchars($request->phone),
            'email' => htmlspecialchars($request->email),
            'description' => htmlspecialchars($request->description),
            'facebook' => htmlspecialchars($request->facebook),
            'instagram' => htmlspecialchars($request->instagram),
            'siteweb' => htmlspecialchars($request->siteweb),
            'status' => 1,
            'map' => htmlspecialchars($request->map),
        ];

        if ($bonplan->update($data)){
            /**
             * Sauvegarde des images du bon plan*
             */


            //Photo
            $bonplan->photo()->delete();
            Picture::create([
                'name' => htmlspecialchars($request->photo),
                'status' => 1,
                'endroit_id' => $bonplan->id,
                'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                'first' => 1
            ]);

            //Galerie
            $bonplan->images()->delete();
            if ($request->galerie){
                foreach ($expGalerie as $galerie){
                    if (isset($galerie)){
                        Picture::create([
                            'name' => htmlspecialchars($galerie),
                            'status' => 1,
                            'endroit_id' => $bonplan->id,
                            'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                            'first' => 0
                        ]);
                    }
                }
            }

            //Sauvegarde des horaires
            $bonplan->horaires()->delete();
            foreach ($request->jour as $key => $jour){
                Horaire::create([
                    'endroit_id' => $bonplan->id,
                    'jour_id' => $jour,
                    'ouverture' => $request->ouverture[$jour],
                    'fermeture' => $request->fermeture[$jour],
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                ]);
            }

            //Sauvegarde des specialites
            $bonplan->offers()->delete();
            foreach ($request->specialite as $key => $value){
                $offer = Offer::create([
                    'user_id' => htmlspecialchars($request->user_id),
                    'endroit_id' => $bonplan->id,
                    'name' => $value['libelle'],
                    'price' => $value['prix'],
                    'statut' => 1,
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname

                ]);

                $offer->image()->delete();

                //Photo
                Picture::create([
                    'name' => $value['photo'],
                    'status' => 1,
                    'offer_id' => $offer->id,
                    'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                    'first' => 1
                ]);
            }


            //Sauvegarde des commodites
            $bonplan->commodites()->detach();
            foreach ($request->commodite as $commodite){
                $commodite = Commodite::find($commodite);
                if ($commodite) $bonplan->commodites()->attach($commodite, ['statut' => 1, 'created_by' => Auth::user()->name.' '.Auth::user()->lastname]);
            }

            $module = 'Bons plans de divertissement';
            $action = 'Modification du plan de divertissement '.$bonplan->name;
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Plan de divertissement modifié avec succes');
            return to_route('bonplan.index');
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
        if (!$endroit = Endroit::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucun plan de divertissement trouvé.');
            return back();
        }

        if ($endroit->delete()){
            $endroit->pictures()->delete();
            $endroit->commodites()->detach();
            $endroit->horaires()->delete();
            $endroit->offers()->delete(); //Supprimer egalement toutes les photos rattaches

            $module = 'Bons plans de divertissement';
            $action = 'Suppression du plan de divertissement '. $endroit->name;
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Plan de divertissement supprimé avec succes');
            return back();
        }

        session()->flash('type', 'alert-danger');
        session()->flash('message', 'Une erreur s\'est produite lors de la suppression.');
        return back();

    }

    public function editStatus(Request $request){
        if($bonplan = Endroit::find($request->id)){
            $bonplan->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activé' : $statusMsg = 'désactivé';

            $bonplan->update(['status' => $newStatus]);
            $module = 'Bons plans de divertissement';
            $action = 'a '.$statusMsg.' le plan de divertissement '.$bonplan->name;
            Activity::saveActivity($module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'Le plan de divertissement a bien été '.$statusMsg);
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucun plan de divertissement n\'a pu être trouvé.');
            return back();
        }
    }

    /*********************************
     Fonctions Des offres
     *****************************/

    public function indexoffer(){
        $module = 'Offres de divertissement';
        $action = 'Affichage de la liste des offres de divertissement';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des offres de divertissement';
        $data['offers'] = Offer::orderByDesc('created_at')->paginate(100);
        $data['menu']='specialite';
        return view('pages.bonplan.offer.index', $data);
    }

    public function createoffer()
    {
        $module = 'Offres de divertissement';
        $action = 'Affichage de la page de creation d\'une offre de divertissement';
        Activity::saveActivity($module, $action);
        $data['menu']='specialite';
        $data['sub_title'] = 'Cette page est destinée à la creation des offres de divertissement';
        return view('pages.bonplan.offer.create', $data);
    }

    public function storeoffer(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'endroit_id' => 'required',
            'photo' => 'required',
            //'price' => 'required'
        ]);

        //Verification du divertissement sélectionné
        if (!$endroit = Endroit::find($request->endroit_id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le plan de divertissement sélectionné est introuvable.');
            return back();
        }

        //Enregistrement des informations sur le bon plan
        $data = [
            'name' => htmlspecialchars($request->name),
            'user_id' => $endroit->user_id,
            'endroit_id' => $endroit->id,
            'description' => htmlspecialchars($request->description),
            'status' => 1,
            'price' => htmlspecialchars($request->price),
            'created_by' => Auth::user()->name.' '.Auth::user()->lastname
        ];

        if ($offer = Offer::create($data)){
            //Photo
            Picture::create([
                'name' => htmlspecialchars($request->photo),
                'status' => 1,
                'offer_id' => $offer->id,
                'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                'first' => 1
            ]);

            $module = 'Offres de divertissement';
            $action = 'Sauvegarde d\'une nouvelle offre de plan de divertissement';
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Offre de plan divertissement enregistrée avec succes');
            return to_route('offer.index');
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Une erreur s\'est produite lors de l\'enregistrement.');
            return back();
        }
    }

    public function editoffer(Request $request)
    {
        if (!$offre = Offer::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucune offre de divertissement trouvée.');
            return back();
        }

        $data['offer'] = $offre;
        $module = 'Offres de plan de divertissement';
        $action = 'Edition de l\'offre de divertissement '. $offre->name;
        $data['menu']='specialite';
        Activity::saveActivity($module, $action);
        $data['sub_title'] = 'Cette page est destinée à la modification d\'une offre de divertissement';
        return view('pages.bonplan.offer.edit', $data);
    }

    public function updateoffer(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'endroit_id' => 'required',
            'photo' => 'required',
        ]);

        //Verification de l'offre sélectionnée
        if (!$offer = Offer::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'L\'offre est introuvable.');
            return back();
        }

        if (!$endroit = Endroit::find($request->endroit_id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Le plan de divertissement sélectionné est introuvable.');
            return back();
        }

        //Enregistrement des informations sur le bon plan
        $data = [
            'name' => htmlspecialchars($request->name),
            'user_id' => $endroit->user_id,
            'endroit_id' => $endroit->id,
            'description' => htmlspecialchars($request->description),
            'price' => htmlspecialchars($request->price),
        ];

        if ($offer->update($data)){
            //Photo
            $offer->image()->delete();

            Picture::create([
                'name' => htmlspecialchars($request->photo),
                'status' => 1,
                'offer_id' => $offer->id,
                'created_by' => Auth::user()->name.' '.Auth::user()->lastname,
                'first' => 1
            ]);

            $module = 'Offres de divertissement';
            $action = 'Modification de l\'offre de plan de divertissement '.$offer->name;
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Offre de plan divertissement modifiée avec succes');
            return to_route('offer.index');
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Une erreur s\'est produite lors de l\'enregistrement.');
            return back();
        }
    }

    public function destroyoffer(Request $request)
    {
        if (!$offer = Offer::find($request->id)){
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Aucune offre de divertissement trouvée.');
            return back();
        }

        if ($offer->delete()){
            $offer->image()->delete();

            $module = 'Offres de divertissement';
            $action = 'Suppression du plan de divertissement '. $offer->name;
            Activity::saveActivity($module, $action);
            session()->flash('type', 'alert-success');
            session()->flash('message', 'Offre de divertissement supprimée avec succes');
            return back();
        }

        session()->flash('type', 'alert-danger');
        session()->flash('message', 'Une erreur s\'est produite lors de la suppression.');
        return back();
    }

    public function editStatusOffer(Request $request){
        if($offer = Offer::find($request->id)){
            $offer->status == 1 ? $newStatus = 0 : $newStatus = 1;
            $newStatus == 1 ? $statusMsg = 'activé' : $statusMsg = 'désactivé';

            $offer->update(['status' => $newStatus]);
            $module = 'Offres de divertissement';
            $action = 'a '.$statusMsg.' l\'offre de divertissement '.$offer->name;
            Activity::saveActivity($module, $action);

            session()->flash('type', 'alert-success');
            session()->flash('message', 'L\'offre de divertissement a bien été '.$statusMsg.'e');
            return back();
        }else{
            session()->flash('type', 'alert-danger');
            session()->flash('message', 'Oups, une erreur s\'est produite, aucune offre de divertissement n\'a pu être trouvée.');
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


            $fileName = 'bonplan-'. time() . '-img.'.$request->file->extension();
            $path = 'assets/bonplans/';
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
