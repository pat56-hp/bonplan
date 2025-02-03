@extends('layouts.new.template')
@section('content')
    @include('parts.breadcrumb', [
        'data' => [
            ['label' => 'tableau de bord', 'link' => route('dashboard')],
            ['label' => 'Inscription clients']
        ]
    ])
    <!-- row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h1>{{ $title}}</h1>
                        <div class="buttons">
                            <a href="{{ route('clients.create') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter un compte</a>
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
                                @foreach($clients as $client)
                                    <tr>
                                        <td>
                                            <b>{{ $client->type == 0 ? 'Client' : 'Responsable' }}</b>
                                            @if($client->image)
                                                <img src="{{ $client->image->name ?? '' }}" alt="Bon plan profile" width="80px">
                                            @endif
                                        </td>
                                        <td>{{ ucfirst($client->name).' '.ucfirst($client->lastname) }}</td>
                                        <td>
                                            <i class="fa fa-envelope"></i> {{ $client->email }} <br>
                                            <i class="fa fa-phone"></i> {{ $client->phone ?? 'Aucun contact' }}
                                        </td>
                                        <td>
                                            @if($client->validate == 0)
                                                <span class="badge rounded-pill badge-warning">En attente</span>
                                            @elseif($client->validate == 1)
                                                <span class="badge rounded-pill badge-success">Validé le {{ date('d/m/Y', strtotime($client->validation_date)) }}</span>
                                            @else
                                                <span class="badge rounded-pill badge-danger">Refusé le {{ date('d/m/Y', strtotime($client->validation_date)) }}</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($client->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($client->created_at)) }}</td>
                                        <td>
                                        
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="{{ route('clients.edit', $client->id) }}"><i class="fas fa-eye"></i> Détails</a>
                                                    <a class="dropdown-item" href="{{ route('clients.edit', $client->id) }}"><i class="fas fa-edit"></i> Modifier</a>
                                                    <a class="dropdown-item" href="{{ route('clients.delete', $client->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer ce compte ?')"><i class="fas fa-trash"></i> Supprimer</a>
                                                    <a class="dropdown-item" href="{{ route('clients.status', $client->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de ce compte ?')">
                                                        @if($client->status == 0)
                                                            <i class="fas fa-check-circle"></i> Activer le compte
                                                        @else
                                                            <i class="fas fa-times-circle"></i> Désactiver le compte
                                                        @endif
                                                    </a>
                                                    
                                                    @if($client->validate == 0)
                                                        <a class="dropdown-item" href="{{ route('clients.validation', ['id' => $client->id, 'status' => 1]) }}" onclick="return confirm('Ête-vous sûre de vouloir valider cette inscription ?')">
                                                            <i class="fas fa-check-circle"></i> Valider le compte
                                                        </a>
                                                    
                                                        <a class="dropdown-item" href="{{ route('clients.validation', ['id' => $client->id, 'status' => 2]) }}" onclick="return confirm('Ête-vous sûre de vouloir refuser cette inscription ?')">
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