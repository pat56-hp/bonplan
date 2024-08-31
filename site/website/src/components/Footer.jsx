import React from "react";
import Input from "./form/Input";

const Footer = () => {

    return (
        <>
            <footer className="revealed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Besoin d'aide ?</h3>
                            <a href="tel://004542344599" id="phone">+45 423 445 99</a>
                            <a href="mailto:help@citytours.com" id="email_footer">help@bonplan.com</a>
                        </div>
                        <div className="col-md-3">
                            <h3>A propos</h3>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Qui sommes-nous</a></li>
                                <li><a href="#">Termes et conditions</a></li>
                                <li><a href="#">Nous contacter</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Explorer</h3>
                            <ul>
                                <li><a href="#">Les bons plans</a></li>
                                <li><a href="#">Evènements</a></li>
                                <li><a href="#">Prestataires</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h3>Newsletter</h3>
                            <Input
                                placeholder={'monadresse@email.com'}
                            />
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

            <div id="toTop" onClick={() => scrollY(0)}></div>
        </>
    )
}

export default Footer