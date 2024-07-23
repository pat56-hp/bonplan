import React, {useState} from "react";
import Customer from "./Customer";
import Prestataire from "./Prestataire";

export default function Register () {
    const [isDefaultCustomer, setIsDefaultCustomer] = useState(true)
    const [isDefaultPrestataire, setIsDefaultPrestataire] = useState(false)

    const handleDefaultCustomer = (e) => {
        setIsDefaultCustomer(true)
        setIsDefaultPrestataire(false)
    }

    const handleDefaultPrestataire = (e) => {
        setIsDefaultCustomer(false)
        setIsDefaultPrestataire(true)
    }

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
                            className={`show ${isDefaultCustomer && 'active'}`}
                            style={{paddingLeft : 10}}
                            tabIndex="-1"
                            onClick={handleDefaultCustomer}
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
                            className={`show ${isDefaultPrestataire && 'active'}`}
                            onClick={handleDefaultPrestataire}
                        >
                            <i className="icon-shop-1 pr-2"></i>
                            <span>Prestataire</span>
                        </a>
                    </li>
                </ul>

                <div className="tab-content mb-0">
                    <div className="tab-pane fade active show" id="client" role="tabpanel" aria-labelledby="#tab_bt_2">
                        {isDefaultCustomer && <Customer />}
                    </div>
                    <div className="tab-pane" id="prestataire" role="tabpanel" aria-labelledby="#tab_bt_3">
                        {isDefaultPrestataire && <Prestataire />}
                    </div>
                </div>
            </div>
        </>
    )
}