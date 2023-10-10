<!--=============================
        Evènements
    ==============================-->

<section class="wsus__menu mt_95 xs_mt_65 wsus__add_slider mt_100 xs_mt_70">
    <span class="banner_shape_1">
        <img src="uploads/website-images/menu_left_image-2022-12-15-02-46-22-9229.png" alt="shape" class="img-fluid w-100">
    </span>
    <span class="banner_shape_2">
        <img src="uploads/website-images/menu_right_image-2022-12-15-02-46-42-1965.png" alt="shape" class="img-fluid w-100">
    </span>
    <div class="container">

        <div class="row wow fadeInUp" data-wow-duration="1s">
            <div class="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
                <div class="wsus__section_heading mb_45">
                    <h4>Evènements</h4>
                    <h2>Les évènements à venir</h2>
                    <span>
                        <img src="user/images/heading_shapes.png" alt="shapes" class="img-fluid w-100">
                    </span>
                    <p>Retrouvez les évènements les plus attendus du moment pour ne rien rater.</p>
                </div>
            </div>
        </div>
        <div class="row add_slider wow fadeInUp" data-wow-duration="1s">
            <div class="col-xl-4">
                @include('site.parts.item_event')
            </div>
            <div class="col-xl-4">
                @include('site.parts.item_event')
            </div>
            <div class="col-xl-4">
                @include('site.parts.item_event')
            </div>
            <div class="col-xl-4">
                @include('site.parts.item_event')
            </div>
        </div>
    </div>
</section>
<!--=============================
Evènements END
==============================-->