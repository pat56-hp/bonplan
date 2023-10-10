<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $setting->slogan }}">
    <meta name="author" content="{{ $setting->auteur }}">
    <meta name="keywords" content="{{ $setting->mot_cle }}">
    <title>{{ $setting->name }} {{ !empty($page_title) ? ' - '.$page_title : '' }}</title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="{{ $setting->favicon }}" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="{{ $setting->favicon }}">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="{{ $setting->favicon }}">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="{{ $setting->favicon }}">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="{{ $setting->favicon }}">

    <!-- GOOGLE WEB FONT -->
    <link href="{{ asset('css2b33a.css') }}?family=Gochi+Hand&amp;family=Montserrat:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">

    <!-- COMMON CSS -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/vendors.css') }}" rel="stylesheet">

    <!-- ALTERNATIVE COLORS CSS -->
    <link href="#" id="colors" rel="stylesheet">

    <!-- REVOLUTION SLIDER CSS -->
    <link href="{{ asset('layerslider/css/layerslider.css') }}" rel="stylesheet">

</head>

<body>

<div id="preloader">
    <div class="sk-spinner sk-spinner-wave">
        <div class="sk-rect1"></div>
        <div class="sk-rect2"></div>
        <div class="sk-rect3"></div>
        <div class="sk-rect4"></div>
        <div class="sk-rect5"></div>
    </div>
</div>
<!-- End Preload -->

<div class="layer"></div>