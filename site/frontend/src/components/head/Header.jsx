import React, { useState } from 'react'
import Cart from './Cart'
import ProfileInfo from './ProfileInfo'

export default function Header() {
    const [isConnected, setIsConnected] = useState(false)
  return (
    <>
        <div className="skeleton-loader">
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg p-0">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#offcanvasNavbar">
                            <span className="navbar-toggler-icon">
                                <i className="ri-menu-line"></i>
                            </span>
                        </button>
                        <a href="index.html">
                            <img className="img-fluid logo" src="assets/images/svg/logo.svg" alt="logo" />
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
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasSkeleton">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasSkeletonLabel">
                                    Menu
                                </h5>
                                <button className="navbar-toggler btn-close" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#offcanvasSkeleton" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center flex-grow-1">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="#!" role="button" aria-expanded="false">Accueil</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!" role="button" aria-expanded="false">Explorer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!" role="button" aria-expanded="false">Évènements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className="home-wrapper">
                <div className="container text-center">
                    <div className="loader-gif">
                        <img src="assets/images/gif/food.gif" alt="food-gif" className="img-fluid" />
                    </div>
                    <h2>Chargement...</h2>
                </div>
            </section>
            <div className="categories-section">
                <div className="container">
                    <div className="position-relative category-top">
                        <div className="swiper categories-no-arrow categories-style">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="restaurant-listing.html" className="food-categories">
                                        <span className="categories-img"></span>
                                        <h4 className="placeholder col-10"></h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-b-space">
                <div className="container">
                    <div className="title placeholder-glow">
                        <span className="placeholder col-md-2 col-5"></span>
                        <p className="placeholder col-5 w-50"></p>
                    </div>
                    <div className="position-relative">
                        <div className="swiper banner1-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide placeholder-glow">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="offer.html" className="placeholder"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
                                    <a className="nav-link" href="#!" aria-expanded="false">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!" id="event" aria-expanded="false">Explorer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!" id="event" aria-expanded="false">Évènements</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}
