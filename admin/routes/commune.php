<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommuneController;

Route::get('/', [CommuneController::class, 'index'])->name('commune.index');
Route::get('/create', [CommuneController::class, 'create'])->name('commune.create');
Route::post('/store', [CommuneController::class, 'store'])->name('commune.store');
Route::get('/edit/{id}', [CommuneController::class, 'edit'])->name('commune.edit');
Route::post('/update/{id}', [CommuneController::class, 'update'])->name('commune.update');
Route::get('/delete/{id}', [CommuneController::class, 'destroy'])->name('commune.delete');
Route::get('/state/{id}', [CommuneController::class, 'editStatus'])->name('commune.status');
