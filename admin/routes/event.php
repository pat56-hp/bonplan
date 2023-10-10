<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventcategorieController;

Route::get('/', [EventController::class, 'index'])->name('events.index');
Route::get('/create', [EventController::class, 'create'])->name('events.create');
Route::post('/store', [EventController::class, 'store'])->name('events.store');
Route::get('/edit/{id}', [EventController::class, 'edit'])->name('events.edit');
Route::post('/update/{id}', [EventController::class, 'update'])->name('events.update');
Route::get('/delete/{id}', [EventController::class, 'destroy'])->name('events.delete');
Route::get('/state/{id}', [EventController::class, 'editStatus'])->name('events.status');
Route::get('/validate/{id}/type/{type}', [EventController::class, 'validation'])->name('events.validation');

Route::prefix('categories')->group(function (){
    Route::get('/', [EventcategorieController::class, 'index'])->name('events.categorie.index');
    Route::get('/create', [EventcategorieController::class, 'create'])->name('events.categorie.create');
    Route::post('/store', [EventcategorieController::class, 'store'])->name('events.categorie.store');
    Route::get('/edit/{id}', [EventcategorieController::class, 'edit'])->name('events.categorie.edit');
    Route::post('/update/{id}', [EventcategorieController::class, 'update'])->name('events.categorie.update');
    Route::get('/delete/{id}', [EventcategorieController::class, 'destroy'])->name('events.categorie.delete');
    Route::get('/state/{id}', [EventcategorieController::class, 'editStatus'])->name('events.categorie.status');
    Route::get('{id}/evenements', [EventcategorieController::class, 'events'])->name('events.categorie.event');
});

Route::post('/store-img', [EventController::class, 'storeImg'])->name('events.storeimg');