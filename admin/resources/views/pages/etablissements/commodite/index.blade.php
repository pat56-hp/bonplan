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
                <li class="breadcrumb-item active">{{ $title}}</li>
            
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
                            <a href="#" data-toggle="modal" data-target="#modalAddCommodite" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter une commodité</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Recherche</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-3">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered zero-configuration">
                                <thead>
                                <tr>
                                    <th>Icon</th>
                                    <th>Libéllé</th>
                                    <th>Endroit</th>
                                    <th>Statut</th>
                                    <th>Création</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($commodites as $commodite)
                                    <tr>
                                        <td>
                                            <i class="{{ $commodite->icon }}" style="font-size: 25px"></i>
                                        </td>
                                        <td>{{ ucfirst(html_entity_decode($commodite->libelle)) }}</td>
                                        <td>0</td>
                                        <td>
                                            @if($commodite->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($commodite->created_at)) }} par {{ ucfirst($commodite->created_by) }}</td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" data-toggle="modal" data-target="#modalEdit-{{$commodite->id}}" href="javascript:void()"><i class="fas fa-edit"></i> Modifier</a>
                                                    <a class="dropdown-item" href="{{ route('etablissements.commodite.delete', $commodite->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer cette commodité ?')"><i class="fas fa-trash"></i> Supprimer</a>
                                                    <a class="dropdown-item" href="{{ route('etablissements.commodite.status', $commodite->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de cette commodité ?')">
                                                        @if($commodite->status == 0)
                                                            <i class="fas fa-check-circle"></i> Activer
                                                        @else
                                                            <i class="fas fa-times-circle"></i> Désactiver
                                                        @endif
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        @include('pages.etablissements.commodite.edit')
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Icon</th>
                                    <th>Libéllé</th>
                                    <th>Endroit</th>
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