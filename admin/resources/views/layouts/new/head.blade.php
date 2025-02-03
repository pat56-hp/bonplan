<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="{{ $setting->slogan}}">
    <meta name="keywords" content="{{ $setting->mot_cle}}">
    <meta name="author" content="{{ ucfirst($setting->auteur)}}">
    <title>{{ $setting->name}} - {{ $page_title ?? 'Tableau de bord' }}</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ $setting->favicon }}" />
    <link rel="icon" type="image/png" sizes="16x16" href="{{ $setting->favicon }}" />
    <link href="{{ asset('plugins/select2/select2.min.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/bootstrap-tagsinput/bootstrap-tagsinput.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/bootstrap-touchpin/bootstrap-touchspin.min.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/bootstrap-mask/jasny-bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/switchery/switchery.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/plugins/tables/css/datatable/dataTables.bootstrap4.min.css') }}" rel="stylesheet">
    <link href="{{ asset('main/css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/fontawesome.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('build/css/intlTelInput.css') }}">
    <link rel="stylesheet" href="{{asset('assets/css/file-uploader.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/vendors.css')}}">
    <link href="{{ asset('plugins/bootstrap-tagsinput/bootstrap-tagsinput.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/switchery/switchery.min.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/clockpicker/dist/jquery-clockpicker.min.css') }}" rel="stylesheet">
    <!-- Toastr -->
    <link href="{{ asset('plugins/toastr/css/toastr.min.css') }}" rel="stylesheet">



    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    @stack('css')

    <style>

        table, table.dataTable{
            border-collapse: collapse !important;
        }

        .red{
            color: red
        }

        textarea{
            height: 100px !important;
        }

        input, select, textarea {
            margin-bottom: 15px
        }

        .iti.iti--allow-dropdown.iti--show-flags{
            width: 100%
        }

        .select2-selection.select2-selection--single{
            border: 1px solid rgba(120, 130, 140, 0.13);
            background: #F1F4F5;
            color: #000;
            height: 45px;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
        }

        .select2-selection__arrow{
            padding: 0.375rem 0.75rem;
            line-height: 1.5;
            margin-top: 10px;
        }
        .header{
            z-index: 999 !important;
        }
        .nk-sidebar{
            z-index: 1 !important;
        }
        #toast-container>div {
            z-index: 9999999999999999999999 !important;
        }
    </style>
</head>


<body class="v-light vertical-nav fix-header fix-sidebar">
    <div id="preloader">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"/></svg>
        </div>
    </div>
    <div id="main-wrapper">