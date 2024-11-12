import React, { useState } from "react";
import { apiUrl, slug } from "../../scripts/helper";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useHttp from "../../hooks/useHttp";
import toast from "react-hot-toast";

/**
 * Bon plan item
 * @returns {*}
 * @constructor
 */

export default function PlanItem({bonplan}){

    const {sendRequest} = useHttp()
    const [isFavorite, setIsFavorite] = useState(bonplan.favoris)
    const [isLoading, setIsLoading] = useState(false)

    const planMutate = useMutation({
        mutationKey: ['addOrRemoveFavorite'],
        mutationFn: (id) => sendRequest(`/etablissements/favoris/${id}`, 'POST'),
        onMutate: () => setIsLoading(true)
    })

    const handleAddOrRemoveFavorite = (id, e) => {
        e.preventDefault();
        setIsLoading(true)
        
        setTimeout(() => {
            planMutate.mutate(id, {
                onSuccess: ({data}) => {
                    setIsFavorite(data.favoris)
                    data.favoris 
                        ? toast.success('Plan ajouté aux favoris')
                        : toast.success('Plan retiré des favoris')
                        setIsLoading(false)
                }
            })
        }, 600)
    }

    
    return (
        <div className="hotel_container">
            <div className={`ribbon_3 ${!bonplan.open && 'popular' }`}><span>{bonplan.open ? 'Ouvert' : 'Fermé'}</span></div>
            <div className="wishlist">
                <a
                    href="#"
                    className={`tooltip_flip text-white tooltip-effect-1 ${isFavorite ? 'is_favorite' : ''}`}
                    onClick={e => handleAddOrRemoveFavorite(bonplan.id, e)}
                >
                    {
                        isLoading
                            ? <i className='icon-spin5 animate-spin text-white'></i>
                            : <span className="icon-heart"></span>
                    }
                </a>
            </div>
            <div className="img_container">
                <Link to={`/explorer/${slug(bonplan.id + '-' +bonplan.libelle)}`}>
                    <img 
                        src={apiUrl() + bonplan.image} 
                        width="800" 
                        height="533" 
                        className="img-fluid"
                        alt={bonplan.libelle}
                    />
                    <div className="short_info">
                        <i className={bonplan.category_icon}></i>{bonplan.category}
                    </div>
                </Link>
            </div>
            <div className="hotel_title">
                <h3><strong>{bonplan.libelle}</strong></h3>
                <Rating note={bonplan.note}/>
                <div className="view_on_map">
                    <Link to={`/explorer/${slug(bonplan.id + '-' +bonplan.libelle)}`}>Voir l'emplacement</Link>
                </div>
            </div>
        </div>
    )
}