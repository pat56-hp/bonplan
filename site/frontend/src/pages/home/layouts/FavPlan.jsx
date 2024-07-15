import React from 'react'

export default function FavPlan() {
  return (
    <section className="restaurant-list section-b-space banner-section ratio3_2">
        <div className="container">
            <div className="title restaurant-title w-border pb-0">
                <h2>Les meilleurs plans</h2>
                <div className="loader-line"></div>
                <ul className="nav nav-pills restaurant-tab tab-style2 w-100 border-0 m-0" id="Tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pill-delivery-tab" data-bs-toggle="pill"
                            data-bs-target="#delivery-tab">
                            Fast Delivery
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pill-rating-tab" data-bs-toggle="pill"
                            data-bs-target="#rating-tab">
                            Rating
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pill-veg-tab" data-bs-toggle="pill" data-bs-target="#veg-tab">
                            Pure Veg
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pill-cost-tab" data-bs-toggle="pill" data-bs-target="#cost-tab">
                            Cost
                        </button>
                    </li>
                </ul>
            </div>
            <div className="tab-content restaurant-content" id="TabContent">
                <div className="tab-pane fade show active" id="delivery-tab">
                    <div className="row g-lg-4 g-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="/assets/images/product/vp-9.png"
                                            alt="vp1" />
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New Jsercy</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="/assets/images/svg/medal-fill.svg" alt="medal" />
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="/assets/images/product/vp-10.png" alt="vp-2" />
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">California</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="/assets/images/product/vp-11.png"
                                            alt="vp3" />
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i className="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="/assets/images/product/vp-12.png"
                                            alt="vp-4" />
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Dallas</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="/assets/images/product/vp-13.png"
                                            alt="vp-5" />
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Seattle</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="/assets/images/product/vp-14.png"
                                            alt="vp16" />
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Atlanta</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge exclusive-badge">
                                    <img className="img-fluid badge" src="/assets/images/svg/crown.svg" alt="medal" />
                                    <h6>Best seller</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="/assets/images/product/vp-15.png" alt="vp-7"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Chicago</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge new-badge">
                                    <img className="img-fluid badge" src="/assets/images/svg/star-white.svg" alt="medal"/>
                                    <h6>Newest</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="/assets/images/product/vp-16.png" alt="vp-8"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i className="ri-time-fill icon"></i> 12 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="rating-tab">
                    <div className="row g-lg-4 g-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="/assets/images/product/vp-1.png"
                                            alt="vp1"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New Jsercy</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/star-white.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-2.png" alt="vp-2"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">California</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-3.png"
                                            alt="vp3"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i className="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-4.png"
                                            alt="vp-4"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Dallas</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-5.png"
                                            alt="vp-5"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Seattle</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-6.png"
                                            alt="vp16"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Atlanta</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge new-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/star-white.svg" alt="medal"/>
                                    <h6>Newest</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-7.png" alt="vp-7"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Chicago</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge exclusive-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/crown.svg" alt="medal"/>
                                    <h6>Best seller</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-8.png" alt="vp-8"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i className="ri-time-fill icon"></i> 12 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="veg-tab">
                    <div className="row g-lg-4 g-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-1.png"
                                            alt="vp1"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New Jsercy</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/medal-fill.svg" alt="medal" />
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-2.png" alt="vp-2"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">California</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-3.png"
                                            alt="vp3"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i className="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-4.png"
                                            alt="vp-4"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Dallas</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-5.png"
                                            alt="vp-5"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Seattle</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-6.png"
                                            alt="vp16"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Atlanta</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-7.png" alt="vp-7"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Chicago</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-8.png" alt="vp-8"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i className="ri-time-fill icon"></i> 12 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="cost-tab">
                    <div className="row g-lg-4 g-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-1.png"
                                            alt="vp1"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Poultry Palace</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.9
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New Jsercy</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-2.png" alt="vp-2"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Ribeye Junction</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">California</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 10 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-3.png"
                                            alt="vp3"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">
                                                The Grill Master's Cafe
                                            </h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>4.3
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 5 km</li>
                                            <li><i className="ri-time-fill icon"></i> 40 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-4.png"
                                            alt="vp-4"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Cozy Cuppa Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        cheesecake, waffles, Cakes,...
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Dallas</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 30 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-5.png"
                                            alt="vp-5"/>
                                    </a>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Mocha Magic Cafe</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Seattle</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1 km</li>
                                            <li><i className="ri-time-fill icon"></i> 8 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="product-img-top w-100 bg-img" src="assets/images/product/vp-6.png"
                                            alt="vp16"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Latte Lounge</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.6
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken fingers, Chicken goujons,....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Atlanta</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 3 km</li>
                                            <li><i className="ri-time-fill icon"></i> 25 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-7.png" alt="vp-7"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">The Burger Barn</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.8
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Burger, Garlic Bread, Sandwich....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">Chicago</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 2.4 km</li>
                                            <li><i className="ri-time-fill icon"></i> 20 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="vertical-product-box">
                                <div className="seller-badge">
                                    <img className="img-fluid badge" src="assets/images/svg/medal-fill.svg" alt="medal"/>
                                    <h6>Exclusive</h6>
                                </div>
                                <div className="vertical-product-box-img">
                                    <a href="menu-listing.html">
                                        <img className="vertical-product-img-top w-100 bg-img"
                                            src="assets/images/product/vp-8.png" alt="vp-8"/>
                                    </a>
                                    <div className="offers">
                                        <h6>upto $2</h6>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-product-body">
                                    <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                                        <a href="menu-listing.html">
                                            <h4 className="vertical-product-title">Wing Master</h4>
                                        </a>
                                        <h6 className="rating-star">
                                            <span className="star"><i className="ri-star-s-fill"></i></span>3.2
                                        </h6>
                                    </div>
                                    <h5 className="product-items">
                                        Chicken quesadilla, avocado....
                                    </h5>
                                    <div
                                        className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                        <h5 className="place">New York</h5>
                                        <ul className="distance">
                                            <li><i className="ri-map-pin-fill icon"></i> 1.8 km</li>
                                            <li><i className="ri-time-fill icon"></i> 12 min</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
