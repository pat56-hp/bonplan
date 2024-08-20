import React from "react";
import {Link} from "react-router-dom";
import { apiUrl, getDate, slug } from "../../scripts/helper";

export default function EventItem({event}) {
    return (
        <div className="shop-item col-lg-4 col-md-6 col-sm-6">
            <div className="inner-box">
                <div className="image-box">
                    <figure className="image">
                        <Link to={`/evenements/${slug(event.id + '-' + event.titre)}`}>
                            <img src={apiUrl() + event.image} alt={event.titre}/>
                            <div className="short_info">
                                <i className={event.category_icon}></i>{event.category}
                            </div>
                        </Link>
                    </figure>
                    <div className="item-options clearfix">
                        <a href="shop-single.html" className="btn_shop">
                            <span className="icon-share"></span>
                            <div className="tool-tip">
                                Partager
                            </div>
                        </a>
                        <Link to={`/evenements/${slug(event.id + '-' + event.titre)}`} className="btn_shop">
                            <span className="icon-eye"></span>
                            <div className="tool-tip">
                                Afficher
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="product_description">
                    <h3><Link to={`/evenements/${slug(event.id + '-' + event.titre)}`}>{event.titre}</Link></h3>
                    <div className="price">
                        <span className="debut d-block">
                            <i className="icon-calendar"></i> Du : {getDate(event.debut)}
                        </span>
                        <span className="fin d-block">
                            <i className="icon-calendar"></i> Au :  {getDate(event.fin)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}