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
                                @include('pages.commune.buttons')
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
                                    <th>Libéllé</th>
                                    <th>Statut</th>
                                    <th>Création</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($communes as $commune)
                                    <tr>
                                        <td>{{ ucfirst($commune->libelle) }}</td>
                                        <td>
                                            @if($commune->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($commune->created_at)) }} par {{ ucfirst($commune->created_by) }}</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                </button>
                                                <ul class="dropdown-menu large-items-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalEdit-{{$commune->id}}" href="#"><i class="fas fa-edit"></i> Modifier</a></li>
                                                    <li><a class="dropdown-item" href="{{ route('commune.delete', $commune->id) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer cette commune ?')"><i class="fas fa-trash"></i> Supprimer</a></li>
                                                    <li>
                                                        <a class="dropdown-item" href="{{ route('commune.status', $commune->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de cette commune ?')">
                                                            @if($commune->status == 0)
                                                                <i class="fas fa-check-circle"></i> Activer
                                                            @else
                                                                <i class="fas fa-times-circle"></i> Désactiver
                                                            @endif
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        @include('pages.commune.edit')
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Libéllé</th>
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