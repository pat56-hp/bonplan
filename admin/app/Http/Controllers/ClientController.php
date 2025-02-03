<?php

namespace App\Http\Controllers;

use App\Domain\ClientRepositoryInterface;
use App\Http\Requests\ClientRequest;
use App\Models\{Activity, Client};
use App\Services\ActivityService;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\View;

class clientController extends Controller
{
    public ClientRepositoryInterface $clientRepository;
    public ActivityService $activityService;
    public $module;

    public function __construct(ActivityService $activityService, ClientRepositoryInterface $clientRepository){
        $this->middleware('auth');
        $this->middleware('status');
        $this->activityService = $activityService;
        $this->clientRepository = $clientRepository;
        $this->module = "Inscriptions des clients";
        View::share('page_title', 'Inscription');
        View::share('title', 'Inscription');
        View::share('menu', 'user');
    }

    /**
     * Affichage de la liste des inscriptions
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $action = 'Affichage de la liste des inscriptions';
        $this->activityService->createActivity($this->module, $action);
        $data['sub_title'] = 'Cette page est destinée à l\'affichage de la liste des inscriptions';
        $data['clients'] = Client::latest()->paginate();
        return view('pages.clients.index', $data);
    }

    /**
     * Creation d'une inscription
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        $action = 'Affichage de la liste des inscriptions';
        $this->activityService->createActivity($this->module, $action);
        $data['sub_title'] = 'Cette page est destinée à la creation des inscriptions';
        return view('pages.clients.create', $data);
    }

    /**
     * Sauvage de l'inscription
     * @param ClientRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ClientRequest $request)
    {
        $data = $request->only('name', 'lastname', 'email', 'phone', 'adresse', 'status', 'validate', 'type', 'image', 'password');
        $data['id'] = null;

        try {
            $client = $this->clientRepository->save($data);
            $action = 'Inscription de ' .ucfirst($client->name).' '.ucfirst($client->lastname);
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'Inscription reussi avec succès');
            return to_route('clients.index');
        } catch (\Throwable $th) {
            alert('danger', 'Une erreur s\'est produite lors de l\'enregistrement : ' . $th->getMessage());
            return back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        
    }

    /**
     * Modification d'un client
     *
     * @param Client $client
     * @return \Illuminate\Http\RedirectResponse
     */
    public function edit(Client $client)
    {
        $action = 'Affichage de la vue d\'edition de client';
        $this->activityService->createActivity($this->module, $action);
        $data['sub_title'] = 'Cette page est destinée à la modification des inscriptions';
        $data['client'] = $client;
        return view('pages.clients.edit', $data);
    }

   /**
    * Sauvagrde de la modification d'un client
    *
    * @param ClientRequest $request
    * @param string $id
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(ClientRequest $request, string $id)
    {
        $data = $request->only('name', 'lastname', 'email', 'phone', 'adresse', 'status', 'validate', 'type', 'image', 'password');
        $data['id'] = $id;

        try {
            $client = $this->clientRepository->save($data);
            $action = 'Modification des information de ' .ucfirst($client->name).' '.ucfirst($client->lastname);
            $this->activityService->createActivity($this->module, $action);
            alert('success', 'Modification reussi avec succès');
            return to_route('clients.index');
        } catch (\Throwable $th) {
            alert('danger', 'Une erreur s\'est produite lors de l\'enregistrement : ' . $th->getMessage());
            return back()->withInput();
        }
    }

    /**
     * Suppression d'un client
     *
     * @param Client $client
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Client $client)
    {
        $this->clientRepository->delete($client);
        $action = 'Suppression du compte de ' .ucfirst($client->name).' '.ucfirst($client->lastname);
        $this->activityService->createActivity($this->module, $action);
        alert('success', 'Suppression reussi avec succès');
        return back();
    }

    /**
     * Mise à jour du statut d'un client.
     *
     * @param Client $client
     * @return \Illuminate\Http\RedirectResponse
     */
    public function editStatus(Client $client)
    {
        // Basculer le statut (toggle)
        $client->update(['status' => !$client->status]);
        $action = 'Modification du statut du client ' . $client->name.' '. $client->lastname;
        $this->activityService->createActivity($this->module, $action);
        alert('success', 'Statut modifié avec succès');
        return back();
    }

    /**
     * Validation d'un établissement
     *
     * @param Client $client
     * @return \Illuminate\Http\RedirectResponse
     */
    public function validation(Client $client){
        $client->update(['validate' => !$client->validate]);
        $action = 'Modification du statut du client ' . $client->name.' '. $client->lastname;
        $this->activityService->createActivity($this->module, $action);
        alert('success', 'Client validé avec succès');
        return back();
    }
}
