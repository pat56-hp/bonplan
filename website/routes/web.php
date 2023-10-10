<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [\App\Http\Controllers\FrontendController::class, 'home'])->name('accueil');

Route::get('/bons-plans', function (){
    return view('site.pages.bonplans.index');
})->name('bonplans');

Route::get('/bons-plans/show', function (){
   return view('site.pages.bonplans.show');
})->name('plan.show');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
