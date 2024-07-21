import React from "react";
import {Link} from "react-router-dom";

export default function EventItem() {
    return (
        <div className="inner-box">
            <div className="image-box">
                <figure className="image">
                    <Link to={'/details-evenement'}>
                        <img src="img/products/image-1.jpg" alt=""/>
                    </Link>
                </figure>
                <div className="item-options clearfix">
                    <a href="shopping-cart.html" className="btn_shop">
                        <span className="icon-basket"></span>
                        <div className="tool-tip">
                            Add to cart
                        </div>
                    </a>
                    <a href="shop-single.html" className="btn_shop">
                        <span className="icon-heart-8"></span>
                        <div className="tool-tip">
                            Add to Fav
                        </div>
                    </a>
                    <Link to={'/details-evenement'} className="btn_shop">
                        <span className="icon-eye"></span>
                        <div className="tool-tip">
                            View
                        </div>
                    </Link>
                </div>
            </div>
            <div className="product_description">
                <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star-empty"></i>
                </div>
                <h3><a href="shop-single.html">Travel Book</a></h3>
                <div className="price">
                    <span className="offer">$20.00</span> $15.00
                </div>
            </div>
        </div>
    )
}