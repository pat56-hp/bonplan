import React from "react";
import { apiUrl, getShortDescription, slug } from "../../scripts/helper";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";

export default function PlanItemRow({bonplan}) {
    
    return (
        <div className="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
            <div className="row">
                <div className="col-lg-4 col-md-4 position-relative">
                    {/* <div className="ribbon_3 popular"><span>Popular</span></div> */}
                    <div className="wishlist">
                        <a className="tooltip_flip tooltip-effect-1" href="">+<span
                            className="tooltip-content-flip"><span className="tooltip-back">Ajouter aux favoris</span></span>
                        </a>
                    </div>
                    <div className="img_list">
                        <Link to={`/explorer/${slug(bonplan.id + '-' +bonplan.libelle)}`}>
                            <img src={apiUrl() + bonplan.image} alt="Image" />
                            <div className="short_info"><i className={bonplan.category_icon}></i>{bonplan.category}</div>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="tour_list_desc">
                        {/* <div className="score">Superb<span>9.0</span></div> */}
                        <h3 className="mt-2"><strong>{bonplan.libelle}</strong></h3>
                        <Rating />
                        <p className="mt-3 mb-3">
                            {getShortDescription(bonplan.description, 200)}
                        </p>
                        
                        <span><i className='icon-location-outline'></i>{bonplan.ville}</span>

                        {
                            bonplan.commodites &&
                            <ul className="add_info mt-4 mb-4">
                                {bonplan.commodites.map((commodite, key) => (
                                    <li key={key}>
                                        <a 
                                            href="" 
                                            className="tooltip-1"
                                            data-bs-placement="top" 
                                            title={commodite.libelle}
                                        >
                                            <i className={commodite.icon}></i>
                                        </a>
                                    </li>
                                ))}
                                    
                            </ul>
                        }
                        
                    </div>
                </div>
                {/* <div className="col-lg-2 col-md-2">
                    <div className="price_list">
                        <div><sup>$</sup>89*<span className="normal_price_list">$99</span><small>*From/Per night</small>
                            <p><a href="single_hotel.html" className="btn_1">Details</a></p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}