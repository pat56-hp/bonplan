import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="revealed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Need help?</h3>
                            <a href="tel://004542344599" id="phone">+45 423 445 99</a>
                            <a href="mailto:help@citytours.com" id="email_footer">help@citytours.com</a>
                        </div>
                        <div className="col-md-3">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Terms and condition</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Discover</h3>
                            <ul>
                                <li><a href="#">Community blog</a></li>
                                <li><a href="#">Tour guide</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h3>Newsletter</h3>
                            <input placeholder={'monadresse@email.com'} defaultValue={''} className='form-control'/>
                            <a className="btn_1 mt-2" href="#" role="button">Je m'inscris</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="social_footer">
                                <ul>
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-google"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                                    <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                    <li><a href="#"><i className="icon-vimeo"></i></a></li>
                                    <li><a href="#"><i className="icon-youtube-play"></i></a></li>
                                </ul>
                                <p>© Les bons plans - Copyright 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div id="toTop"></div>
        </>
    )
}

export default Footer