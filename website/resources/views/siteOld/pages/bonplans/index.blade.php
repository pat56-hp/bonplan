@extends('layouts.app')
@section('content')
    @include('site.parts.breadcrumb')

    <section class="wsus__blog_details mt_120 xs_mt_90 mb_100 xs_mb_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4">
                    <div id="sticky_sidebar">
                        <div class="wsus__blog_search blog_sidebar m-0 wow fadeInUp" data-wow-duration="1s">
                            <h3>Recherche</h3>
                            <form class="wsus__search_menu_form" action="https://unifood.websolutionus.com/products">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12">
                                        <input type="text" placeholder="Mot clé" name="search">
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <select id="" class="mt-1 mb-1 select_js3" name="commune">
                                            <option value="">Selectionnez une commune</option>
                                            <option value="burger">Abobo</option>
                                            <option value="chicken">Yopougon</option>
                                            <option value="pizza">Cocody</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <select id="" class="mt-1 mb-1 select_js3" name="category">
                                            <option value="">Selectionnez une catégorie</option>
                                            <option value="burger">Restaurant</option>
                                            <option value="chicken">Bar</option>
                                            <option value="pizza">Hôtel</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <select id="" class="mt-1 mb-1 select_js3" name="specialite">
                                            <option value="">Selectionnez une spécialité</option>
                                            <option value="burger">Restaurant</option>
                                            <option value="chicken">Bar</option>
                                            <option value="pizza">Hôtel</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <div class="details_extra_item  mb-0">
                                            <div class="form-check  mb-0">
                                                <input name="review[]" class="form-check-input check_optional_item" type="checkbox" value="4" id="review4">
                                                <label class="form-check-label" for="optional-item-0">
                                                    <span class="rating">
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="form-check  mb-0">
                                                <input name="review[]" class="form-check-input check_optional_item" type="checkbox" value="3" id="review3">
                                                <label class="form-check-label" for="optional-item-0">
                                                    <span class="rating">
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="form-check  mb-0">
                                                <input name="review[]" class="form-check-input check_optional_item" type="checkbox" value="2" id="review2">
                                                <label class="form-check-label" for="optional-item-0">
                                                    <span class="rating">
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="form-check  mb-0">
                                                <input name="review[]" class="form-check-input check_optional_item" type="checkbox" value="1" id="review1">
                                                <label class="form-check-label" for="optional-item-0">
                                                    <span class="rating">
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="form-check  mb-0">
                                                <input name="review[]" class="form-check-input check_optional_item" type="checkbox" value="0" id="review0">
                                                <label class="form-check-label" for="optional-item-0">
                                                    <span class="rating float-end">
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-12">
                                        <button type="submit" class="common_btn">Lancer la recherche</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="wsus__blog_categori blog_sidebar wow fadeInUp" data-wow-duration="1s">
                            <h3>Categories</h3>
                            <ul>
                                <li><a href="#">Chicken <span>2</span></a></li>
                                <li><a href="#">Fresh Food <span>1</span></a></li>
                                <li><a href="#">Spicy <span>2</span></a></li>
                                <li><a href="#">Grill <span>1</span></a></li>
                                <li><a href="#">Kabab <span>0</span></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="col-xl-8 col-lg-8">
                    <div class="container" data-wow-duration="1s">
                        <div class="row">
                            @for($i = 0; $i < 10; $i++)
                                <div class="col-xl-4 wow plan_week" data-wow-duration="1s">
                                    @include('site.parts.item_plan')
                                </div>
                                <div class="col-xl-4 wow" data-wow-duration="1s">
                                    @include('site.parts.item_plan')
                                </div>
                                <div class="col-xl-4 wow plan_week" data-wow-duration="1s">
                                    @include('site.parts.item_plan')
                                </div>
                            @endfor
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection