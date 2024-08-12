import React, {useState} from "react";
import RegisterForm from "./RegisterForm";

export default function Register () {
    const [type, setType] = useState(0)

    return (
        <>
            <div className="text-center">
                <h3 className="text-uppercase mt-0">Inscription</h3>
            </div>
            <hr/>
            <div id="search_2" className="p-0 bg-white d-block register">
                <ul className="nav nav-tabs" role="tablist">
                    <li>
                        <a
                            href="#client"
                            data-bs-toggle="tab"
                            aria-selected="false"
                            role="tab"
                            className={`show ${type === 0 && 'active'}`}
                            style={{paddingLeft : 10}}
                            tabIndex="-1"
                            onClick={(e) => {
                                e.preventDefault();
                                setType(0)
                            }}
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
                            className={`show ${type === 1 && 'active'}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setType(1)
                            }}
                        >
                            <i className="icon-shop-1 pr-2"></i>
                            <span>Prestataire</span>
                        </a>
                    </li>
                </ul>

                <div className="tab-content mb-0">
                    <div className={`tab-pane fade ${type === 0 && 'active show'}`} id="client" role="tabpanel" aria-labelledby="#tab_bt_2">
                        <RegisterForm type = {type} />
                    </div>
                    <div className={`tab-pane fade ${type === 1 && 'active show'}`} id="prestataire" role="tabpanel" aria-labelledby="#tab_bt_3">
                        <RegisterForm type = {type} />
                    </div>
                </div>
            </div>
        </>
    )
}