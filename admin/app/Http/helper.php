<?php

function storeFile($file, $path, $fileName){
    $file->move($path, $fileName);
    $fileUrl = \Illuminate\Support\Facades\URL::to($path.$fileName);
    return $fileUrl;
}

function verifyImageExtension($imgUrl){
    $ext = $imgUrl->getClientOriginalExtension();
    if ($ext != 'jpg' && $ext != 'png' && $ext != 'jpeg'  && $ext != 'ico'){
        return false;
    }

    return true;
}