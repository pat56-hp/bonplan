<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FrontendController extends Controller
{
    /**
     * Recuperation des categories
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getCategories(){
        return CategoryResource::collection(
            Categories::whereStatus(1)->orderBy('libelle')->get()
        );
    }

    public function sendSMS(Request $request){
        //dd(request());
        $message = $request->message;
        $phone = $request->phone;
        $customerId = '0427';
        $userName = 'agouede';
        $userPassword = 'Password0001';
        $senderId = 'CODITRANS';
        $urlSend = 'http://smspro.mtn.ci/smspro/Soap/Messenger.asmx/HTTP_SendSms?customerID=' . $customerId . '&userName=' . $userName . '&userPassword=' . $userPassword . 'originator=' . $senderId . '&messageType=ArabicWithLatinNumbers&defDate=&blink=false&flash=false&Private=false&recipientPhone=' . $phone . '&smsText=' . $message;

        try {
            $resp = Http::get($urlSend);
             dd($resp->body());
        }catch (\Exception $e){
            dd($e->getMessage());
        }
    }
}
