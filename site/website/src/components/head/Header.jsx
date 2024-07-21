import React from "react";
import {Link, NavLink} from "react-router-dom";
import SeachModal from "./SearchModal";
import {useAuthStateProvider} from "../../contexts/AuthContextProvider";
import UserLoged from "../UserLoged";

const Header = () => {
    const {token} = useAuthStateProvider()
    return (
        <>
            <div className="layer"></div>

            <header id="plain" style={{borderBottom: '1px solid #ddd'}}>
                <div id="top_line">
                    <div className="container">
                        <div className="row">
                            <div className="col-6"><i className="icon-phone"></i><strong>0045 043204434</strong></div>
                            <div className="col-6">
                                <ul id="top_links">
                                    <li><a href="#">Qui sommes-nous</a></li>
                                    {
                                        !token && (
                                            <>
                                                <li><Link to="/" id="access_link">Se connecter</Link></li>
                                                <li><a href="#sign-in-dialog"><i className="icon-user-7"></i> S'inscrire</a></li>
                                            </>
                                        )
                                    }
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
                                        <NavLink to={'/explorer'} className="show-submenu">Explorer</NavLink>
                                    </li>
                                    <li className="submenu">
                                        <NavLink to={'/evenements'} className="show-submenu">Evènements</NavLink>
                                    </li>
                                    <li className="submenu">
                                        <NavLink to={'/'} className="show-submenu">Devenir prestataire</NavLink>
                                    </li>
                                    <li className="submenu">
                                        <NavLink to={'/contact'} className="show-submenu">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <ul id="top_tools">
                                <li>
                                    <a href="#" className="search-overlay-menu-btn"><i className="icon_search"></i></a>
                                </li>

                                {
                                    token && <UserLoged />
                                }
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