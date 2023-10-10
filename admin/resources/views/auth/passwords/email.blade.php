@extends('auth.layouts.app')

@section('content')
<div class="app app-auth-sign-in align-content-stretch d-flex flex-wrap justify-content-end">
    <div class="app-auth-background">

    </div>
    <div class="app-auth-container">
        <div class="logo">
            <a href="index-2.html">Les bons plans - Réinitialisation du mot de passe</a>
        </div>
        <p class="auth-description text-center">Veuillez entrer votre email pour recevoir le lien pour la réinitialisation de votre mot de passe.</p>

        <form action="{{ route('password.email')}}" method="post">
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
