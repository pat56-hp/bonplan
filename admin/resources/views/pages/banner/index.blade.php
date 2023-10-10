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
                    Bannières
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
                            <a href="{{ route('banner.create')}}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter une bannière</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-3">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered zero-configuration">
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Titre</th>
                                    <th>Sous-titre</th>
                                    <th>Boutton 1</th>
                                    <th>Boutton 2</th>
                                    <th>Statut</th>
                                    <th>Création</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    @foreach($banners as $banner)
                                    <tr>
                                        <td><img src="{{ $banner->image }}" alt="{{ $banner->title }}" width="100px"></td>
                                        <td>{{ ucfirst($banner->title) }}</td>
                                        <td>{{ ucfirst($banner->subtitle) }}</td>
                                        <td>{{ $banner->btn_first == 1 ? 'Oui' : 'Non' }}</td>
                                        <td>{{ $banner->btn_second == 1 ? 'Oui' : 'Non' }}</td>
                                        <td>
                                            @if($banner->statut == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($banner->created_at)) }} par {{ ucfirst($banner->created_by) }}</td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="{{ route('banner.edit', $banner->id) }}"><i class="fas fa-edit"></i> Modifier</a>
                                                    <a class="dropdown-item" href="{{ route('banner.delete', $banner->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer cette bannière ?')"><i class="fas fa-trash"></i> Supprimer</a>
                                                    <a class="dropdown-item" href="{{ route('banner.status', $banner->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de cette bannière ?')">
                                                        @if($banner->statut == 0)
                                                            <i class="fas fa-check-circle"></i> Activer
                                                        @else
                                                            <i class="fas fa-times-circle"></i> Désactiver
                                                        @endif
                                                    </a>
                                                </div>
                                            </div>   
                                        </td>
                                        
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Image</th>
                                        <th>Titre</th>
                                        <th>Sous-titre</th>
                                        <th>Boutton 1</th>
                                        <th>Boutton 2</th>
                                        <th>Statut</th>
                                        <th>Création</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection