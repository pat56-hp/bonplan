import React from "react";
import PlanItem from "./PlanItem";

const HomePopular = () => {
    return (
        <div className="white_bg">
            <div className="container margin_60">
                <div className="main_title">
                    <h2>Les meilleurs plans</h2>
                    <p>
                        Explorez nos plans populaires, choisis par une majorité
                    </p>
                </div>
                <div id="tabs" className="tabs">
                    <nav>
                        <ul>
                            <li><a href="#section-1" className="icon-tours"><span>Tours</span></a></li>
                            <li><a href="#section-2" className="icon-hotels"><span>Hotels</span></a></li>
                            <li><a href="#section-3" className="icon-restaurants"><span>Restaurants</span></a></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <section id="section-1">
                            <div className="row list_hotels_tabs">
                                {
                                    Array.from({length:3}, (_, i) => (
                                        <div className="col-lg-4 col-md-6" key={i}>
                                            <PlanItem />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                        <section id="section-2">
                            <div className="row list_hotels_tabs">
                                {
                                    Array.from({length:3}, (_, i) => (
                                        <div className="col-lg-4 col-md-6" key={i}>
                                            <PlanItem />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                        <section id="section-3">
                            <div className="row list_hotels_tabs">
                                {
                                    Array.from({length:3}, (_, i) => (
                                        <div className="col-lg-4 col-md-6" key={i}>
                                            <PlanItem />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                </div>

                <div className="banner colored">
                    <h4>Discover our Top tours <span>from $34</span></h4>
                    <p>
                        Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in.
                    </p>
                    <a href="single_tour.html" className="btn_1 white">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default HomePopular