import React from "react";
import {PlanItem} from "../components/PlanItem";

export default function Explore (){
    return (
        <>
            <div className="container-fluid full-height">
                <div className="row row-height">
                    <div className="col-lg-7 content-left">
                        <div className="row">
                            {
                                Array.from({length: 10},(_, i) => (
                                    <div className={'col-sm-6'}>
                                        <PlanItem key={i} />
                                    </div>
                                ))
                            }
                        </div>

                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><span className="page-link">1<span
                                    className="sr-only">(current)</span></span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-lg-5 map-right">
                        <div className="map" id="map"></div>
                    </div>
                </div>
            </div>
        </>
    )
}