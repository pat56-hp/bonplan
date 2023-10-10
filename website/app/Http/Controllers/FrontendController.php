<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Categoriesplan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class FrontendController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        View::share([
            'menu' => 'home',
            'page_title' => 'Accueil'
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function home()
    {
        $data = [
            'banners' => Banner::latest()->get(),
            'categories' => Categoriesplan::orderBy('libelle')->withCount('bonplans')->get(),
            'menu' => 'home',
            'page_title' => 'Accueil'
        ];

        return view('site.pages.home', $data);
    }
}
