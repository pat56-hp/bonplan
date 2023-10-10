
<!DOCTYPE html>
<html lang="en">

<head>    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="{{ $setting->slogan}}">
    <meta name="keywords" content="{{ $setting->mot_cle}}">
    <meta name="author" content="{{ ucfirst($setting->auteur)}}">
    <title>{{ $setting->name}} - {{ $page_title ?? 'Se connecter' }}</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ $setting->favicon }}" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ $setting->favicon }}" />
    
    <!-- Styles -->
    <link href="{{ asset('fonts.googleapis.com/css2496c.css?family=Poppins:wght@300;400;500;600;700&amp;display=swap')}}" rel="stylesheet">
    <link href="{{ asset('fonts.googleapis.com/css2ae21.css?family=Montserrat:wght@100;300;400;500;600;700;800&amp;display=swap')}}" rel="stylesheet">
    <link href="{{ asset('fonts.googleapis.com/cssc484.css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp')}}" rel="stylesheet')}}">
    <link href="{{ asset('assets/css/fontawesome.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/perfectscroll/perfect-scrollbar.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/pace/pace.css')}}" rel="stylesheet">

    
    <!-- Theme Styles -->
    <link href="{{ asset('assets/css/main.min.css')}}" rel="stylesheet">
    <link href="{{ asset('assets/css/custom.css')}}" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>
        .btn-primary{
        color: #fff;
        background-color: #e04f67 !important;
        border-color: #e04f67 !important;
    }

    .btn-primary.focus, .btn-primary:focus, .btn-primary:hover, .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
        color: #fff;
        background-color: #333 !important;
        border-color: #333 !important;
    }

    a{
        color: #e04f67 !important;
    }

    .a.focus, .a:focus, .a:hover, .a:not(:disabled):not(.disabled).active, .a:not(:disabled):not(.disabled):active, .show>.a.dropdown-toggle {
        color: #333 !important;
    }
    </style>

</head>
<body>