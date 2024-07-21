import React from "react";

export default function EventRelated() {
    return (
        <div className="widget related-products">
            <h4>Top Related </h4>
            {Array.from({length: 3}).map((_,i) => (
                <div className="post" key={i}>
                    <figure className="post-thumb">
                        <a href="#">
                            <img src="img/products/thumb-1.jpg" alt=""/>
                        </a>
                    </figure>
                    <h5><a href="#">Grunge Fashion</a></h5>
                    <div className="rating">
                        <i className="icon-star voted"></i>
                        <i className="icon-star voted"></i>
                        <i className="icon-star voted"></i>
                        <i className="icon-star voted"></i>
                        <i className="icon-star-empty"></i>
                    </div>
                    <div className="price">
                        $ 15.00
                    </div>
                </div>
            ))}
        </div>
    )
}