@extends('layouts.new.template')
@push('css')
    <style>
        .specialite .jquery-uploader .jquery-uploader-preview-container{
            padding: 0px !important;
        }

        .specialite .jquery-uploader-select-card, .specialite .jquery-uploader-card{
            height: 80px;
            width: 80px;
        }
    </style>
@endpush
@section('content')
    @include('parts.breadcrumb', [
        'data' => [
            ['label' => 'Tableau de bord', 'link' => route('dashboard')],
            ['label' => 'Etablissements', 'link' => route('etablissements.index')],
            ['label' => 'Création']
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
                            <a href="{{ route('etablissements.index') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-list"></i> Afficher la liste</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Rechercher</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('etablissements.store')}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <h4 class="mb-3">INFORMATIONS DE BASES</h4>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="libelle" class="form-label">Libéllé <span class="red">*</span></label>
                                    <input type="text" name="libelle" value="{{ old('libelle') }}" class="form-control  @error('libelle') is-invalid @enderror" id="libelle" placeholder="Les délices de Jeanne">
                                    @error('libelle')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="responsable" class="form-label">Responsable <span class="red">*</span></label>
                                    <select class="js-states form-control @error('client') is-invalid @enderror" id="responsable" tabindex="-1" style="display: none; width: 100%" readonly name="client">
                                        <option value="">Sélectionnez le responsable</option>
                                        @foreach($clients as $client)
                                            <option value="{{ $client->id }}" {{ old('client') == $client->id ? 'selected' : ''}}>{{ ucfirst($client->name).' '.ucfirst($client->lastname) }}</option>
                                        @endforeach
                                    </select>
                                    @error('client')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="categorie" class="form-label">Catégorie <span class="red">*</span></label>
                                    <select class="js-states form-control @error('categorie') is-invalid @enderror" id="categorie" tabindex="-1" style="display: none; width: 100%" name="categorie">
                                        <option value="">Sélectionnez la catégorie</option>
                                        @foreach($categories as $categorie)
                                            <option value="{{ $categorie->id }}" {{ old('categorie') == $categorie->id ? 'selected' : ''}}>{{ html_entity_decode(ucfirst($categorie->libelle)) }}</option>
                                        @endforeach
                                    </select>
                                    @error('categorie')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsInputEmail" class="form-label">Adresse email</label>
                                    <input type="email" name="email" value="{{old('email')}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
                                    <div id="settingsCurrentPassword" class="form-text"></div>
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row m-t-lg">
                                <div class="col-md-4">
                                    <label for="phone" class="form-label">Contact <span class="red">*</span></label>
                                    <input type="hidden" name="country_code" value="{{old('country_code')}}" required>
                                    <input type="tel" name="phone" value="{{ old('phone') }}" class="form-control @error('phone') is-invalid @enderror" id="phone" placeholder="">
                                    @error('phone')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="col-md-4">
                                    <label for="settingsState" class="form-label">Ville <span class="red">*</span></label>
                                    <input type="text" name="ville" value="{{old('ville')}}" class="form-control @error('ville') is-invalid @enderror" id="" placeholder="Abidjan">
                                    @error('ville')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-4">
                                    <label for="adresse_input" class="form-label">Adresse <span class="red">*</span></label>
                                    <input type="text" name="adresse" required value="{{old('adresse')}}" class="form-control @error('adresse') is-invalid @enderror" id="adresse_input" placeholder="Abidjan Cocody angré">
                                    <input type="hidden" name="latitude" id="latitude_input" value="{{old('latitude')}}">
                                    <input type="hidden" name="longitude" id="longitude_input" value="{{old('latitude')}}">
                                    <ul class="list-group" id="geoloc_adress">
                                        <li class="list-group-item"></li>
                                    </ul>
                                    @error('adresse')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="facebook" class="form-label">Facebook</label>
                                    <input type="url" name="facebook" value="{{old('facebook')}}" class="form-control @error('facebook') is-invalid @enderror" id="facebook" placeholder="https://www.monfacebook.com">
                                    @error('facebook')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="instagram" class="form-label">Instagram</label>
                                    <input type="url" name="instagram" value="{{old('instagram')}}" class="form-control @error('instagram') is-invalid @enderror" id="instagram" placeholder="https://www.moninstagram.com">
                                    @error('instagram')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl" id="identity-section">
                                <div class="col-md-6">
                                    <label for="photo" class="form-label">Image en avant (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <span class="errorPhoto" style="color: red"></span>
                                    <input type="text" id="photos" name="image" value="{{old('image')}}" data-fileuploader="photo-uploader">
                                </div>
                                <div class="col-md-6">
                                    <label for="recto" class="form-label">Galerie (.png, .jpeg, .jpg)</label><br>
                                    <span class="errorGalerie" style="color: red"></span>
                                    <input type="text" id="galerie" name="galerie" value="{{old('galerie')}}" data-fileuploader="photo-uploader">
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-12">
                                    <label for="description" class="form-label">Description <span class="red">*</span></label>
                                    <textarea name="description" cols="4" rows="4" id="summernote" class="form-control @error('description') is-invalid @enderror" >{{ old('description') }}</textarea>
                                    @error('description')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <hr>

                            <h4 class="mb-3">HORAIRES <span class="red">*</span></h4>

                            <div class="row m-t-lg mb-4">
                                <div class="col-md-2"></div>
                                <div class="col-md-3">
                                    <label for="">Jours</label>
                                </div>
                                <div class="col-md-3">
                                    <label for="">Ouverture</label>
                                </div>
                                <div class="col-md-3">
                                    <label for="">Fermeture</label>
                                </div>
                            </div>

                            @foreach($jours as $jour)
                            <div class="row m-t-lg">
                                <div class="col-md-2">
                                    <div class="checkbox col-sm-3">
                                        <label>
                                            <input class="{{$jour->id}}" id="switch-{{$jour->id}}" value="{{$jour->id}}" type="checkbox" name="jour[]" {{in_array($jour->id, old('jour') ?? []) ? 'checked' : ''}}>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="">{{ ucfirst($jour->libelle) }}</label>
                                </div>
                                <div class="col-md-3">
                                    <input type="time" class="form-control" name="ouverture[{{$jour->id}}]" value="{{ old('ouverture['.$jour->id.']') }}">
                                </div>
                                <div class="col-md-3">
                                    <input type="time" class="form-control" name="fermeture[{{$jour->id}}]" value="{{ old('fermeture['.$jour->id.']') }}">
                                </div>
                            </div>
                            @endforeach

                            <hr>

                            <h4 class="mb-3">COMMODITES <span class="red">*</span></h4>
                            <div class="row m-t-lg">
                                <div class="col-md-12">
                                    <label for="commodite" class="form-label">Veuillez sélectionnez les commodités </label>
                                    <select class="js-states form-control @error('commodite') is-invalid @enderror" multiple id="commodite" tabindex="-1" style="display: none; width: 100%" name="commodite[]">
                                        @foreach($commodites as $commodite)
                                            <option value="{{ $commodite->id }}" {{ in_array($commodite->id, old('commodite') ?? []) ? 'selected' : ''}}>{{ ucfirst($commodite->libelle) }}</option>
                                        @endforeach
                                    </select>
                                    @error('commodite')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
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

    <script src="{{ asset('assets/js/script.js') }}"></script>
@endpush