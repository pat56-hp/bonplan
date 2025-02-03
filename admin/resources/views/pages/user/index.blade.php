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
                <li class="breadcrumb-item active">Compte</li>
            
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
                            <a href="{{ route('user.create') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter un compte</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Recherche</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-3">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered zero-configuration">
                                <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Nom & prénom(s)</th>
                                    <th>Contact</th>
                                    <th>Etat</th>
                                    <th>Statut</th>
                                    <th>Date Enreg.</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($users as $user)
                                    <tr>
                                        <td>
                                            <b>{{ $user->type == 0 ? 'Client' : 'Responsable' }}</b>
                                            @if($user->image)
                                                <img src="{{ $user->image->name ?? '' }}" alt="Bon plan profile" width="80px">
                                            @endif
                                        </td>
                                        <td>{{ ucfirst($user->name).' '.ucfirst($user->lastname) }}</td>
                                        <td>
                                            <i class="fa fa-envelope"></i> {{ $user->email }} <br>
                                            <i class="fa fa-phone"></i> {{ $user->phone ?? 'Aucun contact' }}
                                        </td>
                                        <td>
                                            @if($user->validation_status == 0)
                                                <span class="badge rounded-pill badge-warning">En attente</span>
                                            @elseif($user->validation_status == 1)
                                                <span class="badge rounded-pill badge-success">Validé le {{ date('d/m/Y', strtotime($user->validation_date)) }}</span>
                                            @else
                                                <span class="badge rounded-pill badge-danger">Refusé le {{ date('d/m/Y', strtotime($user->validation_date)) }}</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($user->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($user->created_at)) }} par {{ ucfirst($user->created_by) }}</td>
                                        <td>
                                        
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="{{ route('user.edit', $user->id) }}"><i class="fas fa-eye"></i> Détails</a>
                                                    @if($user->type == 1)
                                                        <a class="dropdown-item" href="{{ route('user.edit', $user->id) }}"><i class="fas fa-map-marked"></i> Divertissement</a>
                                                    @endif
                                                    <a class="dropdown-item" href="{{ route('user.edit', $user->id) }}"><i class="fas fa-edit"></i> Modifier</a>
                                                    <a class="dropdown-item" href="{{ route('user.delete', $user->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer ce compte ?')"><i class="fas fa-trash"></i> Supprimer</a>
                                                    <a class="dropdown-item" href="{{ route('user.status', $user->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de ce compte ?')">
                                                        @if($user->status == 0)
                                                            <i class="fas fa-check-circle"></i> Activer le compte
                                                        @else
                                                            <i class="fas fa-times-circle"></i> Désactiver le compte
                                                        @endif
                                                    </a>
                                                    
                                                    @if($user->validation_status == 0)
                                                        <a class="dropdown-item" href="{{ route('user.validation', ['id' => $user->id, 'status' => 1]) }}" onclick="return confirm('Ête-vous sûre de vouloir valider cette inscription ?')">
                                                            <i class="fas fa-check-circle"></i> Valider le compte
                                                        </a>
                                                    
                                                        <a class="dropdown-item" href="{{ route('user.validation', ['id' => $user->id, 'status' => 2]) }}" onclick="return confirm('Ête-vous sûre de vouloir refuser cette inscription ?')">
                                                            <i class="fas fa-times-circle"></i> Refuser le compte
                                                        </a>
                                                    @endif
                                                </div>
                                            </div>
                                        
                                        </td>
                                        {{-- <td>
                                            <a href="javascript:void(0);" class="btn btn-primary shadow btn-xs sharp   me-1"><i class="fa fa-pencil"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-danger shadow btn-xs sharp rounded-circle"><i class="fa fa-trash"></i></a>
                                        </td> --}}
                                    </tr>
                                @endforeach
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection