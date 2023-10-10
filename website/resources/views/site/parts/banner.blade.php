<!-- Slider -->
<div id="full-slider-wrapper">
    <div id="layerslider" style="width:100%;height:600px;">
        <!-- first slide -->
        @foreach($banners as $banner)
        <div class="ls-slide" data-ls="slidedelay: 5000; transition2d:5;">
            <img src="{{ $banner->image }}" class="ls-bg" alt="Slide background">
            <h3 class="ls-l slide_typo" style="top: 45%; left: 50%;" data-ls="offsetxin:0;durationin:2000;delayin:1000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;">{{ html_entity_decode(ucfirst($banner->title)) }}</h3>
            <p class="ls-l slide_typo_2" style="top:52%; left:50%;" data-ls="durationin:2000;delayin:1000;easingin:easeOutElastic;">{{ html_entity_decode(ucfirst($banner->subtitle))  }}</p>
            @if($banner->btn_first == 1)
            <a class="ls-l button_intro_2 outline" style="top:370px; left:50%;white-space: nowrap;" data-ls="durationin:2000;delayin:1400;easingin:easeOutElastic;" href='{{ $banner->btn_first_url }}'>{{ ucfirst($banner->btn_first_title) }}</a>
            @endif
        </div>
        @endforeach
    </div>
</div>
<!-- End layerslider -->