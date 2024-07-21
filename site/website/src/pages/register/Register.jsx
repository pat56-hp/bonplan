import React from "react";
import Customer from "./Customer";
import Prestataire from "./Prestataire";

export default function Register () {
    return (
        <>
            <div id="search_2" className="p-0 bg-white d-block register">
                <ul className="nav nav-tabs" role="tablist">
                    <li>
                        <a
                            href="#client"
                            data-bs-toggle="tab"
                            aria-selected="false"
                            role="tab"
                            className="show active"
                            style={{paddingLeft : 10}}
                            tabIndex="-1"
                        >
                            <i className="icon-user-7 pr-2"></i>
                            <span>Client</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#prestataire"
                            data-bs-toggle="tab"
                            aria-selected="false"
                            role="tab"
                            style={{paddingLeft : 10}}
                            tabIndex="-1"
                        >
                            <i className="icon-shop-1 pr-2"></i>
                            <span>Prestataire</span>
                        </a>
                    </li>
                </ul>

                <div className="tab-content mb-0">
                    <div className="tab-pane fade active show" id="client" role="tabpanel" aria-labelledby="#tab_bt_2">
                        <Customer />
                    </div>
                    <div className="tab-pane" id="prestataire" role="tabpanel" aria-labelledby="#tab_bt_3">
                        <Prestataire />
                    </div>
                </div>
            </div>
        </>
    )
}