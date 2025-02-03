<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::get('/', [AdminController::class, 'index'])->name('admin.index');
Route::get('/create', [AdminController::class, 'create'])->name('admin.create');
Route::post('/store', [AdminController::class, 'store'])->name('admin.store');
Route::get('/edit/{id}', [AdminController::class, 'edit'])->name('admin.edit');
Route::post('/update', [AdminController::class, 'update'])->name('admin.update');
Route::get('/delete/{id}', [AdminController::class, 'destroy'])->name('admin.delete');
Route::get('/edit-status/{id}', [AdminController::class, 'editStatus'])->name('admin.editStatus');