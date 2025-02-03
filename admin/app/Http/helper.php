<?php

function storeFile($file, $path, $fileName){
    $file->move($path, $fileName);
    $filePath = '/'.$path.$fileName;
    return $filePath;
}

function deleteFile($file){
    $path = public_path($file);
    if (file_exists($path)){
        unlink($path);
    }
}

function verifyImageExtension($imgUrl){
    $ext = $imgUrl->getClientOriginalExtension();
    if ($ext != 'jpg' && $ext != 'png' && $ext != 'jpeg'  && $ext != 'ico'){
        return false;
    }

    return true;
}

function alert($type, $message){
    session()->flash('type', 'alert-'.$type);
    session()->flash('message', $message);
}
