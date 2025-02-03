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
                <li class="breadcrumb-item">
                    <a href="{{ route('admin.index')}}">Utilisateurs</a>
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
                            <a href="{{ route('admin.index') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-list"></i> Liste des utilisateurs</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Rechercher</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('admin.store')}}" method="post">
                            @csrf
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputFirstName" class="form-label">Nom <span class="red">*</span></label>
                                    <input type="text" name="name" value="{{ old('name') }}" class="form-control @error('name') is-invalid @enderror" id="settingsInputFirstName" placeholder="John">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsInputLastName" class="form-label">Prénom(s) <span class="red">*</span></label>
                                    <input type="text" name="lastname" value="{{ old('lastname') }}" class="form-control  @error('lastname') is-invalid @enderror" id="settingsInputLastName" placeholder="Doe">
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
                                    <input type="phone" name="phone" value="{{old('phone')}}" class="form-control @error('phone') is-invalid @enderror" id="phone" placeholder="">
                                    @error('phone')
                                    <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row m-t-lg">
                                <div class="col-md-6">
                                    <label for="settingsInputUserName" class="form-label">Adresse <span class="red">*</span></label>
                                    <input type="text" name="adresse" value="{{old('adresse')}}" class="form-control @error('adresse') is-invalid @enderror" id="settingsPhoneNumber" placeholder="Abidjan Cocody angré">
                                    @error('adresse')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsState" class="form-label">Rôle <span class="red">*</span></label>
                                    <select class="js-states form-control" id="settingsState" tabindex="-1" style="display: none; width: 100%" readonly name="role">
                                        <option value="Administrateur" {{ old('role') == 'Administrateur' ? 'selected' : ''}}>Administrateur</option>
                                        <option value="Superviseur" {{ old('role') == 'Superviseur' ? 'selected' : ''}}>Superviseur</option>
                                        <option value="Super Admin" {{ old('role') == 'Super Admin' ? 'selected' : ''}}>Super Admin</option>
                                        <option value="Comptable" {{ old('role') == 'Comptable' ? 'selected' : ''}}>Comptable</option>
                                        <option value="Animateur" {{ old('role') == 'Animateur' ? 'selected' : ''}}>Animateur</option>
                                        <option value="Rédacteur" {{ old('role') == 'Rédacteur' ? 'selected' : ''}}>Rédacteur</option>
                                        <option value="Defaut" {{ old('role') == 'Defaut' ? 'selected' : ''}}>Defaut</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="settingsInputEmail" class="form-label">Mot de passe</label>
                                    <input type="password" name="password" value="{{old('password')}}" class="form-control @error('password') is-invalid @enderror" id="password" aria-describedby="settingsEmailHelp" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                                    <div id="settingsCurrentPassword" class="form-text">Laissez vide si vous souhaitez utiliser l'adresse email pour le mot de passe par defaut</div>
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="settingsState" class="form-label">Statut du compte <span class="red">*</span></label>
                                    <select class="js-states form-control" id="status" name="status" tabindex="-1" style="display: none; width: 100%" readonly>
                                        <option value="1" {{ old('status') == 1 ? 'selected' : ''}}>Actif</option>
                                        <option value="0" {{ old('status') == 0 ? 'selected' : ''}}>Inactif</option>
                                    </select>
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