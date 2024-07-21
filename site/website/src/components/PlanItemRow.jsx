import React from "react";

export default function PlanItemRow() {
    return (
        <div className="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
            <div className="row">
                <div className="col-lg-4 col-md-4 position-relative">
                    <div className="ribbon_3 popular"><span>Popular</span>
                    </div>
                    <div className="wishlist">
                        <a className="tooltip_flip tooltip-effect-1" href="javascript:void(0);">+<span
                            className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span>
                        </a>
                    </div>
                    <div className="img_list">
                        <a href="single_hotel.html"><img src="img/hotel_1.jpg" alt="Image" />
                            <div className="short_info"></div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="tour_list_desc">
                        <div className="score">Superb<span>9.0</span>
                        </div>
                        <div className="rating"><i className="icon-star voted"></i><i
                            className="icon-star  voted"></i><i className="icon-star  voted"></i><i
                            className="icon-star  voted"></i><i className="icon-star-empty"></i>
                        </div>
                        <h3><strong>Park Hyatt</strong> Hotel</h3>
                        <p>Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat
                            sanctus detracto vis. Eos modus dolorum...</p>
                        <ul className="add_info">
                            <li>
                                <a href="javascript:void(0);" className="tooltip-1"
                                   data-bs-placement="top" title="Free Wifi">
                                    <i className="icon_set_1_icon-86"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="tooltip-1"
                                   data-bs-placement="top" title="Plasma TV with cable channels">
                                    <i className="icon_set_2_icon-116"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="tooltip-1"
                                   data-bs-placement="top" title="Swimming pool">
                                    <i className="icon_set_2_icon-110"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="tooltip-1"
                                   data-bs-placement="top" title="Fitness Center">
                                    <i className="icon_set_2_icon-117"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="tooltip-1"
                                   data-bs-placement="top" title="Restaurant">
                                    <i className="icon_set_1_icon-58"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                        <div><sup>$</sup>89*<span className="normal_price_list">$99</span><small>*From/Per night</small>
                            <p><a href="single_hotel.html" className="btn_1">Details</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}