import React from "react";
import PlanItem from "./PlanItem";

const HomeOther = () => {
    return (
        <div className="container margin_60">

            <div className="main_title">
                <h2>Les bons plans</h2>
                <p>Explorer et retrouver les bons plans de diverstissement près de chez vous</p>
            </div>

            <div className="row">
                {
                    Array.from({length: 6}, (_, i) => (
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s" key={i}>
                            <PlanItem />
                        </div>
                    ))
                }
            </div>
            <p className="text-center add_bottom_30">
                <a href="all_tours_list.html" className="btn_1 medium"><i className="icon-eye-7"></i>Explorer
                    (144) </a>
            </p>
        </div>
    )
}

export default HomeOther