import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Paginate from "../components/Paginate";
import PlanFilter from "../components/PlanFilter";
import PlanItemRow from "../components/PlanItemRow";
import PlanFilterSort from "../components/PlanFilterSort";

export default function Explore (){
    const breadcrumbs = [
        {label: 'Accueil', link: '/'},
        {label: 'Explorer'}
    ]

    const info = {
        title: 'Explorer nos bons plans',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
    }

    return (
        <>
            <Breadcrumbs
                breadcrumbs = {breadcrumbs}
                info = {info}
            />

            <div className="collapse" id="collapseMap">
                <div id="map" className="map"></div>
            </div>

            <div className="container margin_60">

                <div className="row">
                    <PlanFilter />

                    <div className="col-lg-9">

                        <PlanFilterSort />

                        {Array.from({length: 5}).map((_, i) => (
                            <PlanItemRow />
                        ))}

                        <Paginate />
                    </div>
                </div>
            </div>
        </>
    )
}