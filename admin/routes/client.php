<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;

Route::get('/', [ClientController::class, 'index'])->name('clients.index');
Route::get('/create', [ClientController::class, 'create'])->name('clients.create');
Route::post('/store', [ClientController::class, 'store'])->name('clients.store');
Route::get('/edit/{client}', [ClientController::class, 'edit'])->name('clients.edit');
Route::put('/update/{id}', [ClientController::class, 'update'])->name('clients.update');
Route::get('/delete/{client}', [ClientController::class, 'destroy'])->name('clients.delete');
Route::get('/state/{client}', [ClientController::class, 'editStatus'])->name('clients.status');
Route::get('/validation/{client}/{status}', [ClientController::class, 'validation'])->name('clients.validation');
Route::post('/imageusersotre', [ClientController::class, 'storeImg'])->name('imageUserStorage');