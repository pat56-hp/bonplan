<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BannerController;

Route::get('/', [ BannerController::class, 'index'])->name('banner.index');
Route::get('/create', [ BannerController::class, 'create'])->name('banner.create');
Route::post('/store', [ BannerController::class, 'store'])->name('banner.store');
Route::get('/edit/{id}', [ BannerController::class, 'edit'])->name('banner.edit');
Route::post('/update/{id}', [ BannerController::class, 'update'])->name('banner.update');
Route::get('/delete/{id}', [ BannerController::class, 'destroy'])->name('banner.delete');
Route::get('/state/{id}', [ BannerController::class, 'editStatus'])->name('banner.status');
