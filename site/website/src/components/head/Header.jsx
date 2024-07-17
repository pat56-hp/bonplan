import React from "react";
import {Link, NavLink} from "react-router-dom";
import SeachModal from "./SearchModal";

const Header = () => {
    return (
        <>
            <div className="layer"></div>

            <header>
                <div id="top_line">
                    <div className="container">
                        <div className="row">
                            <div className="col-6"><i className="icon-phone"></i><strong>0045 043204434</strong></div>
                            <div className="col-6">
                                <ul id="top_links">
                                    <li><a href="#sign-in-dialog" id="access_link">Se connecter</a></li>
                                    <li><a href="#sign-in-dialog"><i className="icon-user-7"></i> S'inscrire</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div id="logo_home">
                                <h1><NavLink to={'/'} title="City tours travel template">City Tours travel template</NavLink></h1>
                            </div>
                        </div>
                        <nav className="col-9">
                            <Link className="cmn-toggle-switch cmn-toggle-switch__htx open_close" to={"/"}><span>Menu mobile</span></Link>
                            <div className="main-menu">
                                <div id="header_menu">
                                    <img src="img/logo_sticky.png" width="160" height="34" alt="Les bons plans" />
                                </div>
                                <a href="#" className="open_close" id="close_in"><i className="icon_set_1_icon-77"></i></a>
                                <ul>
                                    <li className="submenu">
                                        <NavLink to={'/'} className="show-submenu">Accueil</NavLink>
                                    </li>
                                    <li className="submenu">
                                        <NavLink to={'/'} className="show-submenu">Explorer</NavLink>
                                    </li>
                                    <li className="submenu">
                                        <NavLink to={'/'} className="show-submenu">Evènements</NavLink>
                                    </li>
                                    <li className="submenu">
                                        <NavLink to={'/'} className="show-submenu">Devenir prestataire</NavLink>
                                    </li>
                                    <li className="submenu">
                                        <NavLink to={'/'} className="show-submenu">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <ul id="top_tools">
                                <li>
                                    <a href="#" className="search-overlay-menu-btn"><i className="icon_search"></i></a>
                                </li>
                                {/*<li>
                                    <div className="dropdown dropdown-cart">
                                        <a href="#0" data-bs-toggle="dropdown" className="cart_bt"><i className="icon_bag_alt"></i><strong>3</strong></a>
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
                                            <li>
                                                <div>Total: <span>$120.00</span></div>
                                                <a href="cart.html" className="button_drop">Go to cart</a>
                                                <a href="payment.html" className="button_drop outline">Check out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>*/}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <SeachModal />
        </>
    )
}

export default Header