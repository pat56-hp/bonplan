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

    public function __construct(EtablissementRepositoryInterface $etablissementRepository, ActivityService $activityService){
        $this->middleware('auth');
        $this->middleware('status');
        $this->activityService = $activityService;
        $this->etablissementRepository = $etablissementRepository;
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
        $module = 'Etablissements';
        $action = 'Affichage de la liste des établissements';
        $this->activityService->createActivity($module, $action);
        $data['etablissements'] = $this->etablissementRepository->getAll();

        return view('pages.etablissements.index', $data);
    }

    /**
     * Affichage des informations de creation d'un etablissement
     */
    public function create()
    {
        $data['sub_title'] = 'Cette page est destinée à la creation des établissements';
        $module = 'Etablissements';
        $action = 'Affichage de la page de creation d\'un établissements';
        $this->activityService->createActivity($module, $action);
        $data = array_merge($data, $this->etablissementRepository->getElementToFront());

        return view('pages.etablissements.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EtablissementRequest $request)
    {
        $data = $request->only(
            'libelle', 'client', 'categorie', 'email', 'phone', 'ville', 'adresse', 'facebook', 'instagram', 
            'image', 'galerie', 'description', 'jour', 'ouverture', 'fermeture', 'commodite'
        );

        dd($data);
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
    public function destroy(string $id)
    {
        //
    }
}
