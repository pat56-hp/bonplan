@extends('layouts.app')
@section('content')
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="page-description page-description-tabbed">
                        <div class="d-flex justify-content-between">
                            <h1>{{ $title}}</h1>
                            <div class="buttons">
                                @include('pages.events.categories.buttons')
                            </div>  
                        </div>
                        <p>{{ $sub_title }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table id="datatable1" class="display" style="width:100%">
                                <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Nb évènements</th>
                                    <th>Statut</th>
                                    <th>Création</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($categories as $categorie)
                                    <tr>
                                        <td>{{ ucfirst(html_entity_decode($categorie->title)) }}</td>
                                        <td>{{ $categorie->events->count() }}</td>
                                        <td>
                                            @if($categorie->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($categorie->created_at)) }} par {{ ucfirst($categorie->created_by) }}</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                </button>
                                                <ul class="dropdown-menu large-items-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="{{ route('events.categorie.event', $categorie->id) }}"><i class="fas fa-map-marked"></i> Evènements</a></li>
                                                    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalEdit-{{$categorie->id}}" href="#"><i class="fas fa-edit"></i> Modifier</a></li>
                                                    <li><a class="dropdown-item" href="{{ route('events.categorie.delete', $categorie->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer cette categorie ?')"><i class="fas fa-trash"></i> Supprimer</a></li>
                                                    <li>
                                                        <a class="dropdown-item" href="{{ route('events.categorie.status', $categorie->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de cette categorie ?')">
                                                            @if($categorie->status == 0)
                                                                <i class="fas fa-check-circle"></i> Activer
                                                            @else
                                                                <i class="fas fa-times-circle"></i> Désactiver
                                                            @endif
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        @include('pages.events.categories.edit')
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Titre</th>
                                    <th>Nb évènements</th>
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