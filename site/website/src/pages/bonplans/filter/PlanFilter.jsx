import React, { useEffect, useRef, useState } from "react";
import { Placeholder } from "rsuite";
import RatingFilter from "./RatingFilter";
import CategoryFilter from "./CategoryFilter";
import CommoditeFilter from "./CommoditeFilter";
import Help from "../../../components/Help";
import Input from "../../../components/form/Input";

export default function PlanFilter ({getData, handleFilter, onSetOpenMap, openMap}){
    const [inputSearch, setInputSearch] = useState(null)
    const [category, setCategory] = useState([])
    const [commodite, setCommodite] = useState([])

    //Ecoute du changement de l'input pour la recherche
    const handleChangeInput = (e) => {
        setInputSearch(e.target.value)
    }

    //Reinitialisation des valeurs
    const handleReset = () => {
        setInputSearch(null)
        setCategory([])
        setCommodite([])
    }

    const handleOpenMap = (e) => {
        e.preventDefault();
        onSetOpenMap(!openMap)
        console.log(openMap)
    }

    useEffect(() => {
        const requestData = {
            libelle : inputSearch,
            category: category,
            commodite: commodite
        }

        if (inputSearch || category.length > 0 || commodite.length > 0) {
            handleFilter(requestData)
        }else 
            getData.mutate('/explore-plans')
        
    }, [inputSearch, category, commodite])


    return (
        <aside className="col-lg-3">
            <p>
                <a onClick={handleOpenMap} className={`btn_map ${openMap && 'bg-black'} `} data-text-original="Afficher la map">
                    {
                        openMap ? "Cacher la map" : "Afficher la map"
                    } 
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
                            onChange = {handleChangeInput}
                        />
                    </div>
                    {/* <RatingFilter /> */}
                    <CategoryFilter category = {category} onSetCategory = {setCategory} />
                    <CommoditeFilter commodite = {commodite} onSetCommodite = {setCommodite} />
                    {
                        (inputSearch ||
                        category.length > 0 ||
                        commodite.length > 0) &&
                        <button className="btn_3 w-100" onClick={handleReset}>Réinitialiser la recherche</button>
                    }
                    
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