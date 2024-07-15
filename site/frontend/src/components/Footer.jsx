import React, { useEffect } from 'react'

export default function Footer() {
    /* useEffect(() => {
        const script = document.createElement('script');
        const bundle = document.createElement('script');
        script.src = '/assets/js/script.js';
        script.async = true;
        document.body.appendChild(script);

        bundle.src = '/assets/js/swiper-bundle.min.js';
        bundle.async = true;
        document.body.appendChild(bundle);
    
        return () => {
          document.body.removeChild(script);
          document.body.removeChild(bundle);
        };
      }, []); */

  return (
    <footer className="footer-section section-t-space">
        <div className="subscribe-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="subscribe-part">
                            <h5>
                                Don't pass up our fantastic discounts. email offers from all
                                of our best eateries
                            </h5>
                            <div className="position-relative w-100">
                                <input type="email" className="form-control subscribe-form-control"
                                    placeholder="Enter your Email" />
                                <a href="#" className="btn theme-btn subscribe-btn mt-0">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="main-footer">
                <div className="row g-3">
                    <div className="col-xl-4 col-lg-12">
                        <div className="footer-logo-part">
                            <img className="img-fluid logo" src="assets/images/svg/logo.svg" alt="logo"/>
                            <p>
                                Welcome to our online order website! Here, you can browse our
                                wide selection of products and place orders from the comfort
                                of your own home.
                            </p>
                            <div className="social-media-part">
                                <ul className="social-icon">
                                    <li>
                                        <a href="https://www.facebook.com/login/">
                                            <i className="ri-facebook-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/i/flow/login">
                                            <i className="ri-twitter-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/login/">
                                            <i className="ri-linkedin-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/accounts/login/">
                                            <i className="ri-instagram-fill icon"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/">
                                            <i className="ri-youtube-fill icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row g-3">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 className="footer-title">Company</h5>
                                <ul className="content">
                                    <li>
                                        <a href="about.html">
                                            <h6>About us</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <h6>Contact us</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="offer.html">
                                            <h6>Offer</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">
                                            <h6>FAQs</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 className="footer-title">Account</h5>
                                <ul className="content">
                                    <li>
                                        <a href="my-order.html">
                                            <h6>My orders</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html">
                                            <h6>Wishlist</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">
                                            <h6>Shopping Cart</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="saved-address.html">
                                            <h6>Saved Address</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 className="footer-title">Useful links</h5>
                                <ul className="content">
                                    <li>
                                        <a href="blog-grid-left-sidebar.html">
                                            <h6>Blogs</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="signin.html">
                                            <h6>Login</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="signup.html">
                                            <h6>Register</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="profile.html">
                                            <h6>Profile</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="setting.html">
                                            <h6>Settings</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5 className="footer-title">Top Brands</h5>
                                <ul className="content">
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>PizzaBoy</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>Saladish</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>IcePops</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>Maxican Hoy</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="menu-listing.html">
                                            <h6>La Foodie</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer-part">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <h6>@ Copyright 2024 ZOMO. All rights Reserved.</h6>
                    <img className="img-fluid cards" src="assets/images/icons/footer-card.png" alt="card"/>
                </div>
            </div>
        </div>
    </footer>
  )
}
