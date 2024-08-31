import React, { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import {useAuthStateProvider} from "../../contexts/AuthContextProvider";
import Input from "../form/Input";
import UserLoged from "./UserLoged";
import { useMenuStateProvider } from "../../contexts/MenuContextProvide";

const Header = () => {

    const { token } = useAuthStateProvider()
    const {menuMobileActive, setMenuMobileActive} = useMenuStateProvider()

    const handleMobileMenu = (e) => {
        e.preventDefault();
        setMenuMobileActive(!menuMobileActive)
    }

    return (
        <>
            <div className="layer"></div>
            <header id="plain" style={{borderBottom: '1px solid #ddd'}}>
                <div id="top_line">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-4"><i className="icon-phone"></i><strong>0045 043204434</strong></div>
                            <div className="col-4 seach-container">
                                <i className="icon_search"></i>
                                <Input
                                    placeholder="Rechercher..."
                                    otherClass="top-search"
                                />
                            </div>
                            <div className="col-4">
                                <ul id="top_links">
                                    <li><a href="#">Qui sommes-nous</a></li>
                                    {
                                        !token && (
                                            <>
                                                <li><Link to="/register"><i className="icon-user-7"></i> S'inscrire</Link></li>
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
                        <div className="col-4">
                            <div id="logo_home">
                                <h1><NavLink to={'/'} title="City tours travel template">City Tours travel template</NavLink></h1>
                            </div>
                        </div>
                        <nav className="col-8">
                            <a className={`cmn-toggle-switch cmn-toggle-switch__htx open_close ${menuMobileActive && 'active'}`} href="#" onClick={handleMobileMenu}><span>Menu mobile</span></a>
                            <div className={`main-menu ${menuMobileActive && 'show'}`}>
                                <div id="header_menu">
                                    <img src="img/logo_sticky.png" width="160" height="34" alt="Les bons plans" />
                                </div>
                                <a href="#" className="open_close" id="close_in" onClick={handleMobileMenu}><i className="icon_set_1_icon-77"></i></a>
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
                                        <NavLink to={'/contact'} className="show-submenu">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            
                            <ul id="top_tools">
                                {
                                    token
                                        ? <UserLoged />
                                        : <li className='login-link'><Link to={'/login'} id="access_link" className='text-white'>Se connecter</Link></li>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header