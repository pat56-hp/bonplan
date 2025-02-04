@extends('layouts.new.template')
@section('content')
    @include('parts.breadcrumb', [
        'data' => [
            ['label' => 'tableau de bord', 'link' => route('dashboard')],
            ['label' => 'Inscription clients', 'link' => route('clients.index')],
            ['label' => 'Ajouter un compte']
        ]
    ])
    <!-- row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h1>{{ $title}}</h1>
                        <div class="buttons">
                            <a href="{{ route('clients.index') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-list"></i> Liste des comptes</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('clients.store')}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="row m-t-xxl">
                                <div class="col-md-12">
                                    <div class="d-flex justify-content-center mb-4" style="grid-column-gap: 30px">
                                        <div class="form-check ">
                                            <input class="form-check-input" type="radio" name="type" id="client" value="0" {{ old('type') == '0' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="client">
                                                Client
                                            </label>
                                        </div>
                                        <div class="form-check ">
                                            <input class="form-check-input" type="radio" name="type" id="responsable" value="1" {{ old('type') == '1' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="responsable">
                                                Responsable d'établissement
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Nom <span class="red">*</span></label>
                                    <input type="text" name="name" value="{{ old('name') }}" class="form-control @error('name') is-invalid @enderror" id="name" placeholder="John">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="lastname" class="form-label">Prénom(s) <span class="red">*</span></label>
                                    <input type="text" name="lastname" value="{{ old('lastname') }}" class="form-control  @error('lastname') is-invalid @enderror" id="lastname" placeholder="Doe">
                                    @error('lastname')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputEmail" class="form-label">Adresse email <span class="red">*</span></label>
                                    <input type="email" name="email" value="{{old('email')}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
                                    <div id="settingsCurrentPassword" class="form-text"></div>
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Contact <span class="red">*</span></label>
                                    <input type="hidden" name="country_code" value="{{old('country_code')}}" required>
                                    <input type="tel" name="phone" value="{{ old('phone') }}" class="form-control @error('phone') is-invalid @enderror" id="phone" placeholder="">
                                    @error('phone')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="adresse" class="form-label">Adresse</label>
                                    <input type="text" name="adresse" value="{{old('adresse')}}" class="form-control @error('adresse') is-invalid @enderror" id="adresse" placeholder="Abidjan Cocody angré">
                                    @error('adresse')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="password" class="form-label">Mot de passe</label>
                                    <input type="password" name="password" value="{{old('password')}}" class="form-control mb-1 @error('password') is-invalid @enderror" id="password" aria-describedby="settingsEmailHelp" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                                    <div id="settingsCurrentPassword" class="form-text" style="font-size: 10px"> <i class="fa fa-info-circle"></i> Laissez vide si vous souhaitez utiliser l'adresse email pour le mot de passe par defaut</div>
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl mt-4" id="identity-section">
                                <div class="col-md-4">
                                    <label for="photo" class="form-label">Photo de profil (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <input type="text" class="photo_profile" name="image" data-fileuploader="photo-uploader" value="{{ old('image') }}">
                                </div>
                            </div>

                            <div class="row m-t-lg mt-4">
                                <div class="col">
                                    <button type="submit" class="btn btn-primary m-t-sm"><i class="fas fa-save"></i> Enregistrer</button>
                                </div>
                            </div>
                        </form>
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
            initialCountry: 'auto',
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