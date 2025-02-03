<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive Admin Dashboard Template">
    <meta name="keywords" content="admin,dashboard">
    <meta name="author" content="stacks">
    <!-- The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    
    <!-- Title -->
    <title>Les bons plans administration - {{ $page_title ?? 'Tableau de bord' }}</title>

    <!-- Styles -->
    {{-- <link rel="preconnect" href="{{ asset('fonts.gstatic.com/index.html')}}"> --}}
    <link href="{{ asset('fonts/css2496c.css')}}" rel="stylesheet">
    <link href="{{ asset('fonts/css2ae21.css')}}" rel="stylesheet">
    <link href="{{ asset('fonts/cssc484.css')}}" rel="stylesheet">
    
    <link href="{{ asset('assets/css/fontawesome.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/perfectscroll/perfect-scrollbar.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/pace/pace.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/select2/css/select2.min.css')}}" rel="stylesheet">

    <link href="{{ asset('assets/plugins/highlight/styles/github-gist.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/datatables/datatables.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/summernote/summernote-lite.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/highlight/styles/github-gist.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('assets/css/file-uploader.css')}}">
    <!-- Theme Styles -->
    <link href="{{ asset('assets/css/main.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/css/custom.css')}}" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="32x32" href="{{ $setting->favicon }}" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ $setting->favicon }}" />
    <link rel="stylesheet" href="{{ asset('build/css/intlTelInput.css') }}">
    <link href="{{ asset('flag/css/flags.css') }}" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    @stack('css')

    <style>
        a{
            text-decoration: none;
        }

        .iti.iti--allow-dropdown.iti--show-flags{
            width: 100%
        }
    </style>
</head>
<body>
    <div class="app align-content-stretch d-flex flex-wrap">