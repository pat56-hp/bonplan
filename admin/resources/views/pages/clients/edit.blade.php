@extends('layouts.new.template')
@section('content')
    @include('parts.breadcrumb', [
        'data' => [
            ['label' => 'tableau de bord', 'link' => route('dashboard')],
            ['label' => 'Inscription clients', 'link' => route('clients.index')],
            ['label' => 'Edition d\'un compte']
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
                            <a href="{{ route('clients.create') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter un compte</a>
                            <a href="{{ route('clients.index') }}" class="btn btn-dark btn-rounded p-2"><i class="fas fa-list"></i> Liste des comptes</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('clients.update', ['id' => $client->id])}}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="row m-t-xxl">
                                <div class="col-md-12">
                                    <div class="d-flex justify-content-center mb-4" style="grid-column-gap: 30px">
                                        <div class="form-check ">
                                            <input class="form-check-input" type="radio" name="type" id="client" value="0" {{ old('type', $client->type) == '0' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="client">
                                                Client
                                            </label>
                                        </div>
                                        <div class="form-check ">
                                            <input class="form-check-input" type="radio" name="type" id="responsable" value="1" {{ old('type', $client->type) == '1' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="responsable">
                                                Responsable d'entreprise
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Nom <span class="red">*</span></label>
                                    <input type="text" name="name" value="{{ old('name', $client->name) }}" class="form-control @error('name') is-invalid @enderror" id="name" placeholder="John">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="lastname" class="form-label">Prénom(s) <span class="red">*</span></label>
                                    <input type="text" name="lastname" value="{{ old('lastname', $client->lastname) }}" class="form-control  @error('lastname') is-invalid @enderror" id="lastname" placeholder="Doe">
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
                                    <input type="email" name="email" value="{{old('email', $client->email)}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
                                    <div id="settingsCurrentPassword" class="form-text"></div>
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Contact <span class="red">*</span></label>
                                    <input type="hidden" name="country_code" value="{{old('country_code', 225)}}" required>
                                    <input type="tel" name="phone" value="{{ old('phone', $client->phone) }}" class="form-control @error('phone') is-invalid @enderror" id="phone" placeholder="" data-country = "ci">
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
                                    <input type="text" name="adresse" value="{{old('adresse', $client->adresse)}}" class="form-control @error('adresse') is-invalid @enderror" id="adresse" placeholder="Abidjan Cocody angré">
                                    @error('adresse')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="password" class="form-label">Mot de passe</label>
                                    <input type="password" name="password" value="{{old('password')}}" class="form-control mb-1 @error('password') is-invalid @enderror" id="password" aria-describedby="settingsEmailHelp" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                                    <div id="settingsCurrentPassword" class="form-text" style="font-size: 10px"> <i class="fa fa-info-circle"></i> Laissez vide si vous ne souhaitez pas modifier le mot de passe</div>
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="status" class="form-label">Statut du compte <span class="red">*</span></label>
                                    <select class="js-states form-control" id="status" name="status" tabindex="-1" style="display: none; width: 100%" readonly>
                                        <option value="1" {{ old('status', $client->status) == 1 ? 'selected' : ''}}>Actif</option>
                                        <option value="0" {{ old('status', $client->status) == 0 ? 'selected' : ''}}>Inactif</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row m-t-xxl mt-4" id="identity-section">
                                <div class="col-md-4">
                                    <label for="photo" class="form-label">Photo de profil (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <input type="text" class="photo_profile" name="image" data-fileuploader="photo-uploader" value="{{ old('picture', $client->image ?? '') }}">
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