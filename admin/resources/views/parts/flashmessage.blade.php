@if (Session::has('type'))
    <div class="alert {{ Session::get('type') }} alert-indicator-left indicator-info" role="alert">
        <div class="alert-content">
            <span class="alert-text">{{ Session::get('message') }}</span>
        </div>
    </div>
@endif

@if($errors->any())
    <div class="alert alert-danger alert-indicator-left indicator-info" role="alert">
        <div class="alert-content">
            <span class="alert-title">Oups, il y a des erreurs dans le formulaire!</span><br>
            @foreach($errors->all() as $error)
                <span class="alert-text">- {{$error}}</span><br>
            @endforeach
        </div>
    </div>
@endif