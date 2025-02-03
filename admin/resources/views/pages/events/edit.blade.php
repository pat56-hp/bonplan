@extends('layouts.app')

@section('content')
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="page-description page-description-tabbed">
                        <div class="d-flex justify-content-between">
                            <h1>{{ $title}}</h1>
                            <div class="buttons">
                                @include('pages.events.buttons')
                            </div>
                        </div>
                        <p>{{ $sub_title }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="settings-security-two-factor text-center">
                                <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                            </div>
                            <form action="{{ route('events.update', $event->id)}}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="title" class="form-label">Titre <span class="red">*</span></label>
                                        <input type="text" name="title" value="{{ old('title', $event->title) }}" class="form-control @error('title') is-invalid @enderror" id="title" placeholder="Africa business concert">
                                        @error('title')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="category_id" class="form-label">Catégorie <span class="red">*</span></label>
                                        <select class="js-states form-control @error('category_id') is-invalid @enderror" id="category_id" tabindex="-1" style="display: none; width: 100%" readonly name="category_id">
                                            <option value="">Sélectionnez la catégorie</option>
                                            @foreach($categories as $categorie)
                                                <option value="{{ $categorie->id }}" {{ old('category_id', $event->category_id) == $categorie->id ? 'selected' : ''}}>{{ ucfirst($categorie->title) }}</option>
                                            @endforeach
                                        </select>
                                        @error('category_id')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="category_id" class="form-label">Pays <span class="red">*</span></label>
                                        <select class="js-states form-control @error('country_id') is-invalid @enderror" id="country_id" tabindex="-1" style="display: none; width: 100%" readonly name="country_id">
                                            <option value="">Sélectionnez le pays</option>
                                            @foreach($pays as $p)
                                                <option value="{{ $p->id }}" {{ old('country_id', $event->country_id) == $p->id ? 'selected' : ''}}>{{ ucfirst($p->nicename) }}</option>
                                            @endforeach
                                        </select>
                                        @error('country_id')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="ville" class="form-label">Ville <span class="red">*</span></label>
                                        <input type="text" name="ville" value="{{ old('ville', $event->ville) }}" class="form-control @error('ville') is-invalid @enderror" id="ville" placeholder="Abidjan">
                                        @error('ville')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="commune" class="form-label">Commune</label>
                                        <input type="text" name="commune" value="{{ old('commune', $event->commune) }}" class="form-control @error('commune') is-invalid @enderror" id="commune" placeholder="Cocody angré">
                                        @error('commune')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="adresse" class="form-label">Adresse <span class="red">*</span></label>
                                        <input type="text" name="adresse" value="{{ old('adresse', $event->adresse) }}" class="form-control @error('adresse') is-invalid @enderror" id="adresse" placeholder="">
                                        @error('adresse')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="settingsInputEmail" class="form-label">Email <span class="red">*</span></label>
                                        <input type="email" name="email" value="{{old('email', $event->email)}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
                                        <div id="settingsCurrentPassword" class="form-text"></div>
                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6 contact">
                                        <label for="phone" class="form-label w-100">Contact <span class="red">*</span></label>
                                        <input type="hidden" name="country_code_phone">
                                        <input type="tel" name="phone" value="{{old('phone', $event->phone)}}" class="form-control w-100 @error('phone') is-invalid @enderror" id="phone" placeholder="">
                                        @error('phone')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="organisateur" class="form-label">Organisateur <span class="red">*</span></label>
                                        <input type="text" name="organisateur" value="{{ old('organisateur', $event->organisateur) }}" class="form-control @error('organisateur') is-invalid @enderror" id="organisateur" placeholder="Organisateur de l'évènement">
                                        @error('organisateur')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6 whatsapp">
                                        <label for="whatsapp" class="form-label w-100">Whatsapp <span class="red">*</span></label>
                                        <input type="tel" name="whatsapp" value="{{old('whatsapp', $event->whatsapp)}}" class="form-control w-100 @error('whatsapp') is-invalid @enderror" id="whatsapp" placeholder="">
                                        <input type="hidden" name="country_code_whatsapp">
                                        @error('whatsapp')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="site" class="form-label w-100">Site web</label>
                                        <input type="text" name="site" value="{{old('phone', $event->site)}}" class="form-control w-100 @error('site') is-invalid @enderror" id="site" placeholder="https://...">
                                        @error('site')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="facebook" class="form-label">Facebook</label>
                                        <input type="text" name="facebook" value="{{old('facebook', $event->facebook)}}" class="form-control @error('facebook') is-invalid @enderror" id="facebook" aria-describedby="settingsEmailHelp" placeholder="https://...">
                                        <div id="settingsCurrentPassword" class="form-text"></div>
                                        @error('facebook')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="site" class="form-label w-100">Instagram</label>
                                        <input type="text" name="instagram" value="{{old('instagram', $event->instagram)}}" class="form-control w-100 @error('instagram') is-invalid @enderror" id="instagram" placeholder="https://...">
                                        @error('instagram')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="facebook" class="form-label">Twitter</label>
                                        <input type="text" name="twitter" value="{{old('twitter', $event->tweeter)}}" class="form-control @error('twitter') is-invalid @enderror" id="twitter" aria-describedby="settingsEmailHelp" placeholder="https://...">
                                        @error('twitter')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row m-t-xxl">
                                    <div class="col-md-12">
                                        <label for="map" class="form-label w-100">Map</label>
                                        <input type="text" name="map" value="{{old('map', $event->map)}}" class="form-control w-100 @error('map') is-invalid @enderror" id="map" placeholder="">
                                        <div id="settingsCurrentPassword" class="form-text"><a href="#">Comment copier l'adresse map sur goole map ?</a></div>
                                        @error('map')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="debut" class="form-label">Debut <span class="red">*</span></label>
                                        <input type="date" name="debut" value="{{ old('debut', $event->debut) }}" class="form-control @error('debut') is-invalid @enderror" id="debut">
                                        @error('debut')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="fin" class="form-label">Fin</label>
                                        <input type="date" name="fin" value="{{ old('fin', $event->fin) }}" class="form-control @error('fin') is-invalid @enderror" id="fin">
                                        @error('fin')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="heure_debut" class="form-label">Heure de commencement <span class="red">*</span></label>
                                        <input type="time" name="heure_debut" value="{{ old('heure_debut', $event->heure_debut) }}" class="form-control @error('heure_debut') is-invalid @enderror" id="heure_debut">
                                        @error('heure_debut')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="heure_fin" class="form-label">Heure de fin <span class="red">*</span></label>
                                        <input type="time" name="heure_fin" value="{{ old('heure_fin', $event->heure_fin) }}" class="form-control @error('heure_fin') is-invalid @enderror" id="heure_fin">
                                        @error('heure_fin')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row m-t-xxl">
                                    <div class="col-md-12">
                                        <label for="password" class="form-label">Description <span class="red">*</span></label>
                                        <textarea name="description" id="summernote" class="form-control @error('description') is-invalid @enderror">{{ html_entity_decode(old('description', $event->description)) }}</textarea>
                                        @error('description')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6 m-t-xxl">
                                        <label for="photo" class="form-label">Photo (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                        <span class="errorPhoto" style="color: red"></span>
                                        <input type="text" id="eventphoto" name="image" value="{{ $event->photo->name ?? '' }}" data-fileuploader="photo-uploader">
                                    </div>
                                </div>

                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="status" class="form-label">Statut <span class="red">*</span></label>
                                        <select class="js-states form-control @error('status') is-invalid @enderror" id="status" tabindex="-1" style="display: none; width: 100%" name="status">
                                            <option value="0" {{ old('status', $event->status) == 0 ? 'selected' : '' }}>Inactif</option>
                                            <option value="1" {{ old('status', $event->status) == 1 ? 'selected' : '' }}>Actif</option>
                                        </select>
                                        @error('status')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validated" class="form-label">Validation <span class="red">*</span></label>
                                        <select class="js-states form-control @error('validated') is-invalid @enderror" id="validated" tabindex="-1" style="display: none; width: 100%" name="validated">
                                            <option value="0" {{ old('status', $event->validated) == 0 ? 'selected' : '' }}>En attente</option>
                                            <option value="1" {{ old('status', $event->validated) == 1 ? 'selected' : '' }}>Validé</option>
                                            <option value="2" {{ old('status', $event->validated) == 2 ? 'selected' : '' }}>Refusé</option>
                                        </select>
                                        @error('validated')
                                        <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row m-t-lg">
                                    <div class="col">
                                        <button type="submit" class="btn btn-primary m-t-sm">Enregistrer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('js')
    <script>
        $("#eventphoto").uploader({
            multiple: false,
            defaultValue: [
                {
                    name: "jQuery",
                    url: "{{ $event->photo->name ?? '' }}",
                }
            ],
            ajaxConfig: {
                url: "{{ route('events.storeimg') }}",
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