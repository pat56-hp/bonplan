import React from 'react'

export default function HomeEvent() {
  return (
    <section className="popular-restaurant banner-section section-b-space ratio3_2 overflow-hidden">
        <img className="img-fluid item-5" src="assets/images/svg/item5.svg" alt="item-5" />
        <div className="container">
            <div className="title">
                <h2>En ce moment</h2>
                <div className="loader-line"></div>
                <div className="sub-title">
                    <p>Découvrez les événements incontournables près de chez vous</p>
                </div>
            </div>
            <div className="row g-md-4 g-3 row-cols-xxl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 custom-sm-100 ratio_110">
                <div className="col">
                    <div className="restaurant-wrapper">
                        <div className="restaurant-img">
                            <a href="menu-listing.html">
                                <img className="product-img-top w-100 bg-img" src="assets/images/product/1.jpg" alt="vp1" />
                            </a>
                            <div className="offers">
                                <h6>upto $2</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div className="restaurant-content">
                            <a href="menu-listing.html">
                                <h4 className="space-family">Poultry Palace</h4>
                            </a>
                            <h5 className="product-items">Chicken quesadilla, avocado....</h5>
                            <ul className="restaurant-details">
                                <li>3.2 km</li>
                                <li>25 min</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="restaurant-wrapper">
                        <div className="restaurant-img">
                            <a href="menu-listing.html">
                                <img className="product-img-top w-100 bg-img" src="assets/images/product/2.jpg" alt="vp1" />
                            </a>
                        </div>
                        <div className="restaurant-content">
                            <a href="menu-listing.html">
                                <h4 className="space-family">Ribeye Junction</h4>
                            </a>
                            <h5 className="product-items">Chicken quesadilla, avocado....</h5>
                            <ul className="restaurant-details">
                                <li>8 km</li>
                                <li>50 min</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="restaurant-wrapper">
                        <div className="restaurant-img">
                            <a href="menu-listing.html">
                                <img className="product-img-top w-100 bg-img" src="assets/images/product/3.jpg" alt="vp1" />
                            </a>
                        </div>
                        <div className="restaurant-content">
                            <a href="menu-listing.html">
                                <h4 className="space-family">
                                    The Grill Master's Cafe
                                </h4>
                            </a>
                            <h5 className="product-items">Bread, Eggs, Butter, Fries...</h5>
                            <ul className="restaurant-details">
                                <li>5.7 km</li>
                                <li>30 min</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="restaurant-wrapper">
                        <div className="restaurant-img">
                            <a href="menu-listing.html">
                                <img className="product-img-top w-100 bg-img" src="assets/images/product/4.jpg" alt="vp1" />
                            </a>
                            <div className="offers">
                                <h6>upto $2</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div className="restaurant-content">
                            <a href="menu-listing.html">
                                <h4 className="space-family">Cozy Cuppa Cafe</h4>
                            </a>
                            <h5 className="product-items">cheesecake, waffles, Cakes,...</h5>
                            <ul className="restaurant-details">
                                <li>1 km</li>
                                <li>10 min</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="restaurant-wrapper">
                        <div className="restaurant-img">
                            <a href="menu-listing.html">
                                <img className="product-img-top w-100 bg-img" src="assets/images/product/5.jpg" alt="vp1" />
                            </a>
                            <div className="offers">
                                <h6>upto $2</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4>50% OFF</h4>
                                </div>
                            </div>
                        </div>
                        <div className="restaurant-content">
                            <a href="menu-listing.html">
                                <h4 className="space-family">Mocha Magic Cafe</h4>
                            </a>
                            <h5 className="product-items">Chinese, Momos, Dumplings,...</h5>
                            <ul className="restaurant-details">
                                <li>1.8 km</li>
                                <li>20 min</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
