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
                            <a href="{{ route('bonplan.create')}}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter un endroit</a>
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
                                    <th>Deal</th>
                                    <th>Date enreg.</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    @foreach($bonplans as $bonplan)
                                    <tr>
                                        <td>
                                            <img src="{{ $bonplan->photo() ?? asset('assets/images/image_not_found') }}" width="80px" alt="{{ ucfirst($bonplan->name) }}">
                                        </td>
                                        <td>{{ html_entity_decode(ucfirst($bonplan->name)) }}</td>
                                        <td>{{ ucfirst($bonplan->user->name) ?? '' }} {{ ucfirst($bonplan->user->lastname) ?? '' }}</td>
                                        <td>{{ html_entity_decode($bonplan->categorie->libelle) ?? 'Aucune categorie' }}</td>
                                        <td>{{ $bonplan->email }} <br> {{ $bonplan->pays->phonecode ?? '' }} {{ $bonplan->phone }}</td>
                                        <td>
                                            @if($bonplan->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if($bonplan->deals->where('status', 1)->first())
                                                <span class="badge rounded-pill badge-success">Oui</span>
                                            @else
                                                <span class="badge rounded-pill badge-danger">Non</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($bonplan->created_at)) }} par {{ ucfirst($bonplan->created_by) }}</td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="{{ route('bonplan.show', $bonplan->id) }}"><i class="fas fa-eye"></i> Détails</a>
                                                    <a class="dropdown-item" href="{{ route('bonplan.offre', $bonplan->id) }}"><i class="fas fa-eye"></i> Spécialités</a>
                                                    <a class="dropdown-item" href="{{ route('bonplan.edit', $bonplan->id) }}"><i class="fas fa-edit"></i> Modifier</a>
                                                    <a class="dropdown-item" href="{{ route('bonplan.delete', $bonplan->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer ce plan de divertissement ?')"><i class="fas fa-trash"></i> Supprimer</a>
                                                
                                                    @if(!$bonplan->deals->where('status', 1)->first())
                                                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalAdd-{{$bonplan->id}}">
                                                            <i class="fas fa-plus-circle"></i> Ajouter en deal
                                                        </a>
                                                    @endif
                                                
                                                </div>
                                            </div>                                        
                                        </td>
                                        
                                    </tr>
                                    @include('pages.bonplan.deal.modal')
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