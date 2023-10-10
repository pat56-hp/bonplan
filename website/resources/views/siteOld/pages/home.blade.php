@extends('layouts.app')
@section('content')
    <!-- BANNIERE -->
    @include('site.parts.banner')
    <!-- BANNIERE -->

    <!-- DESCRIPTION INFO -->
    @include('site.parts.desc_info')
    <!-- DESCRIPTION INFO -->

    <!-- Categories des bons plans -->
    @include('site.parts.categories_plan')
    <!-- Categories des bons plans -->

    <!-- Les plans de la semaine -->
    @include('site.parts.plan_week')
    <!-- Les plans de la semaine -->

    <!-- Les Meilleurs endroits -->
    @include('site.parts.bestplan')
    <!-- Les Meilleurs endroits -->

    <!-- Les evenements -->
    @include('site.parts.event')
    <!-- Les evenements -->

    <!-- App download section -->
{{--    @include('site.parts.app_section')--}}
    <!-- App download section -->

    <!-- Counter -->
    @include('site.parts.counter')
    <!-- Counter -->

    <!-- Temoignages -->
    @include('site.parts.testimonial')
    <!-- Temoignages -->

    <!-- Actualites -->
    @include('site.parts.actualite')
    <!-- Actualites -->

@endsection