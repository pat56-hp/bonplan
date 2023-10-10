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
                <li class="breadcrumb-item active">
                    Offres
                </li>
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
                            <a href="{{ route('offer.index') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-list"></i> Liste des offres</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Rechercher</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('offer.store')}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Nom <span class="red">*</span></label>
                                    <input type="text" name="name" value="{{ old('name') }}" class="form-control  @error('name') is-invalid @enderror" id="name" placeholder="Les délices de Jeanne">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="endroit_id" class="form-label">Plan de divertissement <span class="red">*</span></label>
                                    <select class="js-states form-control @error('endroit_id') is-invalid @enderror" id="endroit_id" tabindex="-1" style="display: none; width: 100%" readonly name="endroit_id">
                                        <option value="">Sélectionnez le plan</option>
                                        @foreach($plans as $plan)
                                            <option value="{{ $plan->id }}" {{ old('endroit_id') == $plan->id ? 'selected' : ''}}>{{ ucfirst($plan->name) }}</option>
                                        @endforeach
                                    </select>
                                    @error('endroit_id')
                                    <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row m-t-lg">
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Prix <span class="red">*</span></label>
                                    <input type="number" name="price" min="0" value="{{old('price')}}" class="form-control @error('price') is-invalid @enderror" id="settingsPhoneNumber" placeholder="">
                                    @error('price')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror

                                </div>
                                <div class="col-md-6">
                                    <label for="photo" class="form-label">Photo (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <span class="errorPhoto" style="color: red"></span>
                                    <input type="text" id="photos" name="photo" data-fileuploader="photo-uploader">
                                </div>
                            </div>
                            <div class="row m-t-xxl">
                                <div class="col-md-12">
                                    <label for="password" class="form-label">Description</label>
                                    <textarea name="description" id="summernote" class="form-control @error('description') is-invalid @enderror">{{ old('description') }}</textarea>
                                    @error('description')
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