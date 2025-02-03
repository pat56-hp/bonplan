@include('layouts.head')
@include('layouts.header')
<div class="app-container">
    @include('parts.topbar')
    <div class="app-content">
        <div class="m-4">
            @include('parts.flashmessage')
        </div>
        @yield('content')
    </div>
</div>
@include('layouts.footer')