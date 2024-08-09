import React from "react";
import { apiUrl } from "../../scripts/helper";
import Rating from "../../components/Rating";

/**
 * Bon plan item
 * @returns {*}
 * @constructor
 */

export default function PlanItem({bonplan}){
    
    return (
        <div className="hotel_container">
            {/* <div className="ribbon_3"><span>Top rated</span></div> */}
            <div className="img_container">
                <a href="single_hotel.html">
                    <img src={apiUrl() + bonplan.image} width="800" height="533" className="img-fluid"
                         alt="Image"/>
                    <div className="short_info">
                        <i className={bonplan.category_icon}></i>{bonplan.category}
                    </div>
                </a>
            </div>
            <div className="hotel_title">
                <h3><strong>{bonplan.libelle}</strong></h3>
                <Rating />
                <div className="wishlist">
                    <a className="tooltip_flip tooltip-effect-1"
                       href="#">+<span className="tooltip-content-flip"><span
                        className="tooltip-back">Ajouter en favoris</span></span></a>
                </div>

                <div className="view_on_map">Voir l'emplacement</div>
            </div>
        </div>
    )
}