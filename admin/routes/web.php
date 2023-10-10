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

Auth::routes([
    'register' => false,
]);


Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
Route::prefix('settings')->group(function(){
    Route::get('/', [App\Http\Controllers\SettingController::class, 'index'])->name('setting.index');
    Route::post('/store', [App\Http\Controllers\SettingController::class, 'store'])->name('setting.store');
    Route::get('/profile', [App\Http\Controllers\SettingController::class, 'profile'])->name('profile');
    Route::post('/profile', [App\Http\Controllers\SettingController::class, 'editprofile'])->name('profile.update');
    Route::get('/profile/password', [App\Http\Controllers\SettingController::class, 'profile'])->name('password');
    Route::post('/profile/password', [App\Http\Controllers\SettingController::class, 'editpassword'])->name('password.update');
});

Route::post('/imagesotre', [\App\Http\Controllers\BonplanController::class, 'storeImg'])->name('imageStorage');
Route::post('/imageusersotre', [\App\Http\Controllers\UserController::class, 'storeImg'])->name('imageUserStorage');

//Route::get('/test/{email}/{password}', function (\Illuminate\Http\Request $request){
//   $admin = \App\Models\Admin::where('email', $request->email)->first();
//
//    $admin->update(['password' => \Illuminate\Support\Facades\Hash::make($request->password)]);
//
//   dd('ok');
//});