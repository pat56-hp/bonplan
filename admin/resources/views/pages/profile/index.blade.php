@extends('layouts.new.template')
@section('content')
    <div class="row page-titles">
        <div class="col p-0">
            <h4>Hello, <span>{{ ucfirst(auth()->user()->name).' '.ucfirst(auth()->user()->lastname) }}</span></h4>
        </div>
        <div class="col p-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard')}}">Tableau de bord</a>
                </li>
                <li class="breadcrumb-item active">Profil</li>

            </ol>
        </div>
    </div>
    @include('parts.flashmessage')
    <!-- row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h1>{{ $title}}</h1>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <div class="custom-tab-1">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link {{ request()->routeIs('profile') ? 'active' : '' }}" data-toggle="tab" href="#home1">Mon profil</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link {{Request()->routeIs('password') ? 'active' : ''}}" data-toggle="tab" href="#profile1">Sécurité</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade {{ request()->routeIs('profile') ? 'show active' : '' }}" id="home1" role="tabpanel">
                                    <div class="p-t-15">
                                        <form action="{{ route('profile.update')}}" method="post">
                                            @csrf
                                            <div class="row m-t-xxl">
                                                <div class="col-md-6">
                                                    <label for="name" class="form-label">Nom <span class="red">*</span></label>
                                                    <input type="text" name="name" value="{{ old('name', auth()->user()->name) }}" class="form-control @error('name') is-invalid @enderror" id="name" placeholder="John">
                                                    @error('name')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="lastname" class="form-label">Prénom(s) <span class="red">*</span></label>
                                                    <input type="text" name="lastname" value="{{ old('lastname', auth()->user()->lastname) }}" class="form-control  @error('lastname') is-invalid @enderror" id="lastname" placeholder="Doe">
                                                    @error('lastname')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="row m-t-xxl">
                                                <div class="col-md-6">
                                                    <label for="email" class="form-label">Adresse email <span class="red">*</span></label>
                                                    <input type="email" name="email" value="{{old('email', Auth::user()->email)}}" class="form-control @error('email') is-invalid @enderror" id="email" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
                                                    @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="phone" class="form-label">Contact <span class="red">*</span></label>
                                                    <input type="hidden" name="country_code" value="{{old('country_code', Auth::user()->pays->iso ?? '')}}" required>
                                                    <input type="text" name="phone" value="{{ old('phone', Auth::user()->phone) }}" class="form-control @error('phone') is-invalid @enderror" id="phone" placeholder="" data-country="{{ Auth::user()->pays->iso ?? '' }}">
                                                    @error('phone')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                            </div>

                                            <div class="row m-t-lg">
                                                <div class="col-md-6">
                                                    <label for="adresse" class="form-label">Adresse <span class="red">*</span></label>
                                                    <input type="text" name="adresse" value="{{old('adresse', Auth::user()->adresse)}}" class="form-control @error('adresse') is-invalid @enderror" id="adresse" placeholder="Abidjan Cocody angré">
                                                    @error('adresse')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="settingsState" class="form-label">Rôle <span class="red">*</span></label>
                                                    <select class="js-states form-control" id="settingsState" tabindex="-1" style="display: none; width: 100%" readonly name="role">
                                                        <option value="Administrateur" {{ old('role', Auth::user()->role) == 'Administrateur' ? 'selected' : ''}}>Administrateur</option>
                                                        <option value="Superviseur" {{ old('role', Auth::user()->role) == 'Superviseur' ? 'selected' : ''}}>Superviseur</option>
                                                        <option value="Super Admin" {{ old('role', Auth::user()->role) == 'Super Admin' ? 'selected' : ''}}>Super Admin</option>
                                                        <option value="Comptable" {{ old('role', Auth::user()->role) == 'Comptable' ? 'selected' : ''}}>Comptable</option>
                                                        <option value="Animateur" {{ old('role', Auth::user()->role) == 'Animateur' ? 'selected' : ''}}>Animateur</option>
                                                        <option value="Rédacteur" {{ old('role', Auth::user()->role) == 'Rédacteur' ? 'selected' : ''}}>Rédacteur</option>
                                                        <option value="Defaut" {{ old('role', Auth::user()->role) == 'Defaut' ? 'selected' : ''}}>Defaut</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row m-t-lg">
                                                <div class="col">
                                                    <button type="submit" class="btn btn-primary m-t-sm"><i class="fas fa-save mr-2"></i> Enregistrer</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="tab-pane fade {{Request()->routeIs('password') ? 'show active' : ''}}" id="profile1" role="tabpanel">
                                    <div class="p-t-15">
                                        <form action="{{ route('password.update')}}" method="post">
                                            @csrf
                                            <div class="row m-t-xxl">
                                                <div class="col-md-6">
                                                    <label for="password-old" class="form-label">Mot de passe actuel <span class="red">*</span></label>
                                                    <input type="password" name="password-old" class="form-control @error('password-old') is-invalid @enderror" aria-describedby="password-old" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                                                    <div id="settingsCurrentPassword" class="form-text">Ne partagez votre mot de passe à personne</div>
                                                    @error('password-old')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="row m-t-xxl">
                                                <div class="col-md-6">
                                                    <label for="password" class="form-label">Nouveau mot de passe</label>
                                                    <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" aria-describedby="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                                                    @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="row m-t-xxl">
                                                <div class="col-md-6">
                                                    <label for="password_confirmation" class="form-label">Confirmez le nouveau mot de passe</label>
                                                    <input type="password" name="password_confirmation" class="form-control @error('password_confirmation') is-invalid @enderror" aria-describedby="password_confirmation" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                                                    @error('password_confirmation')
                                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="row m-t-lg">
                                                <div class="col">
                                                    <button type="submit" class="btn btn-primary m-t-sm"><i class="fas fa-save mr-2"></i> Changer mon mot de passe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js')
    <script>

        var input = document.getElementById("phone");
        var countryCode = input.getAttribute("data-country");

        window.intlTelInput(input, {
            initialCountry: countryCode,
            geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => {
                        callback(data.country_code)
                        console.log(data)
                        document.querySelector('input[name=country_code]').setAttribute('value', data.country_code);
                    })
                    .catch(() => callback("us"));
            },
            utilsScript: "{{ asset('build/js/utils.js') }}"
        });

        $(document).on('click', '.iti__country.iti__standard.iti__active.iti__highlight', function(){
            $('input[name=country_code]').val($(this).attr('data-country-code'))
            //console.log($(this).attr('data-country-code'))
        })

    </script>
@endpush