@extends('auth.layouts.app')

@section('content')
<div class="app app-auth-sign-in align-content-stretch d-flex flex-wrap justify-content-end">
    <div class="app-auth-background">

    </div>
    <div class="app-auth-container">
        <div class="logo">
            <a href="index-2.html">Les bons plans - Réinitialisation du mot de passe</a>
        </div>
        <p class="auth-description text-center">Veuillez-remplir tous les champs pour la réinitialisation de votre mot de passe s'il vous plait.</p>

        <form action="{{ route('password.update')}}" method="post">
            @csrf
            <input type="hidden" name="token" value="{{ $token }}">
            <div class="auth-credentials m-b-xxl">
                <div class="m-b-md">
                    <label for="signInEmail" class="form-label">Adresse email</label>
                    <input type="email" class="form-control @error('email') is-invalid @enderror" value="{{ $email ?? old('email') }}" id="signInEmail" name="email" aria-describedby="signInEmail" placeholder="example@lesbonsplans.com">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="m-b-md">
                    <label for="signInPassword" class="form-label">Mot de passe</label>
                    <input type="password" class="form-control @error('password') is-invalid @enderror" id="signInPassword" name="password" aria-describedby="signInEmail" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="">
                    <label for="password-confirm" class="form-label">Confirmez le mot de passe</label>
                    <input type="password" name="password-confirm" class="form-control @error('password-confirm') is-invalid @enderror" id="password-confirm" aria-describedby="signInPassword" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                    @error('password-confirm')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
    
            <div class="auth-submit">
                <button type="submit" class="btn btn-primary">Valider</button>
                <a href="{{ route('login') }}" class="auth-forgot-password float-end">Se connecter</a>
            </div>
        </form>
        <div class="divider"></div>
        <div class="text-center">
            <br><a href="#" class="auth-forgot-password"><i class="fas fa-arrow-left"></i> Aller au site web</a>
        </div>
    </div>
</div>
@endsection
