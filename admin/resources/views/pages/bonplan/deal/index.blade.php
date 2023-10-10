@extends('layouts.app')
@section('content')
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="page-description page-description-tabbed">
                        <div class="d-flex justify-content-between">
                            <h1>{{ $title}}</h1>
{{--                            <div class="buttons">--}}
{{--                                @include('pages.bonplan.buttons')--}}
{{--                            </div>--}}
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
                                    <th>Libéllé</th>
                                    <th>Responsable</th>
                                    <th>Catégorie</th>
                                    <th>Adresse</th>
                                    <th>Contactd</th>
                                    <th>Statut</th>
                                    <th>Création</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($deals as $deal)
                                    <tr>
                                        <td>
                                            <a href="#" class=""><img src="{{ $deal->endroit->photo->name ?? asset('assets/images/image_not_found') }}" width="100px" alt="{{ ucfirst($deal->endroit->name) }}"></a>
                                        </td>
                                        <td><a href="#" class=""><i class="fas fa-eye"></i> {{ ucfirst($deal->endroit->name) }}</a></td>
                                        <td>{{ ucfirst($deal->endroit->user->name) ?? '' }} {{ ucfirst($deal->endroit->user->lastname) ?? '' }}</td>
                                        <td>{{ $deal->endroit->categorie->libelle ?? 'Aucune categorie' }}</td>
                                        <td>
                                            {{ $deal->endroit->commune->libelle ?? 'Aucune commune' }} <br>
                                            @if($deal->endroit->adresse), {{ $deal->endroit->adresse }} @endif
                                        </td>
                                        <td>{{ $deal->endroit->email }} <br> {{ $deal->endroit->pays->phonecode ?? '' }} {{ $deal->endroit->phone }}</td>
                                        <td>
                                            @if($deal->status == 0)
                                                <span class="badge rounded-pill badge-danger">Inactif</span>
                                            @else
                                                <span class="badge rounded-pill badge-success">Actif</span>
                                            @endif
                                        </td>
                                        <td>Le {{ date('d/m/Y', strtotime($deal->endroit->created_at)) }} par {{ ucfirst($deal->endroit->created_by) }}</td>
                                        <td>
                                            <div class="dropdown">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" icon-cog-5"></i></button>
                                                <ul class="dropdown-menu large-items-menu" aria-labelledby="dropdownMenuButton1">
{{--                                                    <li><a class="dropdown-item" href="{{ route('bonplan.offre', $deal->endroit->id) }}"><i class="fas fa-eye"></i> Offres</a></li>--}}
{{--                                                    <li><a class="dropdown-item" href="{{ route('bonplan.edit', $deal->endroit->id) }}"><i class="fas fa-edit"></i> Modifier</a></li>--}}
                                                    <li><a class="dropdown-item" href="{{ route('deal.destroy', ['id' => $deal->id]) }}" onclick="return confirm('Ête-vous sûre de vouloir supprimer ce deal ?')"><i class="fas fa-trash"></i> Supprimer</a></li>
                                                    <li>
                                                        <a class="dropdown-item" href="{{ route('deal.status', $deal->id) }}" onclick="return confirm('Ête-vous sûre de vouloir changer le statut de ce deal?')">
                                                            @if($deal->status == 0)
                                                                <i class="fas fa-check-circle"></i> Activer
                                                            @else
                                                                <i class="fas fa-times-circle"></i> Désactiver
                                                            @endif
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Image</th>
                                    <th>Libéllé</th>
                                    <th>Responsable</th>
                                    <th>Catégorie</th>
                                    <th>Adresse</th>
                                    <th>Contactd</th>
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