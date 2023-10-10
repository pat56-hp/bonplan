<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BonplanController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommoditeController;
use App\Http\Controllers\DealController;

Route::get('/', [BonplanController::class, 'index'])->name('bonplan.index');
Route::get('/create', [BonplanController::class, 'create'])->name('bonplan.create');
Route::post('/store', [BonplanController::class, 'store'])->name('bonplan.store');
Route::get('/edit/{id}', [BonplanController::class, 'edit'])->name('bonplan.edit');
Route::post('/update/{id}', [BonplanController::class, 'update'])->name('bonplan.update');
Route::get('/delete/{id}', [BonplanController::class, 'destroy'])->name('bonplan.delete');
Route::get('/state/{id}', [BonplanController::class, 'editStatus'])->name('bonplan.status');
Route::get('/{id}/offres', [BonplanController::class, 'offres'])->name('bonplan.offre');
Route::get('/{id}/show', [BonplanController::class, 'show'])->name('bonplan.show');

Route::prefix('categories')->group(function (){
    Route::get('/', [CategorieController::class, 'index'])->name('bonplan.categorie.index');
    Route::get('/create', [CategorieController::class, 'create'])->name('bonplan.categorie.create');
    Route::post('/store', [CategorieController::class, 'store'])->name('bonplan.categorie.store');
    Route::get('/edit/{id}', [CategorieController::class, 'edit'])->name('bonplan.categorie.edit');
    Route::post('/update/{id}', [CategorieController::class, 'update'])->name('bonplan.categorie.update');
    Route::get('/delete/{id}', [CategorieController::class, 'destroy'])->name('bonplan.categorie.delete');
    Route::get('/state/{id}', [CategorieController::class, 'editStatus'])->name('bonplan.categorie.status');
    Route::get('{id}/bonplans', [CategorieController::class, 'bonplan'])->name('bonplan.categorie');
});

Route::prefix('commodites')->group(function (){
    Route::get('/', [CommoditeController::class, 'index'])->name('bonplan.commodite.index');
    Route::get('/create', [CommoditeController::class, 'create'])->name('bonplan.commodite.create');
    Route::post('/store', [CommoditeController::class, 'store'])->name('bonplan.commodite.store');
    Route::get('/edit/{id}', [CommoditeController::class, 'edit'])->name('bonplan.commodite.edit');
    Route::post('/update/{id}', [CommoditeController::class, 'update'])->name('bonplan.commodite.update');
    Route::get('/delete/{id}', [CommoditeController::class, 'destroy'])->name('bonplan.commodite.delete');
    Route::get('/state/{id}', [CommoditeController::class, 'editStatus'])->name('bonplan.commodite.status');
});

Route::prefix('offres')->group(function (){
    Route::get('/', [BonplanController::class, 'indexoffer'])->name('offer.index');
    Route::get('/create', [BonplanController::class, 'createoffer'])->name('offer.create');
    Route::post('/store', [BonplanController::class, 'storeoffer'])->name('offer.store');
    Route::get('/edit/{id}', [BonplanController::class, 'editoffer'])->name('offer.edit');
    Route::post('/update/{id}', [BonplanController::class, 'updateoffer'])->name('offer.update');
    Route::get('/delete/{id}', [BonplanController::class, 'destroyoffer'])->name('offer.delete');
    Route::get('/state/{id}', [BonplanController::class, 'editStatusOffer'])->name('offer.status');
});

Route::prefix('plans-de-la-semaine')->group(function (){
    Route::get('/', [DealController::class, 'index'])->name('deal.index');
    Route::post('/store/{id}', [DealController::class, 'store'])->name('deal.store');
    Route::get('/{id}/delete', [DealController::class, 'destroy'])->name('deal.destroy');
    Route::get('/status/{id}', [DealController::class, 'changeStatus'])->name('deal.status');
});



