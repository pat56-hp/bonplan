<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Etablissement;
use App\Models\Gallerie;
use Illuminate\Http\Request;

class EtablissementController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Etablissement $etablissement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Etablissement $etablissement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Etablissement $etablissement)
    {
        //
    }
}
