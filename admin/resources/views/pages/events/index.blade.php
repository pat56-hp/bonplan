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
                                @include('pages.events.buttons')
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
                                    <th>Image</th>
                                    <th>Titre</th>
                                    <th>Catégorie</th>
                                    <th>Organisateur</th>
                                    <th>Pays</th>
                                    <th>Statut</th>
                                    <th>Création</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($events as $event)
                                    <tr>
                                        <td>
                                            <img src="{{ $event->photo->name ?? asset('assets/images/image_not_found') }}" width="100px" alt="{{ ucfirst($event->title) }}">
                                        </td>
                                        <td>{{ ucfirst($event->title) }}</td>
                                        <td>
                                            <span class="badge rounded-pill badge-warning">
                                                {{ $event->categorie->title ?? 'Aucune categorie' }}
                                            </span>
                                        </td>
                                        <td>{{ ucfirst($event->organisateur) }}</td>
                                        <td>{{ ucfirst($event->pays->nicename) ?? 'Aucun pays' }}</td>
                                        <td>
                                            @if($event->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif

                                            @if($event->validated == 0)
                                                <span class="badge rounded-pill badge-warning">En attente</span>
                                            @elseif($event->validated == 1)
                                                <span class="badge rounded-pill badge-primary">Validé</span>
                                            @else
                                                <span class="badge rounded-pill badge-secondary">Refusé</span>
                                            @endif

                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($event->created_at)) }} par {{ ucfirst($event->created_by) }}</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                </button>
                                                <ul class="dropdown-menu large-items-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" href="#" target="_blank"><i class="fas fa-eye"></i> Details</a></li>
                                                    <li><a class="dropdown-item" href="{{ route('events.edit', $event->id) }}"><i class="fas fa-edit"></i> Modifier</a></li>
                                                    <li><a class="dropdown-item" href="{{ route('events.delete', $event->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer cet évènement ?')"><i class="fas fa-trash"></i> Supprimer</a></li>
                                                    <li>
                                                        <a class="dropdown-item" href="{{ route('events.index') }}?status=change&event={{ $event->id }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de cet évènement ?')">
                                                            @if($event->status == 0)
                                                                <i class="fas fa-check-circle"></i> Activer
                                                            @else
                                                                <i class="fas fa-times-circle"></i> Désactiver
                                                            @endif
                                                        </a>
                                                    </li>
                                                    @if($event->validated == 0)
                                                        <li>
                                                            <a class="dropdown-item" href="{{ route('events.index') }}?validation=1&event={{ $event->id }}" onclick="return confirm('Ête-vous sûre de vouloir valider cet évènement ?')">
                                                                <i class="fas fa-check-circle"></i> Valider
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="{{ route('events.index') }}?validation=2&event={{ $event->id }}" onclick="return confirm('Ête-vous sûre de vouloir refuser cet évènement ?')">
                                                                <i class="fas fa-times-circle"></i> Refuser
                                                            </a>
                                                        </li>
                                                    @endif
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <th>Image</th>
                                <th>Titre</th>
                                <th>Catégorie</th>
                                <th>Organisateur</th>
                                <th>Pays</th>
                                <th>Statut</th>
                                <th>Création</th>
                                <th>Actions</th>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection