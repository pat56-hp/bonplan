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
                            <form action="{{ route('events.store')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="row m-t-xxl">
                                    <div class="col-md-6">
                                        <label for="title" class="form-label">Titre <span class="red">*</span></label>
                                        <input type="text" name="title" value="{{ old('title') }}" class="form-control @error('title') is-invalid @enderror" id="title" placeholder="Africa business concert">
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
                                                <option value="{{ $categorie->id }}" {{ old('category_id') == $categorie->id ? 'selected' : ''}}>{{ ucfirst($categorie->title) }}</option>
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
                                                <option value="{{ $p->id }}" {{ old('country_id') == $p->id ? 'selected' : ''}}>{{ ucfirst($p->nicename) }}</option>
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
                                        <input type="text" name="ville" value="{{ old('ville') }}" class="form-control @error('ville') is-invalid @enderror" id="ville" placeholder="Abidjan">
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
                                        <input type="text" name="commune" value="{{ old('commune') }}" class="form-control @error('commune') is-invalid @enderror" id="commune" placeholder="Cocody angré">
                                        @error('commune')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="adresse" class="form-label">Adresse <span class="red">*</span></label>
                                        <input type="text" name="adresse" value="{{ old('adresse') }}" class="form-control @error('adresse') is-invalid @enderror" id="adresse" placeholder="">
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
                                        <input type="email" name="email" value="{{old('email')}}" class="form-control @error('email') is-invalid @enderror" id="settingsInputEmail" aria-describedby="settingsEmailHelp" placeholder="example@neptune.com">
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
                                        <input type="tel" name="phone" value="{{old('phone')}}" class="form-control w-100 @error('phone') is-invalid @enderror" id="phone" placeholder="">
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
                                        <input type="text" name="organisateur" value="{{ old('organisateur') }}" class="form-control @error('organisateur') is-invalid @enderror" id="organisateur" placeholder="Organisateur de l'évènement">
                                        @error('organisateur')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6 whatsapp">
                                        <label for="whatsapp" class="form-label w-100">Whatsapp <span class="red">*</span></label>
                                        <input type="tel" name="whatsapp" value="{{old('whatsapp')}}" class="form-control w-100 @error('whatsapp') is-invalid @enderror" id="whatsapp" placeholder="">
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
                                        <input type="text" name="site" value="{{old('phone')}}" class="form-control w-100 @error('site') is-invalid @enderror" id="site" placeholder="https://...">
                                        @error('site')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="facebook" class="form-label">Facebook</label>
                                        <input type="text" name="facebook" value="{{old('facebook')}}" class="form-control @error('facebook') is-invalid @enderror" id="facebook" aria-describedby="settingsEmailHelp" placeholder="https://...">
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
                                        <input type="text" name="instagram" value="{{old('instagram')}}" class="form-control w-100 @error('instagram') is-invalid @enderror" id="instagram" placeholder="https://...">
                                        @error('instagram')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="facebook" class="form-label">Twitter</label>
                                        <input type="text" name="twitter" value="{{old('twitter')}}" class="form-control @error('twitter') is-invalid @enderror" id="twitter" aria-describedby="settingsEmailHelp" placeholder="https://...">
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
                                        <input type="text" name="map" value="{{old('map')}}" class="form-control w-100 @error('map') is-invalid @enderror" id="map" placeholder="">
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
                                        <input type="date" name="debut" value="{{ old('debut') }}" class="form-control @error('debut') is-invalid @enderror" id="debut">
                                        @error('debut')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="fin" class="form-label">Fin</label>
                                        <input type="date" name="fin" value="{{ old('fin') }}" class="form-control @error('fin') is-invalid @enderror" id="fin">
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
                                        <input type="time" name="heure_debut" value="{{ old('heure_debut') }}" class="form-control @error('heure_debut') is-invalid @enderror" id="heure_debut">
                                        @error('heure_debut')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label for="heure_fin" class="form-label">Heure de fin <span class="red">*</span></label>
                                        <input type="time" name="heure_fin" value="{{ old('heure_fin') }}" class="form-control @error('heure_fin') is-invalid @enderror" id="heure_fin">
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
                                        <textarea name="description" id="summernote" class="form-control @error('description') is-invalid @enderror">{{ old('description') }}</textarea>
                                        @error('description')
                                        <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                        @enderror
                                    </div>
                                    <div class="col-md-6 m-t-xxl">
                                        <label for="photo" class="form-label">Photo (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                        <span class="errorPhoto" style="color: red"></span>
                                        <input type="text" id="eventphoto" name="image" data-fileuploader="photo-uploader">
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