<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EtablissementController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommoditeController;
use App\Http\Controllers\DealController;

Route::get('/', [EtablissementController::class, 'index'])->name('etablissements.index');
Route::get('/create', [EtablissementController::class, 'create'])->name('etablissements.create');
Route::post('/store', [EtablissementController::class, 'store'])->name('etablissements.store');
Route::get('/show/{etablissement}', [EtablissementController::class, 'show'])->name('etablissements.show');
Route::get('/edit/{etablissement}', [EtablissementController::class, 'edit'])->name('etablissements.edit');
Route::post('/update/{id}', [EtablissementController::class, 'update'])->name('etablissements.update');
Route::get('/delete/{etablissement}', [EtablissementController::class, 'destroy'])->name('etablissements.delete');
Route::get('/state/{etablissement}', [EtablissementController::class, 'editStatus'])->name('etablissements.status');
Route::get('/validate/{etablissement}', [EtablissementController::class, 'validation'])->name('etablissements.validation');

Route::prefix('categories')->group(function (){
    Route::get('/', [CategorieController::class, 'index'])->name('etablissements.categorie.index');
    Route::get('/create', [CategorieController::class, 'create'])->name('etablissements.categorie.create');
    Route::post('/store', [CategorieController::class, 'store'])->name('etablissements.categorie.store');
    Route::get('/edit/{id}', [CategorieController::class, 'edit'])->name('etablissements.categorie.edit');
    Route::post('/update/{id}', [CategorieController::class, 'update'])->name('etablissements.categorie.update');
    Route::get('/delete/{id}', [CategorieController::class, 'destroy'])->name('etablissements.categorie.delete');
    Route::get('/state/{id}', [CategorieController::class, 'editStatus'])->name('etablissements.categorie.status');
    Route::get('{id}/etablissements', [CategorieController::class, 'etablissement'])->name('etablissements.categorie');
});

Route::prefix('commodites')->group(function (){
    Route::get('/', [CommoditeController::class, 'index'])->name('etablissements.commodite.index');
    Route::get('/create', [CommoditeController::class, 'create'])->name('etablissements.commodite.create');
    Route::post('/store', [CommoditeController::class, 'store'])->name('etablissements.commodite.store');
    Route::get('/edit/{id}', [CommoditeController::class, 'edit'])->name('etablissements.commodite.edit');
    Route::post('/update/{id}', [CommoditeController::class, 'update'])->name('etablissements.commodite.update');
    Route::get('/delete/{id}', [CommoditeController::class, 'destroy'])->name('etablissements.commodite.delete');
    Route::get('/state/{id}', [CommoditeController::class, 'editStatus'])->name('etablissements.commodite.status');
});

Route::prefix('offres')->group(function (){
    Route::get('/', [EtablissementController::class, 'indexoffer'])->name('offer.index');
    Route::get('/create', [EtablissementController::class, 'createoffer'])->name('offer.create');
    Route::post('/store', [EtablissementController::class, 'storeoffer'])->name('offer.store');
    Route::get('/edit/{id}', [EtablissementController::class, 'editoffer'])->name('offer.edit');
    Route::post('/update/{id}', [EtablissementController::class, 'updateoffer'])->name('offer.update');
    Route::get('/delete/{id}', [EtablissementController::class, 'destroyoffer'])->name('offer.delete');
    Route::get('/state/{id}', [EtablissementController::class, 'editStatusOffer'])->name('offer.status');
});

Route::prefix('plans-de-la-semaine')->group(function (){
    Route::get('/', [DealController::class, 'index'])->name('deal.index');
    Route::post('/store/{id}', [DealController::class, 'store'])->name('deal.store');
    Route::get('/{id}/delete', [DealController::class, 'destroy'])->name('deal.destroy');
    Route::get('/status/{id}', [DealController::class, 'changeStatus'])->name('deal.status');
});



