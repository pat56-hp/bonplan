import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { Input, Placeholder } from "rsuite";
import useHttp from "../../hooks/useHttp";
import RatingFilter from "./RatingFilter";
import CategoryFilter from "./CategoryFilter";
import CommoditeFilter from "./CommoditeFilter";
import Help from "../Help";

export default function PlanFilter (){
    
    return (
        <aside className="col-lg-3">
            <p>
                <a className="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false"
                   aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">Afficher la map
                </a>
            </p>

            <div id="filters_col">
                <a data-bs-toggle="collapse" href="#collapseFilters" aria-expanded="false"
                   aria-controls="collapseFilters" id="filters_col_bt"><i
                    className="icon_set_1_icon-65"></i>Filtres</a>
                <div className="collapse show" id="collapseFilters">
                    <div className="filter_type">
                        <h6 className="mb-2">Par libéllé ou adresse</h6>
                        <Input
                            placeholder="Rechercher..."
                        />
                    </div>
                    <RatingFilter />
                    <CategoryFilter />
                    <CommoditeFilter />
                </div>
            </div>
            <Help />
        </aside>
    )
}

const Chargement = () => {
    return (
        <Placeholder.Paragraph active={true} />
    )
}