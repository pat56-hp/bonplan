import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import useHttp from '../../../hooks/useHttp'
import { Link } from 'react-router-dom'
import { apiUrl, slug } from '../../../scripts/helper'
import Rating from '../../../components/Rating'
import toast from 'react-hot-toast'

export default function FavorisItem({item}) {
    const {sendRequest} = useHttp()
    const clientQuery = useQueryClient()
    const [isFavorite, setIsFavorite] = useState(item.isFavorite)
    const [isLoading, setIsLoading] = useState(false)

    const planMutate = useMutation({
        mutationKey: ['addOrRemoveFavorite'],
        mutationFn: (id) => sendRequest(`/etablissements/favoris/${id}`, 'POST'),
        onMutate: () => setIsLoading(true),
        onSuccess: () => clientQuery.invalidateQueries('getFavoris')
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
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
        <div className="hotel_container">
            <div className={`ribbon_3 ${!item.open && 'popular' }`}><span>{item.open ? 'Ouvert' : 'Fermé'}</span></div>
            <div className="wishlist">
                <a
                    href="#"
                    className={`tooltip_flip text-white tooltip-effect-1 ${isFavorite ? 'is_favorite' : ''}`}
                    onClick={e => handleAddOrRemoveFavorite(item.id, e)}
                >
                    {
                        isLoading
                            ? <i className='icon-spin5 animate-spin text-white'></i>
                            : <span className="icon-heart"></span>
                    }
                </a>
            </div>
            <div className="img_container">
                <Link to={`/explorer/${slug(item.id + '-' +item.libelle)}`}>
                    <img 
                        src={apiUrl() + item.image} 
                        width="800" 
                        height="533" 
                        className="img-fluid"
                        alt={item.libelle}
                    />
                    <div className="short_info">
                        <i className={item.category_icon}></i>{item.category}
                    </div>
                </Link>
            </div>
            <div className="hotel_title">
                <h3><strong>{item.libelle}</strong></h3>
                <Rating />
                <div className="view_on_map">Voir l'emplacement</div>
            </div>
        </div>
    </div>
  )
}
