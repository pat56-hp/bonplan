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
    <div class="row page-titles">
        <div class="col p-0">
            <h4>Hello, <span>{{ ucfirst(auth()->user()->name).' '.ucfirst(auth()->user()->lastname) }}</span></h4>
        </div>
        <div class="col p-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard')}}">Tableau de bord</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="{{ route('bonplan.index')}}">Endroits</a>
                </li>
                <li class="breadcrumb-item active">Création</li>
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
                        <div class="buttons">
                            <a href="{{ route('bonplan.index') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-list"></i> Liste des endroits</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Rechercher</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('bonplan.update', $bonplan->id)}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Nom <span class="red">*</span></label>
                                    <input type="text" name="name" value="{{ old('name', $bonplan->name) }}" class="form-control  @error('name') is-invalid @enderror" id="name" placeholder="Les délices de Jeanne">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="responsable" class="form-label">Responsable <span class="red">*</span></label>
                                    <select class="js-states form-control @error('user_id') is-invalid @enderror" id="responsable" tabindex="-1" style="display: none; width: 100%" readonly name="user_id">
                                        <option value="">Sélectionnez le responsable</option>
                                        @foreach($users as $user)
                                            <option value="{{ $user->id }}" {{ old('user_id', $bonplan->user_id) == $user->id ? 'selected' : ''}}>{{ ucfirst($user->name).' '.ucfirst($user->lastname) }}</option>
                                        @endforeach
                                    </select>
                                    @error('user_id')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="categorie" class="form-label">Catégorie <span class="red">*</span></label>
                                    <select class="js-states form-control @error('categorie_id') is-invalid @enderror" id="categorie" tabindex="-1" style="display: none; width: 100%" readonly name="categorie_id">
                                        <option value="">Sélectionnez la catégorie</option>
                                        @foreach($categories as $categorie)
                                            <option value="{{ $categorie->id }}" {{ old('categorie_id', $bonplan->categorie_id) == $categorie->id ? 'selected' : ''}}>{{ ucfirst($categorie->libelle) }}</option>
                                        @endforeach
                                    </select>
                                    @error('categorie_id')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsInputEmail" class="form-label">Adresse email</label>
                                    <input type="email" name="email" value="{{old('email', $bonplan->email)}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
                                    <div id="settingsCurrentPassword" class="form-text"></div>
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row m-t-lg">
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Contact <span class="red">*</span></label>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <select class="js-states form-control @error('countrie_id') is-invalid @enderror" id="phone" tabindex="-1" style="display: none; width: 100%" readonly name="countrie_id">
                                                @foreach($countries as $countrie)
                                                    <option value="{{ $countrie->id }}" {{ old('countrie_id', $bonplan->country_id) == $countrie->id ? 'selected' : ''}}>+{{ $countrie->phonecode }}</option>
                                                @endforeach
                                            </select>
                                            @error('countrie_id')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" name="phone" value="{{old('phone', $bonplan->phone)}}" class="form-control @error('phone') is-invalid @enderror" id="settingsPhoneNumber" placeholder="xxx-xxx-xxxx">
                                            @error('phone')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <label for="settingsState" class="form-label">Ville <span class="red">*</span></label>
                                    <input type="text" name="ville" value="{{old('ville', $bonplan->ville)}}" class="form-control @error('ville') is-invalid @enderror" id="" placeholder="Abidjan">
                                    @error('ville')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-4">
                                    <label for="settingsState" class="form-label">Commune <span class="red">*</span></label>
                                    <input type="text" name="commune" value="{{old('commune', $bonplan->commune)}}" class="form-control @error('commune') is-invalid @enderror" id="" placeholder="Cocody">
                                    @error('commune')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div class="col-md-4">
                                    <label for="adresse" class="form-label">Adresse <span class="red">*</span></label>
                                    <input type="text" name="adresse" required value="{{old('adresse', $bonplan->adresse)}}" class="form-control @error('adresse') is-invalid @enderror" id="adresse" placeholder="Abidjan Cocody angré">
                                    @error('adresse')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-4">
                                    <label for="map" class="form-label">Lien map</label>
                                    <input type="url" name="map" value="{{old('map', $bonplan->map)}}" class="form-control @error('map') is-invalid @enderror" id="map" placeholder="https://">
                                    @error('map')
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
                                    <input type="text" id="photos" name="photo" data-fileuploader="photo-uploader">
                                </div>
                                <div class="col-md-6">
                                    <label for="recto" class="form-label">Galerie (.png, .jpeg, .jpg)</label><br>
                                    <span class="errorGalerie" style="color: red"></span>
                                    <input type="text" id="galerie" name="galerie" data-fileuploader="photo-uploader">
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-12">
                                    <label for="password" class="form-label">Description <span class="red">*</span></label>
                                    <textarea name="description" id="summernote" class="form-control @error('description') is-invalid @enderror">{{ old('description', html_entity_decode($bonplan->description)) }}</textarea>
                                    @error('description')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <hr>

                            <h4 class="mb-3">HORAIRES</h4>

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
                                                <input value="{{$jour->id}}" type="checkbox" name="jour[]" {{ $bonplan->horaires->where('jour_id', $jour->id)->first() ? 'checked' : '' }}>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="">{{ ucfirst($jour->libelle) }}</label>
                                    </div>
                                    <div class="col-md-3">
                                        <input type="time" class="form-control" name="ouverture[{{$jour->id}}]" value="{{ $bonplan->horaires->where('jour_id', $jour->id)->first()->ouverture ?? '' }}">
                                    </div>
                                    <div class="col-md-3">
                                        <input type="time" class="form-control" name="fermeture[{{$jour->id}}]" value="{{ $bonplan->horaires->where('jour_id', $jour->id)->first()->fermeture ?? '' }}">
                                    </div>
                                </div>
                            @endforeach

                            <hr>

                            <h4 class="mb-3">SPECIALITES / MENU</h4>

                            <div class="row m-t-lg mb-4">
                                <div class="col-md-3">
                                    <label for="">Libéllé <span class="red">*</span></label>
                                </div>
                                <div class="col-md-3">
                                    <label for="">Prix <span class="red">*</span></label>
                                </div>
                                <div class="col-md-3">
                                    <label for="">Image (.png, .jpeg, .jpg) <span class="red">*</span></label>
                                </div>
                                <div class="col-md-3"></div>
                            </div>

                            @forelse($bonplan->offers as $offers)
                                <div class="row m-t-lg">
                                    <div class="col-md-3">
                                        <input type="text" class="form-control" name="specialite[{{$offers->id}}][libelle]" value="{{ html_entity_decode(ucfirst($offers->name)) }}">
                                    </div>
                                    <div class="col-md-3">
                                        <input type="number" class="form-control" name="specialite[{{$offers->id}}][prix]" value="{{ $offers->price }}">
                                    </div>
                                    <div class="col-md-3 specialite">
                                        <input type="text" class="specialitephoto" name="specialite[{{$offers->id}}][photo]" data-fileuploader="photo-uploader" value="{{ $offers->image->name }}">
                                    </div>
                                    <div class="col-md-3 specialite">
                                        <button class="btn btn-danger btn-sm deletespecialite"><i class="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            @empty
                                <div class="row m-t-lg">
                                    <div class="col-md-3">
                                        <input type="text" class="form-control" name="specialite[0][libelle]">
                                    </div>
                                    <div class="col-md-3">
                                        <input type="number" class="form-control" name="specialite[0][prix]">
                                    </div>
                                    <div class="col-md-3 specialite">
                                        <input type="text" class="specialitephoto" name="specialite[0][photo]" data-fileuploader="photo-uploader">
                                    </div>
                                </div>
                            @endforelse

                            <div class="sectionAddSpecialite">

                            </div>

                            <button class="btn btn-secondary btn-sm addspecialite"><i class="fas fa-plus-circle ms-2"></i> Ajouter</button>

                            <hr>

                            <h4 class="mb-3">COMMODITES</h4>
                            <div class="row m-t-lg">
                                <div class="col-md-12">
                                    <label for="commodite" class="form-label">Veuillez sélectionnez les commodités <span class="red">*</span></label>
                                    <select class="js-states form-control @error('commodite') is-invalid @enderror" multiple id="categorie" tabindex="-1" style="display: none; width: 100%" name="commodite[]">
                                        @foreach($commodites as $commodite)
                                            <option value="{{ $commodite->id }}" {{ in_array($commodite->id, $bonplan->commodites()->pluck('commodite_id')->toArray()) ? 'selected' : ''  }}>{{ ucfirst($commodite->libelle) }}</option>
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
                @foreach($bonplan->images as $image)
                {
                    name: "jQuery",
                    url: "{{$image->name}}"
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
                    url: "{{$bonplan->photo->name ?? ''}}"
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
    <script>
        let count = {{$bonplan->offers->count() + 1}};
        $('.specialitephoto').uploader({
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

        $('.addspecialite').click(function(e){
            e.preventDefault()

            let newSpecialite = '<div class="row m-t-lg">\n' +
                '<div class="col-md-3">\n' +
                '<input type="text" class="form-control" name="specialite['+count+'][libelle]">\n' +
                '</div>\n' +
                '<div class="col-md-3">\n' +
                '<input type="number" class="form-control" name="specialite['+count+'][prix]">\n' +
                '</div>\n' +
                '<div class="col-md-3 specialite">\n' +
                '<input type="text" class="specialitephoto" name="specialite['+count+'][photo]" data-fileuploader="photo-uploader">\n' +
                '</div>\n' +
                '<div class="col-md-3 specialite">\n' +
                '<button class="btn btn-danger btn-sm deletespecialite"><i class="fas fa-trash"></i></button>\n' +
                '</div>\n' +
                '</div>';

            $('.sectionAddSpecialite').append(newSpecialite);

            $('.specialitephoto').uploader({
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

            count++

        })

        $(document).on('click', '.deletespecialite', function(e){
            e.preventDefault()

            $(this).parent().parent().remove()
        })


    </script>
@endpush