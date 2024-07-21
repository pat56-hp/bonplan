import React from "react";

export default function PlanFilter (){
    return (
        <aside className="col-lg-3">
            <p>
                <a className="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false"
                   aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View
                    on map
                </a>
            </p>

            <div id="filters_col">
                <a data-bs-toggle="collapse" href="#collapseFilters" aria-expanded="false"
                   aria-controls="collapseFilters" id="filters_col_bt"><i
                    className="icon_set_1_icon-65"></i>Filters</a>
                <div className="collapse show" id="collapseFilters">
                    <div className="filter_type">
                        <h6>Price</h6>
                        <input type="text" id="range" name="range" value="" />
                    </div>
                    <div className="filter_type">
                        <h6>Star Category</h6>
                        <ul>
                            <li>
                                <label className="container_check">
                                    <span className="rating">
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                    </span>(15)
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    <span className="rating">
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                    </span>(10)
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    <span className="rating">
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                    </span>(22)
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    <span className="rating">
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                    </span>(08)
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    <span className="rating">
                                        <i className="icon_set_1_icon-81 voted"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                        <i className="icon_set_1_icon-81"></i>
                                    </span>(08)
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="filter_type">
                        <h6>Review Score</h6>
                        <ul>
                            <li>
                                <label className="container_check">
                                    Superb: 9+ (77)
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Good: 7+ (909)
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Pleasant: 6+ (1196)
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    No rating (198)
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="filter_type">
                        <h6>Facility</h6>
                        <ul>
                            <li>
                                <label className="container_check">
                                    Pet allowed
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Wifi
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Spa
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Restaurant
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Pool
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Parking
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">
                                    Fitness center
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="filter_type">
                        <h6>District</h6>
                        <ul className="mb-0">
                            <li>
                                <label className="container_radio">
                                    Paris Centre
                                    <input type="radio" name="location"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">
                                    La Defance
                                    <input type="radio" name="location"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">
                                    La Marais
                                    <input type="radio" name="location"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">
                                    Latin Quarter
                                    <input type="radio" name="location"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box_style_2 d-none d-sm-block">
                <i className="icon_set_1_icon-57"></i>
                <h4>Need <span>Help?</span></h4>
                <a href="tel://004542344599" className="phone">+45 423 445 99</a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
            </div>
        </aside>
    )
}