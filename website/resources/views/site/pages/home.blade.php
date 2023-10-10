@extends('layouts.template')
@section('content')
    <main>
        @include('site.parts.banner')

        @include('site.parts.popular')
        <div class="white_bg">
            <div class="container margin_60">
            @include('site.parts.category')
            <!-- End row -->
            @include('site.parts.pub_banner')
            @include('site.parts.items')
            </div>
        </div>
        <!-- End section -->
        <div class="container margin_60">
            @include('site.parts.about')
        </div>
        <!-- End container -->
    </main>
@endsection