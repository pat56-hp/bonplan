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
                <li class="breadcrumb-item active">Configurations</li>
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
                        <form action="{{ route('setting.store') }}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputFirstName" class="form-label">Nom du Site <span class="red">*</span></label>
                                    <input type="text" name="name" value="{{ old('name', $setting->name) }}" class="form-control @error('name') is-invalid @enderror" id="settingsInputFirstName" placeholder="Les bons plans">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsInputLastName" class="form-label">Url</label>
                                    <input type="url" name="lien" value="{{ old('lien', $setting->lien) }}" class="form-control  @error('lien') is-invalid @enderror" id="settingsInputLastName" placeholder="Lien du site web ">
                                    @error('lien')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputFirstName" class="form-label">Auteur <span class="red">*</span></label>
                                    <input type="text" name="auteur" value="{{ old('auteur', $setting->auteur) }}" class="form-control @error('auteur') is-invalid @enderror" id="settingsInputFirstName" placeholder="Auteur du site">
                                    @error('auteur')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsInputLastName" class="form-label">Slogan</label>
                                    <input type="text" name="slogan" value="{{ old('slogan', $setting->slogan) }}" class="form-control  @error('slogan') is-invalid @enderror" id="settingsInputLastName" placeholder="Slogan du site web ">
                                    @error('slogan')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>
                        
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputEmail" class="form-label">Adresse email <span class="red">*</span></label>
                                    <input type="email" name="email" value="{{old('email', $setting->email)}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
                                    <div id="settingsCurrentPassword" class="form-text"></div>
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsPhoneNumber" class="form-label">Contact</label>
                                    <input type="text" name="phone" value="{{old('phone', $setting->phone)}}" class="form-control @error('phone') is-invalid @enderror" id="settingsPhoneNumber" placeholder="(xxx) xxx-xxxx">
                                    @error('phone')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputEmail" class="form-label">Facebook url</label>
                                    <input type="url" name="facebook" value="{{old('facebook', $setting->facebook)}}" class="form-control @error('facebook') is-invalid @enderror" id="facebook" aria-describedby="settingsEmailHelp" placeholder="https://www.facebook.com">
                                    @error('facebook')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsState" class="form-label">Instagram url</label>
                                    <input type="url" name="instagram" value="{{old('instagram', $setting->instagram)}}" class="form-control @error('instagram') is-invalid @enderror" id="instagram" aria-describedby="settingsEmailHelp" placeholder="https://www.instagram.com">
                                    @error('instagram')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputEmail" class="form-label">Twitter url</label>
                                    <input type="url" name="twitter" value="{{old('twitter', $setting->twitter)}}" class="form-control @error('twitter') is-invalid @enderror" id="twitter" aria-describedby="settingsEmailHelp" placeholder="https://www.twitter.com">
                                    @error('twitter')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsState" class="form-label">Map</label>
                                    <input type="text" name="map" value="{{old('map', $setting->map)}}" class="form-control @error('map') is-invalid @enderror" id="password" aria-describedby="settingsEmailHelp" placeholder="https://">
                                    @error('instagram')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row m-t-xxl">
                                <div class="col-md-12">
                                    <label for="settingsInputEmail" class="form-label">Mots clés (Séparez les mots clés par des virgules)</label>
                                    <textarea name="mot_cle" class="form-control" id="" cols="4" rows="4">{{ old('mot_cle', $setting->mot_cle) }}</textarea>
                                    @error('mot_cle')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row m-t-lg">
                                <div class="col-md-4">
                                    <label for="photo" class="form-label">Logo (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <span class="errorPhoto" style="color: red"></span>
                                    <input type="text" id="logo" name="logo" data-fileuploader="photo-uploader">
                                </div>
                                <div class="col-md-4">
                                    <label for="photo" class="form-label">Logo black (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <span class="errorPhoto" style="color: red"></span>
                                    <input type="text" id="logo_black" name="logo_black" data-fileuploader="photo-uploader">
                                </div>
                                <div class="col-md-4">
                                    <label for="photo" class="form-label">Favicon (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <span class="errorPhoto" style="color: red"></span>
                                    <input type="text" id="favicon" name="favicon" data-fileuploader="photo-uploader">
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
        $("#logo").uploader({
            multiple: false,
            defaultValue: [

                {
                    name: "jQuery",
                    url: "{{$setting->logo ?? ''}}"
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

        $("#logo_black").uploader({
            multiple: false,
            defaultValue: [

                {
                    name: "jQuery",
                    url: "{{$setting->logo_black ?? ''}}"
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

        $("#favicon").uploader({
            multiple: false,
            defaultValue: [

                {
                    name: "jQuery",
                    url: "{{$setting->favicon ?? ''}}"
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