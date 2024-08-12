<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\EtablissementController;
use App\Http\Controllers\api\EventController;
use App\Http\Controllers\api\FrontendController;
use App\Http\Controllers\api\ImageController;
use App\Http\Controllers\api\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1'], function (){
    /**
     * @Route of Authentication
     * @Controller AuthController
     */
    Route::controller(AuthController::class)->group(function (){
        Route::post('/login', 'login');
        Route::post('/register', 'register');
        Route::post('/refresh', 'refresh');
        Route::post('/me', 'me');
    });

    /**
     * @Route of Update profile
     * @Controller ProfileController
     */
    Route::controller(ProfileController::class)->group(function(){
        Route::post('/profile/update', 'updateProfile');
        Route::post('/profile/update/password', 'updatePassword');
    });

    /**
     * @Route of Etablissement
     * @Controller EtablissementController
     */
    Route::controller(EtablissementController::class)->group(function(){
        Route::group(['prefix' => 'etablissements'], function(){
            Route::get('/', 'index');
            Route::post('/store', 'store');
            Route::get('/show/{id}', 'show');
            Route::put('/update/{id}', 'update');
            Route::delete('/delete/{id}', 'destroy');
            Route::put('/status/{id}', 'updateStatus');
            Route::put('/delete/image/', 'deleteImage');
        });
    });

    /**
     * @Route of Events
     * @Controller EventController
     */
    Route::controller(EventController::class)->group(function(){
        Route::group(['prefix' => 'evenements'], function(){
            Route::get('/', 'index');
            Route::post('/store', 'store');
            Route::get('/show/{id}', 'show');
            Route::put('/update/{id}', 'update');
            Route::delete('/delete/{id}', 'destroy');
            Route::put('/status/{id}', 'updateStatus');
            Route::put('/delete/image/', 'deleteImage');
        });
    });

    /**
     * @Route of get element of web site page
     * @Controller FrontendController
     */
    Route::controller(FrontendController::class)->group(function (){
        Route::get('/categories', 'getCategories');
        Route::get('/eventCategories', 'getEventCategories');
        Route::get('/commodites', 'getCommodites');
        Route::get('/home-datas', 'getDataToHome');
        Route::get('/explore-plans', 'explorePlan');
        Route::get('/details-plans/{etablissement}', 'showEtablissement');
    });

    /**
     * @Route of Delete image
     * @Controller ImageController
     */
    Route::post('/image/delete', ImageController::class);
});

