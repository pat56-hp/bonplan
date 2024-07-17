import React from "react";

const HomePopular = () => {
    return (
        <div className="white_bg">
            <div className="container margin_60">
                <div className="main_title">
                    <h2>Les meilleurs plans</h2>
                    <p>
                        Explorez nos plans populaires, choisis par une majorité
                    </p>
                </div>
                <div id="tabs" className="tabs">
                    <nav>
                        <ul>
                            <li><a href="#section-1" className="icon-tours"><span>Tours</span></a></li>
                            <li><a href="#section-2" className="icon-hotels"><span>Hotels</span></a></li>
                            <li><a href="#section-3" className="icon-restaurants"><span>Restaurants</span></a></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <section id="section-1">
                            <div className="row list_hotels_tabs">
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_6.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                    <div className="score"><span>8.5</span>Superb</div>
                                                    <div className="short_info hotel">
                                                        <span className="price"><sup>$</sup>45</span>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Concorde</strong> Test</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_3.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                    <div className="score"><span>9.5</span>Superb</div>
                                                    <div className="short_info hotel">
                                                        <span className="price"><sup>$</sup>39</span>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Lumiere</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_2.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                    <div className="score"><span>9.0</span>Superb</div>
                                                    <div className="short_info hotel">
                                                        <span className="price"><sup>$</sup>45</span>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Mariott</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section-2">
                            <div className="row list_hotels_tabs">
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_6.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                <div className="score"><span>8.5</span>Superb</div>
                                                <div className="short_info hotel">
                                                    <span className="price"><sup>$</sup>45</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Concorde</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_3.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                <div className="score"><span>9.5</span>Superb</div>
                                                <div className="short_info hotel">
                                                    <span className="price"><sup>$</sup>39</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Lumiere</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_2.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                <div className="score"><span>9.0</span>Superb</div>
                                                <div className="short_info hotel">
                                                    <span className="price"><sup>$</sup>45</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Mariott</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section-3">
                            <div className="row list_hotels_tabs">
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_6.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                <div className="score"><span>8.5</span>Superb</div>
                                                <div className="short_info hotel">
                                                    <span className="price"><sup>$</sup>45</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Concorde</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_3.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                <div className="score"><span>9.5</span>Superb</div>
                                                <div className="short_info hotel">
                                                    <span className="price"><sup>$</sup>39</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Lumiere</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="hotel_container">
                                        <div className="ribbon_3"><span>Top rated</span></div>
                                        <div className="img_container">
                                            <a href="single_hotel.html">
                                                <img src="img/hotel_2.jpg" width="800" height="533" className="img-fluid" alt="Image"/>
                                                <div className="score"><span>9.0</span>Superb</div>
                                                <div className="short_info hotel">
                                                    <span className="price"><sup>$</sup>45</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotel_title">
                                            <h3><strong>Mariott</strong> Hotel</h3>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i>
                                            </div>
                                            <div className="wishlist">
                                                <a className="tooltip_flip tooltip-effect-1" href="#">+<span
                                                    className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="banner colored">
                    <h4>Discover our Top tours <span>from $34</span></h4>
                    <p>
                        Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in.
                    </p>
                    <a href="single_tour.html" className="btn_1 white">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default HomePopular