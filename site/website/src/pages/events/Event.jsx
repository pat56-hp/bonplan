import Breadcrumbs from "../../components/Breadcrumbs";
import React from "react";
import EventFilterSort from "../../components/EventFilterSort";
import Paginate from "../../components/Paginate";
import EventItem from "../../components/EventItem";
import EventFilter from "../../components/EventFilter";

export default function Event(){
    const breadcrumbs = [
        {label: 'Accueil', link : '/'},
        {label: 'Evènements'}
    ]

    const info = {
        title: 'Evènements',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
    }

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} info={info} />

            <div className="container margin_60">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="shop-section">

                            <EventFilterSort />

                            <div className="row">
                                {Array.from({length: 6}).map((_, i) => (
                                    <div className="shop-item col-lg-4 col-md-6 col-sm-6">
                                        <EventItem />
                                    </div>
                                ))}
                            </div>

                            <Paginate />

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