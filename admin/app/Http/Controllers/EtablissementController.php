<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EtablissementRequest;
use Illuminate\Support\Facades\{View, Auth};
use App\Models\{
    Activity, Etablissement
};

use App\Services\{
    ActivityService
};

use App\Domain\EtablissementRepositoryInterface;

class EtablissementController extends Controller
{
    private ActivityService $activityService;
    private EtablissementRepositoryInterface $etablissementRepository;
    private $module;

    public function __construct(EtablissementRepositoryInterface $etablissementRepository, ActivityService $activityService){
        $this->middleware('auth');
        $this->middleware('status');
        $this->activityService = $activityService;
        $this->etablissementRepository = $etablissementRepository;
        $this->module = "Etablissements";
        View::share('page_title', 'Bons plans de divertissement');
        View::share('title', 'Etablissements');
        View::share('menu', 'bonplan');
    }
    /**
     * Recuperation des etablissements crees
     */
    public function index()
    {
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des établissements';
        $action = 'Affichage de la liste des établissements';
        $this->activityService->createActivity($this->module, $action);
        $data['etablissements'] = $this->etablissementRepository->getAll();

        return view('pages.etablissements.index', $data);
    }

    /**
     * Affichage des informations de creation d'un etablissement
     */
    public function create()
    {
        $data['sub_title'] = 'Cette page est destinée à la creation des établissements';
        $action = 'Affichage de la page de creation d\'un établissements';
        $this->activityService->createActivity($this->module, $action);
        $data = array_merge($data, $this->etablissementRepository->getElementToFront());

        return view('pages.etablissements.create', $data);
    }

    /**
     * Sauvgarde d'un etablissement
     *
     * @param EtablissementRequest $request
     * @return  \Illuminate\Http\RedirectResponse
     */
    public function store(EtablissementRequest $request)
    {
        $data = $request->only(
            'libelle', 'client', 'categorie', 'email', 'phone', 'ville', 'adresse', 'facebook', 'instagram', 
            'image', 'galerie', 'description', 'jour', 'ouverture', 'fermeture', 'commodite', 'longitude', 'latitude'
        );

        $data['id'] = null;
        try {
            $etablissement = $this->etablissementRepository->save($data);
            $action = 'Création de l\'etablissement ' . $etablissement->libelle;
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'Etablissement créé avec succès');
            return to_route('etablissements.index');
        } catch (\Throwable $th) {
            alert('danger', 'Echec de la création de l\'établissement : ' . $th->getMessage());
            return back()->withInput();
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
     * Edition d'un etablissement
     *
     * @param Etablissement $etablissement
     * @return  \Illuminate\Http\RedirectResponse
     */
    public function edit(Etablissement $etablissement)
    {
        $data['sub_title'] = 'Cette page est destinée à la modification des établissements';
        $action = 'Affichage de la page de modification d\'un établissements';
        $this->activityService->createActivity($this->module, $action);
        $data = array_merge($data, $this->etablissementRepository->getElementToFront($etablissement));
        $data['etablissement'] = $etablissement;

        return view('pages.etablissements.edit', $data);
    }

   /**
    * Sauvegarde de l'edition d'un etablissement
    *
    * @param EtablissementRequest $request
    * @param string $id
    * @return  \Illuminate\Http\RedirectResponse
    */
    public function update(EtablissementRequest $request, string $id)
    {
        $data = $request->only(
            'libelle', 'client', 'categorie', 'email', 'phone', 'ville', 'adresse', 'facebook', 'instagram', 
            'image', 'galerie', 'description', 'jour', 'ouverture', 'fermeture', 'commodite', 'validate', 'status', 'latitude', 'longitude'
        );
        $data['id'] = $id;

        //dd($data);

        try {
            $etablissement = $this->etablissementRepository->save($data);
            $action = 'Modification de l\'etablissement ' . $etablissement->libelle;
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'Etablissement modifié avec succès');
            return to_route('etablissements.index');
        } catch (\Throwable $th) {
            alert('danger', 'Echec de la modification de l\'établissement : ' . $th->getMessage());
            return back()->withInput();
        }
    }

    /**
     * Suppression d'un etablissement
     *
     * @param Etablissement $etablissement
     * @return  \Illuminate\Http\RedirectResponse
     */
    public function destroy(Etablissement $etablissement)
    {
        $this->etablissementRepository->delete($etablissement);
        $action = 'Suppression de l\'etablissement ' . $etablissement->libelle;
        $this->activityService->createActivity($this->module, $action);
        alert('success', 'Etablissement supprimé avec succès');
        return back();
    }

    /**
     * Mise à jour du statut d'un établissement.
     *
     * @param Etablissement $etablissement
     * @return \Illuminate\Http\RedirectResponse
     */
    public function editStatus(Etablissement $etablissement)
    {
        // Basculer le statut (toggle)
        $etablissement->update(['status' => !$etablissement->status]);
        $action = 'Modification du statut de l\'etablissement ' . $etablissement->libelle;
        $this->activityService->createActivity($this->module, $action);
        session()->flash('success', 'Statut modifié avec succès');
        return back();
    }

    /**
     * Validation d'un établissement
     *
     * @param Request $request
     * @param Etablissement $etablissement
     * @return \Illuminate\Http\RedirectResponse
     */
    public function validation(Request $request, Etablissement $etablissement){
        $status = in_array($request->status, ['1', '2']) ? $request->status : 0;
        if ($status === 0) {
            alert('danger', 'Une erreur s\'est produite, rééssayez svp.');
            return back();
        }
        $etablissement->update(['validate' => $status]);
        $action = 'Validation de l\'etablissement ' . $etablissement->libelle;
        $this->activityService->createActivity($this->module, $action);
        alert('success', 'Etablissement validé avec succès');
        return back();
    }
}
