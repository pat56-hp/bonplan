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
                    Bannières
                </li>
                <li class="breadcrumb-item active">
                    Modification
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
                            <a href="{{ route('banner.create') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter une bannière</a>
                            <a href="{{ route('banner.create') }}" class="btn btn-secondary btn-rounded p-2"><i class="fas fa-list"></i> Liste des bannières</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="alert alert-warning text-center mb-4">
                            <span class="mt-0 d-inline">Tous les champs marqués par ( <i class="red">*</i> ) sont obligatoire !</span>
                        </div>
                        <form action="{{ route('banner.update', $banner->id)}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Titre</label>
                                    <input type="text" name="title" value="{{ old('title', $banner->title) }}" class="form-control  @error('title') is-invalid @enderror" id="name" placeholder="">
                                    @error('title')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="subtitle" class="form-label">Sous-titre</label>
                                    <input type="text" name="subtitle" value="{{ old('subtitle', $banner->subtitle) }}" class="form-control  @error('subtitle') is-invalid @enderror" id="subtitle" placeholder="">
                                    @error('subtitle')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <hr>
                            <h4>1er Boutton</h4>

                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Titre</label>
                                    <input type="text" name="btn_first_title" value="{{ old('btn_first_title', $banner->btn_first_title) }}" class="form-control  @error('btn_first_title') is-invalid @enderror" id="btn_first_title" placeholder="">
                                    @error('btn_first_title')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="subtitle" class="form-label">Url</label>
                                    <input type="text" name="btn_first_url" value="{{ old('btn_first_url', $banner->btn_first_url) }}" class="form-control  @error('btn_first_url') is-invalid @enderror" id="btn_first_url" placeholder="">
                                    @error('btn_first_url')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <hr>
                            <h4>2e Boutton</h4>

                            <div class="row m-t-xxl">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Titre</label>
                                    <input type="text" name="btn_second_title" value="{{ old('btn_second_title', $banner->btn_second_title) }}" class="form-control  @error('btn_second_title') is-invalid @enderror" id="btn_second_title" placeholder="">
                                    @error('btn_second_title')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="subtitle" class="form-label">Url</label>
                                    <input type="text" name="btn_first_url" value="{{ old('btn_second_url', $banner->btn_second_url) }}" class="form-control  @error('btn_second_url') is-invalid @enderror" id="btn_second_url" placeholder="">
                                    @error('btn_second_url')
                                    <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                    @enderror
                                </div>
                            </div>

                            <hr>
                            <div class="row m-t-xxl" id="identity-section">
                                <div class="col-md-6">
                                    <label for="photo" class="form-label">Image (.png, .jpeg, .jpg) <span class="red">*</span></label><br>
                                    <span class="errorPhoto" style="color: red"></span>
                                    <input type="text" id="photos" name="image" data-fileuploader="photo-uploader" value="{{ $banner->image }}">
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