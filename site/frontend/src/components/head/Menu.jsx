import React from 'react'
import Cart from './Cart'
import ProfileInfo from './ProfileInfo'
import { NavLink } from "react-router-dom";


export default function Menu({ isConnected}) {
  return (
    <header>
        <div className='container'>
            <nav className='navbar navbar-expand-lg p-0'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#offcanvasNavbar">
                    <span className="navbar-toggler-icon">
                        <i className="ri-menu-line"></i>
                    </span>
                </button>
                <a href="#">
                    <img className="img-fluid logo" src="/assets/images/svg/logo.svg" alt="logo" />
                </a>
            
                <div className="nav-option order-md-2">
                    {
                        isConnected ?
                        (
                            <>
                                <Cart />
                                <ProfileInfo />
                            </>
                        ) :

                        <a target="_blank" href="#!" data-bs-toggle="modal" data-bs-target="#location"
                            className="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1">
                            <i className="ri-user-shared-2-line"></i> Se connecter
                        </a>
                    }
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button className="navbar-toggler btn-close" id="offcanvas-close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1">
                            <li className="nav-item mega-menu">
                                <NavLink to={'/'} className="nav-link">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/explorer'} className="nav-link" id='explore'>Explorer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/evenements'} className="nav-link" id='event'>Évènements</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/contact'} className="nav-link" id='contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}
