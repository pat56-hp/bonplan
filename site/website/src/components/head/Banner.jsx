import React from "react";

const Banner = () => {
    return (
        <div id="search_container_2">
            <div id="search_2">
                <form>
                    <div className="row g-0 custom-search-input-2">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Où allez vous ?"
                                       id="autocomplete" />
                                <i className="icon_pin_alt"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="panel-dropdown">
                                <a href="#">Catégorie <span className="qtyTotal tours">1</span></a>
                                <div className="panel-dropdown-content">
                                    <div className="qtyButtons tours">
                                        <label>Adults</label>
                                        <input type="text" name="qtyInput_tours" value="1"/>
                                    </div>
                                    <div className="qtyButtons tours">
                                        <label>Childrens</label>
                                        <input type="text" name="qtyInput_tours" value="0"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <input type="submit" className="btn_search" value="Explorer"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Banner