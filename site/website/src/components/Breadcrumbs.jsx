import React from "react";
import {NavLink} from "react-router-dom";

export default function Breadcrumbs({breadcrumbs, info}){
    return (
        <>
            <section
                id="hero_2"
                className="background-image"
                data-background="url(img/slide_hero_2.jpg)"
                style={{backgroundImage: 'url(&quot;img/slide_hero_2.jpg&quot)'}}
            >
                <div
                    className="opacity-mask"
                    data-opacity-mask="rgba(0, 0, 0, 0.6)"
                    style={{backgroundColor: 'rgba(0,0,0,0.6)'}}
                >
                    <div className="intro_title">
                        <h1>{info.title}</h1>
                        <p>{info.subtitle}</p>
                    </div>
                </div>
            </section>
            <div id="position">
                <div className="container">
                    <ul>
                        {
                            breadcrumbs.map((breadcrumb, index) => (
                                breadcrumb.link
                                    ? <li key={index}><NavLink to={breadcrumb.link}>{breadcrumb.label}</NavLink></li>
                                    : <li key={index}>{breadcrumb.label}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}