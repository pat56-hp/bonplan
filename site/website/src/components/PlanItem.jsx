import React from "react";

/**
 * Bon plan item
 * @returns {*}
 * @constructor
 */
export function PlanItem(){
    return (
        <div className="hotel_container">
            <div className="ribbon_3"><span>Top rated</span></div>
            <div className="img_container">
                <a href="single_hotel.html">
                    <img src="img/hotel_6.jpg" width="800" height="533" className="img-fluid"
                         alt="Image"/>
                    <div className="short_info">
                        <i className="icon_set_1_icon-44"></i>Historic Buildings
                        <span className="price"><sup>$</sup>39</span>
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
                    <a className="tooltip_flip tooltip-effect-1"
                       href="#">+<span className="tooltip-content-flip"><span
                        className="tooltip-back">Add to wishlist</span></span></a>
                </div>
                <div className="view_on_map">View on map
                </div>
            </div>
        </div>
    )
}