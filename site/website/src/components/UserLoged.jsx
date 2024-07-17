import React from "react";

/**
 * Composant utilisatateur connecté : dans le header
 * @returns {*}
 * @constructor
 */
export default function UserLoged (){
    return (
        <li>
            <div className="dropdown dropdown-cart">
                <a href="#0" data-bs-toggle="dropdown" className="cart_bt"><i className=" icon-user-7"></i> Patrick</a>
                <ul className="dropdown-menu" id="cart_items">
                    <li>
                        <div className="image"><img src="img/thumb_cart_1.jpg" alt="image" /></div>
                        <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                    </li>
                    <li>
                        <div className="image"><img src="img/thumb_cart_2.jpg" alt="image"/></div>
                        <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                    </li>
                    <li>
                        <div className="image"><img src="img/thumb_cart_3.jpg" alt="image"/></div>
                        <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                    </li>
                </ul>
            </div>
        </li>
    )
}