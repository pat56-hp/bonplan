<div class="row page-titles">
    <div class="col p-0">
        <h4>Hello, <span>{{ ucfirst(auth()->user()->name).' '.ucfirst(auth()->user()->lastname) }}</span></h4>
    </div>
    <div class="col p-0">
        <ol class="breadcrumb">
            @foreach($data as $key => $item)
            <li class="breadcrumb-item {{ isset($item['link']) ? 'active' : '' }}">
                @if(isset($item['link']))
                <a href="{{ $item['link'] }}">{{$item['label']}}</a>
                @else
                {{$item['label']}}
                @endif
            </li>
            @endforeach
        </ol>
    </div>
</div>
@include('parts.flashmessage')