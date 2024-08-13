import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function NotFound (){
    return (
        <section id="hero" className="background-image" data-background={`url(img/header_bg.jpg)`}>
            <div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                <div className="intro_title error">
                    <h1 className="animated fadeInDown">404</h1>
                    <p className="animated fadeInDown">Oups!! La page que vous rechercher est introuvable</p>
                    <Link to="/" className="animated fadeInUp button_intro"><span className="icon-right"></span>Retourner à l'accueil</Link> <NavLink
                    to={'/explorer'} className="animated fadeInUp button_intro outline">Explorer les bons plans</NavLink>
                </div>
            </div>
        </section>
    )
}