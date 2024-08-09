import React, { useEffect, useState } from "react";
import PlanItem from "../bonplans/PlanItem";
import { Link } from "react-router-dom";

const HomeOther = ({datas, total}) => {
    
    return (
        <>
            {
                datas && 
                <div className="white_bg">
                    <div className="container margin_60">
                        <div className="main_title">
                            <h2>Les bons plans</h2>
                            <p>Explorer et retrouver les bons plans de diverstissement près de chez vous</p>
                        </div>

                        <div className="row">
                            {
                                datas.map((bonplan, i) => (
                                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s" key={i}>
                                        <PlanItem bonplan = {bonplan}/>
                                    </div>
                                ))
                            }
                        </div>
                        <p className="text-center add_bottom_30">
                            <Link to={'/explorer'} className="btn_1 medium"><i className="icon-eye-7"></i>Explorer
                                ({total}) </Link>
                        </p>
                    </div>
                </div>
            }
            
        </>
    )
}

export default HomeOther