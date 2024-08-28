import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import useHttp from "../../hooks/useHttp";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Gallery from "../../components/Gallery";
import { Placeholder } from "rsuite";
import EventItem from "./EventItem";
import { apiUrl, getDate, slug } from "../../scripts/helper";
import MapComponent from "../../components/map/MapComponent";

export default function EventShow () {
    const {sendRequest} = useHttp()
    const params = useParams()
    const [event, setEvent] = useState({})
    const [other, setOther] = useState([])
    const [datas, setDatas] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const timeOutRef = useRef()

    const {
        data : getData,
		isFetching,
		isSuccess,
    } = useQuery({
        queryKey: ['showEvent'],
        queryFn: () => {
            const explode = params.slug.split('-')
            return sendRequest(`/events/${explode[0]}`)
        }
    })

    const setData = () => {
        if (isFetching) {
			setIsLoading(true)
			toast.loading('Chargement...')
		}

        if (isSuccess && getData) {
            timeOutRef.current = setTimeout(() => {
                const {data} = getData
                setEvent(data.data)
                setDatas({
                    libelle: data?.data.titre,
                    category: data?.data?.category.title,
                    category_icon: data?.data?.category.icon,
                    url: '/evenements?category='+data.data.id,
                    image: data.data.image,
                    type: 'event'
                })
                setOther(data.other)
                setIsLoading(false)
                toast.remove()
            }, 800)
        }
    }

    useEffect(() => {
        setData()
        return () => {
            clearTimeout(timeOutRef.current)
        }
    }, [getData])

    const breadcrumbs = [
        {label: 'Accueil', link: '/'},
        {label: 'Evènements', link: '/evenements'},
        {label: event?.titre}
    ]

    const info = {
        title: event?.titre,
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula'
    }

    return (
        <>
            <Breadcrumbs 
                breadcrumbs={breadcrumbs} 
                info={info}
                isShow={true}
                data= {datas}
            />
            <div className="container margin_60">
                {
                    isLoading
                        ? <Chargement />
                        : <>
                            <div className="row">
                                <div className="col-md-12 space_element p-0">
                                    <div className="info-column ">
                                        <h2 className="">{event.titre}</h2>
                                        <hr className="divider"/>
                                        <div className="details-header details-header box_style_1">
                                            <div className="product_description d-flex justify-content-center">
                                                <div className="price row">
                                                    <div className="col-md-6">
                                                        <ul className="item-meta flex-wrap">
                                                            <li><i className={event?.category?.icon}></i> <strong>Categorie</strong> : <Link to={`/evenements?category=${event.category_id}`}>{event?.category?.title}</Link></li>
                                                            <li><i className="icon-user-7"></i> <strong>Organisateur</strong> : {event.organisateur}</li>
                                                            <li><i className="icon-calendar"></i> <strong>Du</strong> : {getDate(event.debut)}</li>
                                                            <li><i className="icon-calendar"></i> <strong>Au</strong> :  {getDate(event.fin)}</li>
                                                            <li><i className="icon-location-6"></i> <strong>Adresse</strong> : {event.adresse}</li>
                                                        </ul>
                                                    </div>
                                                    
                                                    <div className="col-md-6">
                                                        <ul className="item-meta">
                                                            <li><i className="icon-phone"></i> <strong>Contact</strong> : <a target="_blank" href={`tel:00${event.contact}`}>{event.contact}</a></li>
                                                            {
                                                                event.whatsapp && 
                                                                <li><i className="icon-phone"></i> <strong>Whatsapp</strong> : <a target="_blank" href={`https://wa.me/${event.whatsapp}`}>{event.whatsapp}</a></li>
                                                            }
                                                            {
                                                                event.email && 
                                                                <li><i className="icon-mail-6"></i> <strong>Email</strong> : <a target="_blank" href={`mailTo:${event.email}`}>{event.email}</a></li>
                                                            }
                                                            {
                                                                event.facebook && 
                                                                <li><i className="icon-facebook-7"></i> <strong>Facebook</strong> : <a target="_blank" href={`${event.facebook}`}>Visiter l'adresse</a></li>
                                                            }
                                                            {
                                                                event.instagram && 
                                                                <li><i className="icon-instagram-4"></i> <strong>Instagram</strong> : <a target="_blank" href={`${event.instagram}`}>Visiter l'adresse</a></li>
                                                            }
                                                            {
                                                                event.siteweb && 
                                                                <li><i className="icon-globe-5"></i> <strong>Site web</strong> : <a target="_blank" href={`${event.siteweb}`}>Visiter l'adresse</a></li>
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box_style_1 row">
                                <div className="col-md-12 space_element">
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <div className="product-details ">
                                            <div className="basic-details">
                                                <div className="image-column">
                                                    {
                                                        <Gallery 
                                                            image= {event.image}
                                                            gallery = {event.galleries} 
                                                            alt={event.titre}
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product-info-tabs">
                                            <div className="prod-tabs" id="product-tabs">
                                                
                                            <h3>Description</h3>

                                            <div dangerouslySetInnerHTML={{ __html: event.description}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {
                                    event.longitude && event.latitude && 
                                    <div className="col-md-8 mb-4">
                                        <h4>Localisation</h4>
                                        <MapComponent
                                            longitude={event.longitude}
                                            latitude={event.latitude}
                                            image = {apiUrl() + event.image}
                                            libelle = {event.titre}
                                            contact = {event.contact}
                                            isEvent = {true}
                                        />
                                        <p className="d-none d-xl-block d-lg-block mt-2 mb-0">
                                            <a className="btn_map" target='_blank' href={`https://www.google.com/maps/dir/?api=1&destination=${event.adresse}`} aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map"><i className="icon-map"></i> Itinéraire</a>
                                        </p>
                                    </div>
                                }
                                <div className="col-md-4 sidebar">
                                    {
                                        other.length > 0  &&
                                        <div className="widget related-products">
                                            <h4>Autre(s) évènement(s)</h4>
                                            {
                                                other.map((element, key) => (
                                                    <div className="post" key={key}>
                                                        <figure className="post-thumb">
                                                            <a href={`/evenements/${slug(element.id + '-' + element.titre)}`}>
                                                                <img src={apiUrl() + element.image} alt={element.titre}/>
                                                            </a>
                                                        </figure>
                                                        <h5><a href={`/evenements/${slug(element.id + '-' + element.titre)}`}>{element.titre}</a></h5>
                                                        <div className="price mt-1">
                                                            <Link to={`/evenements?category=${element.category_id}`}>
                                                                <i className={element.category_icon}></i>{element.category}
                                                            </Link>
                                                        </div>
                                                        <div className="product_description mt-2">
                                                            <div className="event_begin">
                                                                <span className="debut d-block">
                                                                    <i className="icon-calendar"></i> Du : {getDate(event.debut)}
                                                                </span>
                                                                <span className="fin d-block">
                                                                    <i className="icon-calendar"></i> Au :  {getDate(event.fin)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

function Chargement(){
    return (
        <>
            <div className="white_bg">
                <div className="container margin_60">
                    <Placeholder.Graph active className='hover_load' />
                    <Placeholder.Paragraph active className='hover_load' />
                </div>
            </div>
        </>
    )
}