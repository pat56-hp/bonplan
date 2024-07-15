import React from 'react'

export default function Popular() {
  return (
    <section className="popular-restaurant section-b-space ratio3_2 overflow-hidden">
        <img className="img-fluid item-5" src="assets/images/svg/item5.svg" alt="item-5" />
        <div className="container">
            <div className="title">
                <h2>Les plans populaires</h2>
                <div className="loader-line"></div>
                <div className="sub-title">
                    <p>Explorez nos plans populaires, choisis par une majorité</p>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                            <h5 className="product-items">Chicken quesadilla, avocado....</h5>
                            <div
                                className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                                <h5 className="place">New</h5>
                                <ul className="distance">
                                    <li><i className="ri-map-pin-fill icon"></i> 3.2 km</li>
                                    <li><i className="ri-time-fill icon"></i> 25 min</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="vertical-product-box">
                        <div className="seller-badge new-badge">
                            <img className="img-fluid badge" src="assets/images/svg/star-white.svg" alt="medal"/>
                            <h6>Newest</h6>
                        </div>
                        <div className="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img className="vertical-product-img-top w-100 bg-img" src="assets/images/product/vp-2.png"
                                    alt="vp-2"/>
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
                            <h5 className="product-items">Chicken quesadilla, avocado....</h5>
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
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                            <h5 className="product-items">cheesecake, waffles, Cakes,...</h5>
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
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="vertical-product-box">
                        <div className="seller-badge exclusive-badge">
                            <img className="img-fluid badge" src="assets/images/svg/crown.svg" alt="medal"/>
                            <h6>Best seller</h6>
                        </div>
                        <div className="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img className="vertical-product-img-top w-100 bg-img" src="assets/images/product/vp-7.png"
                                    alt="vp-7"/>
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
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="vertical-product-box">
                        <div className="seller-badge">
                            <img className="img-fluid badge" src="assets/images/svg/medal-fill.svg" alt="medal"/>
                            <h6>Exclusive</h6>
                        </div>
                        <div className="vertical-product-box-img">
                            <a href="menu-listing.html">
                                <img className="vertical-product-img-top w-100 bg-img" src="assets/images/product/vp-8.png"
                                    alt="vp-8"/>
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
                            <h5 className="product-items">Chicken quesadilla, avocado....</h5>
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
    </section>
  )
}
