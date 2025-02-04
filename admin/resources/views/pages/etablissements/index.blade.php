@extends('layouts.new.template')
@section('content')

    @include('parts.breadcrumb', [
        'data' => [
            ['label' => 'tableau de bord', 'link' => route('dashboard')],
            ['label' => 'Etablissements']
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
                            <a href="{{ route('etablissements.create')}}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Recherche</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-3">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered zero-configuration">
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Libéllé</th>
                                    <th>Responsable</th>
                                    <th>Catégorie</th>
                                    <th>Contact</th>
                                    <th>Statut</th>
                                    <th>Date enreg.</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    @foreach($etablissements as $etablissement)
                                    <tr>
                                        <td>
                                            <img src="{{ $etablissement->image ?? asset('assets/images/image_not_found') }}" width="80px" alt="{{ ucfirst($etablissement->libelle) }}">
                                        </td>
                                        <td>{{ html_entity_decode(ucfirst($etablissement->libelle)) }}</td>
                                        <td>{{ ucfirst($etablissement->client_name) }}</td>
                                        <td>{{ html_entity_decode($etablissement->category_label) }}</td>
                                        <td>@if(!empty($etablissement->email)){{ $etablissement->email }} <br>@endif {{ $etablissement->phone }}</td>
                                        <td>
                                            @if($etablissement->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                            <br>
                                            @if($etablissement->validate == 0)
                                                <span class="badge rounded-pill badge-warning">En attente</span>
                                            @elseif($etablissement->validate == 1)
                                                <span class="badge rounded-pill badge-primary">Validé</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y à H:i', strtotime($etablissement->created_at)) }}</td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="{{ route('etablissements.show', $etablissement->id) }}"><i class="fas fa-eye"></i> Détails</a>
                                                    <a class="dropdown-item" href="{{ route('etablissements.edit', $etablissement->id) }}"><i class="fas fa-edit"></i> Modifier</a>
                                                    @if ($etablissement->validate == 0)
                                                    <a class="dropdown-item" href="{{ route('etablissements.validation', ['etablissement' => $etablissement->id, 'status' => 1]) }}" onclick="return confirm('Ête-vous sûre de vouloir valider cet établissement ?')">
                                                        <i class="fas fa-check-circle"></i> Valider
                                                    </a>
                                                
                                                    <a class="dropdown-item" href="{{ route('etablissements.validation', ['etablissement' => $etablissement->id, 'status' => 2]) }}" onclick="return confirm('Ête-vous sûre de vouloir refuser cet établissement ?')">
                                                        <i class="fas fa-times-circle"></i> Refuser
                                                    </a>
                                                    @endif
                                                    <a class="dropdown-item" href="{{ route('etablissements.status', $etablissement->id) }}" onclick="return confirm('Ête-vous sûre de vouloir {{$etablissement->status == 0 ? 'activer' : 'désactiver'}} cet établissement ?')">
                                                        @if ($etablissement->status == 0)
                                                        <i class="fas fa-toggle-on"></i> Activer
                                                        @else
                                                        <i class="fas fa-toggle-off"></i> Désactiver
                                                        @endif
                                                        
                                                    </a>
                                                    <a class="dropdown-item" href="{{ route('etablissements.delete', $etablissement->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer cet établissement ?')"><i class="fas fa-trash"></i> Supprimer</a>
                                                </div>
                                            </div>                                        
                                        </td>
                                        
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