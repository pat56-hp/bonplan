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
                <li class="breadcrumb-item active">Utilisateurs</li>
            
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
                            <a href="{{ route('admin.create') }}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-plus-circle"></i> Ajouter un utilisateur</a>
                            <a href="#" class="btn btn-dark btn-rounded p-2"><i class="fas fa-search"></i> Recherche</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-3">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered zero-configuration">
                                <thead>
                                <tr>
                                    <th>Nom & prénom(s)</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Adresse</th>
                                    <th>Rôle</th>
                                    <th>Statut</th>
                                    <th>Création</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    @foreach($admins as $admin)
                                    <tr>
                                        <td>{{ ucfirst($admin->name).' '.ucfirst($admin->lastname) }}</td>
                                    <td>{{ $admin->email }}</td>
                                    <td>{{ $admin->phone ?? 'Aucun contact' }}</td>
                                    <td>{{ ucfirst($admin->adresse) }}</td>
                                    <td>{{ $admin->role }}</td>
                                    <td>
                                        @if($admin->status == 0)
                                        <span class="badge rounded-pill badge-danger">Inactif</span>
                                        @else
                                        <span class="badge rounded-pill badge-success">Actif</span>
                                        @endif
                                    </td>
                                    <td>Le {{ date('d/m/Y', strtotime($admin->created_at)) }} par {{ ucfirst($admin->created_by) }}</td>
                                    <td>
                                        
                                        <div class="btn-group" role="group">
                                            <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="{{ route('admin.edit', $admin->id) }}"><i class="fas fa-edit"></i> Modifier</a>
                                                <a class="dropdown-item" href="{{ route('admin.delete', $admin->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer ce compte administrateur ?')"><i class="fas fa-trash"></i> Supprimer</a>
                                                <a class="dropdown-item" href="{{ route('admin.editStatus', $admin->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de ce compte administrateur ?')">
                                                    @if($admin->status == 0)
                                                        <i class="fas fa-check-circle"></i> Activer le compte
                                                    @else
                                                        <i class="fas fa-times-circle"></i> Désactiver le compte
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
                                        <th>Nom & prénom(s)</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Adresse</th>
                                        <th>Rôle</th>
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