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
            ['label' => 'Edition']
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
                            <a href="{{ route('etablissements.index') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-list"></i> Liste des endroits</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Rechercher</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('etablissements.update', ['id' => $etablissement->id])}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <h4 class="mb-3">INFORMATIONS DE BASES</h4>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="libelle" class="form-label">Libéllé <span class="red">*</span></label>
                                    <input type="text" name="libelle" value="{{ old('libelle', $etablissement->libelle) }}" class="form-control  @error('libelle') is-invalid @enderror" id="libelle" placeholder="Les délices de Jeanne">
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
                                            <option value="{{ $client->id }}" {{ old('client', $etablissement->client_id) == $client->id ? 'selected' : ''}}>{{ ucfirst($client->name).' '.ucfirst($client->lastname) }}</option>
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
                                            <option value="{{ $categorie->id }}" {{ old('categorie', $etablissement->category_id) == $categorie->id ? 'selected' : ''}}>{{ html_entity_decode(ucfirst($categorie->libelle)) }}</option>
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
                                    <input type="email" name="email" value="{{old('email', $etablissement->email)}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
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
                                    <input type="tel" name="phone" value="{{ old('phone', $etablissement->phone) }}" class="form-control @error('phone') is-invalid @enderror" id="phone" placeholder="">
                                    @error('phone')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="col-md-4">
                                    <label for="settingsState" class="form-label">Ville <span class="red">*</span></label>
                                    <input type="text" name="ville" value="{{old('ville', $etablissement->ville)}}" class="form-control @error('ville') is-invalid @enderror" id="" placeholder="Abidjan">
                                    @error('ville')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-4">
                                    <label for="adresse" class="form-label">Adresse <span class="red">*</span></label>
                                    <input type="text" name="adresse" required value="{{old('adresse', $etablissement->adresse)}}" class="form-control @error('adresse') is-invalid @enderror" id="adresse" placeholder="Abidjan Cocody angré">
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
                                    <input type="url" name="facebook" value="{{old('facebook', $etablissement->facebook)}}" class="form-control @error('facebook') is-invalid @enderror" id="facebook" placeholder="https://www.monfacebook.com">
                                    @error('facebook')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="instagram" class="form-label">Instagram</label>
                                    <input type="url" name="instagram" value="{{old('instagram', $etablissement->instagram)}}" class="form-control @error('instagram') is-invalid @enderror" id="instagram" placeholder="https://www.moninstagram.com">
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
                                    <textarea name="description" cols="4" rows="4" id="summernote" class="form-control @error('description') is-invalid @enderror" >{{ old('description', $etablissement->description) }}</textarea>
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
                                            <input 
                                                class="{{$jour->id}}" 
                                                id="switch-{{$jour->id}}" 
                                                value="{{$jour->id}}" 
                                                type="checkbox" 
                                                name="jour[]"
                                                {{ in_array($jour->id, old('jour', $etablissement->jours()->pluck('jour_id')->toArray())) ? "checked" : ""}}
                                            >
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="">{{ ucfirst($jour->libelle) }}</label>
                                </div>
                                <div class="col-md-3">
                                    <input type="time" class="form-control" name="ouverture[{{$jour->id}}]" value="{{ $etablissement->getOuverture($jour->id) }}">
                                </div>
                                <div class="col-md-3">
                                    <input type="time" class="form-control" name="fermeture[{{$jour->id}}]" value="{{ $etablissement->getFermeture($jour->id) }}">
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
                                            <option value="{{ $commodite->id }}" {{ in_array($commodite->id, old('commodite', $etablissement->commodites()->pluck('commodite_id')->toArray())) ? 'selected' : '' }}>{{ ucfirst($commodite->libelle) }}</option>
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
                                    <button type="submit" class="btn btn-primary m-t-sm"><i class="fas fa-save ms-2"></i> Enregistrer</button>
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
        $("#galerie").uploader({
            multiple: true,
            defaultValue: [
                @foreach($etablissement->galleries as $image)
                {
                    name: "jQuery",
                    url: "{{$image->image}}"
                },
                @endforeach
            ],
            ajaxConfig: {
                url: "{{ route('imageStorage') }}",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
                    form.append("_token", "{{ csrf_token() }}")
                    console.log(form)
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            successCallback(response)
                            $('.errorGalerie').text('')
                        },
                        error: function (response) {
                            console.error("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            console.log(msg)
                            $('.errorGalerie').text('Erreur: ' +msg)
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    console.log(response)
                    return {
                        url: response.file,
                        name: null,
                    }
                },
            },
        })

        $("#photos").uploader({
            multiple: false,
            defaultValue: [

                {
                    name: "jQuery",
                    url: "{{$etablissement->image ?? ''}}"
                },

            ],
            ajaxConfig: {
                url: "{{ route('imageStorage') }}",
                method: "post",
                paramsBuilder: function (uploaderFile) {
                    let form = new FormData();
                    form.append("file", uploaderFile.file)
                    form.append("_token", "{{ csrf_token() }}")
                    console.log(form)
                    return form
                },
                ajaxRequester: function (config, uploaderFile, progressCallback, successCallback, errorCallback) {
                    $.ajax({
                        url: config.url,
                        contentType: false,
                        processData: false,
                        method: config.method,
                        data: config.paramsBuilder(uploaderFile),
                        success: function (response) {
                            successCallback(response)
                            $('.errorPhoto').text('')
                        },
                        error: function (response) {
                            console.error("Error", response)
                            errorCallback("Error")

                            let msg = response.responseJSON.message
                            console.log(msg)
                            $('.errorPhoto').text('Erreur: ' +msg)
                        },
                        xhr: function () {
                            let xhr = new XMLHttpRequest();
                            xhr.upload.addEventListener('progress', function (e) {
                                let progressRate = (e.loaded / e.total) * 100;
                                progressCallback(progressRate)
                            })
                            return xhr;
                        }
                    })
                },
                responseConverter: function (uploaderFile, response) {
                    console.log(response)
                    return {
                        url: response.file,
                        name: null,
                    }
                },
            },
        })
    </script>
@endpush