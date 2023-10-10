@extends('auth.layouts.app')

@section('content')
<div class="app app-auth-sign-in align-content-stretch d-flex flex-wrap justify-content-end">
    <div class="app-auth-background">

    </div>
    <div class="app-auth-container">
        <div class="logo">
            <a href="{{ $setting->lien }}" style="background: none no-repeat;">
                <img src="{{ $setting->logo_black}} " alt="{{ $setting->name }}">
            </a>
        </div>
        <p class="auth-description text-center">Connectez-vous à votre compte pour continuer s'il vous plaît.</p>

        <div>
            @include('parts.flashmessage')
        </div>

        <form action="{{ route('login')}}" method="post">
            @csrf
            <div class="auth-credentials m-b-xxl">
                <div class="m-b-md">
                    <label for="signInEmail" class="form-label">Adresse email</label>
                    <input type="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') }}" id="signInEmail" name="email" aria-describedby="signInEmail" placeholder="example@lesbonsplans.com">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="">
                    <label for="signInPassword" class="form-label">Mot de passe</label>
                    <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" id="signInPassword" aria-describedby="signInPassword" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
    
            <div class="auth-submit">
                <button type="submit" class="btn btn-primary">Se connecter</button>
                <a href="{{ route('password.request') }}" class="auth-forgot-password float-end">Mot de passe oublié ?</a>
            </div>
        </form>
        <div class="divider"></div>
        <div class="text-center">
            <br><a href="{{ $setting->lien }}" class="auth-forgot-password"><i class="fas fa-arrow-left"></i> Aller au site web</a>
        </div>
    </div>
</div>
@endsection
