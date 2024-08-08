import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import EventFilter from "../../components/EventFilter";
import { ScrollRestoration } from "react-router-dom";

export default function EventShow () {
    ScrollRestoration({})
    const breadcrumbs = [
        {label: 'Accueil', link: '/'},
        {label: 'Evènements', link: '/evenements'},
        {label: 'Details'}
    ]

    const info = {
        title: 'Details d\'un evenement',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula'
    }

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} info={info}/>
            <div className="container margin_60">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="product-details">

                            <div className="basic-details">
                                <div className="row">
                                    <div className="image-column col-sm-6">
                                        <figure className="image-box">
                                            <img src="img/products/image-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="info-column col-sm-6">
                                        <div className="details-header">
                                            <h2>World Travel Guide</h2>
                                            <div className="item-price">
                                                <span className="offer">$20.00</span> $15.00
                                            </div>
                                            <div className="rating">
                                                <i className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star voted"></i><i className="icon-star voted"></i><i
                                                className="icon-star-empty"></i> (3 Customer Reviews)
                                            </div>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet, te eleifend philosophia sea, elitr evertitur
                                                sea id. Has te dictas adversarium. Eum percipitur comprehensam ei. Mel
                                                eu molestiae adolescens scriptorem. Ex labores albucius nec, mel et amet
                                                discere.
                                            </p>
                                        </div>
                                        <div className="other-options">
                                            <div className="numbers-row">
                                                <input
                                                    type="text"
                                                    value="0"
                                                    id="quantity_1"
                                                    className="qty2 form-control"
                                                    name="quantity_1"
                                                />
                                            </div>
                                            <a href="shopping-cart.html" className="btn_1">Add To Cart </a>
                                        </div>
                                        <ul className="item-meta">
                                            <li>
                                                Categories: <a href="#">Books</a> , <a href="#">Magazine</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="product-info-tabs">

                                <div className="prod-tabs" id="product-tabs">
                                    <div className="tab-btns clearfix">
                                        <a href="#prod-description" className="tab-btn active-btn">Product
                                            description</a>
                                    </div>

                                    <div className="tabs-container">
                                        <div className="tab active-tab" id="prod-description">
                                            <h3>Product Description</h3>
                                            <div className="content">
                                                <p>
                                                    Leverage agile frameworks to provide a robust synopsis for high
                                                    level overviews. Iterative approaches to corporate strategy foster
                                                    collaborative thinking to further the overall value proposition.
                                                    Organically grow the holistic world view of disruptive innovation
                                                    via workplace diversity and empowerment.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <EventFilter />
                    </div>
                </div>
            </div>
        </>
    )
}