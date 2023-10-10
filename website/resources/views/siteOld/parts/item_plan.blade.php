<div class="wsus__menu_item">
    <div class="wsus__menu_item_img">
        <a href="{{ route('plan.show') }}">
            <img src="uploads/custom-images/hyderabadi-biryani-2023-03-05-01-14-59-9689.png" alt="menu" class="img-fluid w-100">
        </a>
        <a class="category" href="#">Restaurant</a>
    </div>
    <div class="wsus__menu_item_text">
        <p class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <span>1</span>
        </p>
        <a class="title" href="{{ route('plan.show') }}">Hyderabadi Biryani</a>
        <a href="#"><i class="fas fa-map"></i> Cocody Angré terminus 81 82</a>
        <a href="#" class="mb-3 mt-1"><i class="fas fa-phone"></i> (225) 0708090102</a>
{{--        <h5 class="price">$130 <del>$150</del> </h5>--}}
        <ul class="d-flex flex-wrap justify-content-center">
            <li><a href="javascript:;" title="Faire une réservation"><i class="fas fa-shopping-basket"></i></a></li>
            <li><a href="javascript:;" title="Ajouter aux favoris" onclick="before_auth_wishlist(1)"><i class="fa fa-heart"></i></a></li>
            <li><a href="{{ route('plan.show') }}" title="Voir les détails"><i class="far fa-eye"></i></a></li>
        </ul>
    </div>
</div>