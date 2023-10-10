@include('layouts/new/head')
@include('layouts/new/header')
@include('layouts/new/sidebar')
<div class="content-body">
    <div class="container">
        @yield('content')
    </div>
</div>
@include('layouts/new/footer')