<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', [UserController::class, 'index'])->name('user.index');
Route::get('/create', [UserController::class, 'create'])->name('user.create');
Route::post('/store', [UserController::class, 'store'])->name('user.store');
Route::get('/edit/{id}', [UserController::class, 'edit'])->name('user.edit');
Route::post('/update/{id}', [UserController::class, 'update'])->name('user.update');
Route::get('/delete/{id}', [UserController::class, 'destroy'])->name('user.delete');
Route::get('/state/{id}', [UserController::class, 'editStatus'])->name('user.status');
Route::get('/validation/{id}/{status}', [UserController::class, 'validation'])->name('user.validation');