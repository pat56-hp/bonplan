@extends('layouts.new.template')
@push('css')
    <style>
        .invoice-info p {
            font-size: 14px !important;
        }

        .table td{
            line-height: 25px
        }
    </style>
@endpush
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
                            <a href="{{ route('bonplan.index')}}" class="btn btn-primary btn-rounded p-2"><i class="fas fa-list"></i> Liste endroits</a>
                            <a href="{{ route('bonplan.edit', $bonplan->id)}}" class="btn btn-dark btn-rounded p-2"><i class="fas fa-edit"></i> Modifier</a>
                        </div>
                    </div>
                    <p>{{ $sub_title }}</p>
                    <div class="card-content mt-5">
                        <div class="custom-tab-1">
                            <div class="p-t-15">
                                <div id="" class="effect2">
                                    <div id="invoice-top">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="invoice-info">
                                                    <h2>{{ html_entity_decode(ucfirst($bonplan->name)) }}</h2>
                                                    <p><i class="fa fa-envelope"></i> {{ $bonplan->email }} <br>
                                                        <span class="badge rounded-pill badge-info">
                                                                    <b><i class="fa fa-phone"></i> {{ $bonplan->pays->phonecode ?? '' }} {{ $bonplan->phone }}</b>
                                                                </span> <br>
                                                        @if($bonplan->status == 0)
                                                            <span class="badge rounded-pill badge-danger">Inactif</span>
                                                        @else
                                                            <span class="badge rounded-pill badge-success">Actif</span>
                                                        @endif
                                                        @if($bonplan->deals->where('status', 1)->first())
                                                            <span class="badge rounded-pill badge-success">En deal</span>
                                                        @else
                                                            <span class="badge rounded-pill badge-danger">Pas en deal</span>
                                                        @endif
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="invoice-info">
                                                    <h2>Adresse</h2>
                                                    <p>
                                                        <i class="fas fa-map-marker-alt"></i> {{ ucfirst($bonplan->ville) }}, {{ ucfirst($bonplan->commune) }}
                                                        <br>{{ html_entity_decode(ucfirst($bonplan->adresse)) }}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="invoice-info">
                                                    <h2>Responsable</h2>
                                                    <p>
                                                        {{ ucfirst($bonplan->user->name) ?? '' }} {{ ucfirst($bonplan->user->lastname) ?? '' }}
                                                        <br>
                                                        <span class="badge rounded-pill badge-info">
                                                                    <b><i class="fa fa-phone"></i> {{ $bonplan->user->pays->phonecode ?? '' }} {{ $bonplan->user->phone ?? 'Aucun' }}</b>
                                                                </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="invoice-info">
                                                    <h2>Commodités</h2>
                                                    <p>
                                                        @forelse($bonplan->commodites as $commodite)
                                                            <span class="badge rounded-pill badge-primary">{{ html_entity_decode($commodite->libelle) }}</span>
                                                        @empty
                                                            <span class="badge rounded-pill badge-warning">Aucune commodité</span>
                                                        @endforelse
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="invoice-info">
                                                    <h2>Description</h2>
                                                    <p>
                                                        {{ html_entity_decode($bonplan->description) }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--End Invoice Mid-->
                                    <div id="invoice-bot">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div id="invoice-table" class="border-0">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <tr class="tabletitle">
                                                                <td class="table-item">
                                                                    <h2>Horaires</h2>
                                                                </td>
                                                                <td class="Hours">
                                                                    <h2>Ouverture</h2>
                                                                </td>
                                                                <td class="Rate">
                                                                    <h2>Fermeture</h2>
                                                                </td>
                                                            </tr>

                                                            @forelse($bonplan->horaires as $horaire)
                                                                <tr class="service">
                                                                    <td class="tableitem">
                                                                        <p class="itemtext">{{ html_entity_decode(ucfirst($horaire->jour->libelle) ?? 'Aucun') }}</p>
                                                                    </td>
                                                                    <td class="tableitem">
                                                                        <p class="itemtext text-center">{{ date('H:m', strtotime($horaire->ouverture)) }}</p>
                                                                    </td>
                                                                    <td class="tableitem">
                                                                        <p class="itemtext text-center">{{ date('H:m', strtotime($horaire->fermeture)) }}</p>
                                                                    </td>
                                                                </tr>
                                                            @empty
                                                                <tr class="service">
                                                                    <td class="tableitem" colspan="3">
                                                                        <p class="itemtext text-center">Aucun élément disponible</p>
                                                                    </td>
                                                                </tr>
                                                            @endforelse
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div id="invoice-table" class="border-0">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <tr class="tabletitle">
                                                                <td class="table-item">
                                                                    <h2>SPECIALITES / MENU</h2>
                                                                </td>
                                                                <td class="Hours">
                                                                    <h2>Prix</h2>
                                                                </td>
                                                                <td class="Rate">
                                                                    <h2>Image</h2>
                                                                </td>
                                                            </tr>
                                                            @forelse($bonplan->offers as $offer)
                                                                <tr class="service">
                                                                    <td class="tableitem">
                                                                        <p class="itemtext">{{ html_entity_decode($offer->name) }}</p>
                                                                    </td>
                                                                    <td class="tableitem">
                                                                        <p class="itemtext">{{ number_format($offer->price, 0, ' ', ' ') }}</p>
                                                                    </td>
                                                                    <td class="tableitem">
                                                                        <p class="itemtext">
                                                                            <img src="{{ $offer->image->name ?? '' }}" width="80px" alt="{{ html_entity_decode($offer->name) }}">
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            @empty
                                                                <tr class="service">
                                                                    <td class="tableitem" colspan="3">
                                                                        <p class="itemtext text-center">Aucun élément disponible</p>
                                                                    </td>
                                                                </tr>
                                                            @endforelse
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End InvoiceBot-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
