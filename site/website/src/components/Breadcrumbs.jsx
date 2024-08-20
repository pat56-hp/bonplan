import React, { useEffect } from "react";
import {Link, NavLink} from "react-router-dom";
import { Placeholder } from "rsuite";
import { apiUrl } from "../scripts/helper";

export default function Breadcrumbs({breadcrumbs, info, isShow = false, data = {}}){

    const showHeaderBreadcrumbs = () => {
        if (isShow) {
            const styleOpen = {
                color: '#79A70A',
                fontSize: '30px'
            }
        
            const styleClose = {
                color: '#e04f67',
                fontSize: '30px'
            }
            return (
                !data.libelle 
                    ? <Chargement /> 
                    :
                        <section 
                            className="parallax-window" 
                            data-parallax="scroll" 
                            data-image-src="/img/restaurant_top_in.jpg" 
                            data-natural-width="1400" 
                            data-natural-height="470"
                            style={{backgroundImage: `url(${apiUrl() + data.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                        >
                            <div className="parallax-content-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h1 className="mb-2">{data?.libelle}</h1>
                                            <Link to={data.url} className="text-white">
                                                <span><i className={data.category_icon}></i>{data?.category}</span>
                                            </Link>
                                            {
                                                data.type !== 'event' &&
                                                <div className="" style={data.open ? styleOpen : styleClose}><span>{data.open ? 'Ouvert' : 'Fermé'}</span></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
            )
        }else{
            return (
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
            )
        }
    }

    

    useEffect(() => {
        showHeaderBreadcrumbs()
    }, [data])

    return (
        <>
            { showHeaderBreadcrumbs() }
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

function Chargement (){
    return(
        <Placeholder.Graph active className='hover_load' />
    )
}