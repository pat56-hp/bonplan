import React from "react";

const HomeEvent = () => {
    return (
        <div className="white_bg">
            <div className="container margin_60">
                <div className="row small-gutters categories_grid">
                    <div className="col-sm-12 col-md-6">
                        <a href="all_tours_list.html">
                            <img src="img/img_cat_home_1.jpg" alt="" className="img-fluid"/>
                                <div className="wrapper">
                                    <h2>Special Offers</h2>
                                    <p>1150 Locations</p>
                                </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="row small-gutters mt-md-0 mt-sm-2">
                            <div className="col-sm-6">
                                <a href="all_tours_list.html">
                                    <img src="img/img_cat_home_2.jpg" alt="" className="img-fluid"/>
                                        <div className="wrapper">
                                            <h2>Tours</h2>
                                            <p>800 Locations</p>
                                        </div>
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <a href="all_hotels_list.html">
                                    <img src="img/img_cat_home_3.jpg" alt="" className="img-fluid"/>
                                        <div className="wrapper">
                                            <h2>Hotels</h2>
                                            <p>650 Locations</p>
                                        </div>
                                </a>
                            </div>
                            <div className="col-sm-12 mt-sm-2">
                                <a href="all_restaurants_list.html">
                                    <img src="img/img_cat_home_4.jpg" alt="" className="img-fluid"/>
                                        <div className="wrapper">
                                            <h2>Restaurants</h2>
                                            <p>1132 Locations</p>
                                        </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeEvent