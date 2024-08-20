import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useHttp from '../../../hooks/useHttp'
import Chargement from '../../../components/Chargement'

export default function CategoryFilter({category, onSetCategory}) {
    const {sendRequest} = useHttp()
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [visibleCount, setVisibleCount] = useState(5);
    const [expanded, setExpanded] = useState(false);
    const timeoutRef = useRef(null)

    const {
        data: getCategories,
        isFetching,
        isSuccess,
    } = useQuery({
        queryKey: ['getCategoriesBanner'],
        queryFn: async () => await sendRequest('/categories')
    })

    const setData = () => {
        if (isFetching) {
            setIsLoading(true)
        }

        timeoutRef.current = setTimeout(() => {
            if (isSuccess) {
                const {data} = getCategories
                setCategories(data.data)
                setIsLoading(false)
            }
        }, 800);   
    }

    const handleChecked = (id, e) => {
        const isChecked = e.target.checked;
    
        if (isChecked) {
            onSetCategory(prev => [...prev, id]);
        } else {
            const updatedCategories = category.filter(cat => cat !== id);
            onSetCategory(updatedCategories);
        }
    };

    const toggleCategories = (e) => {
        e.preventDefault();
        
        setExpanded(!expanded);
        setVisibleCount(expanded ? 5 : categories.length);
    };
    
    useEffect(() => {
        setData()
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [getCategories, isSuccess])

  return (
    <div className="filter_type">
        <h6>Par catégories</h6>
        {
            isLoading 
                ? <Chargement />
                : (
                    <>
                    <ul>
                        {
                            categories.slice(0, visibleCount).map((cat, key) => (
                                <li key = {key}>
                                    <label className="container_check">
                                        {cat.libelle} ({cat.total_entreprise})
                                        <input
                                            type="checkbox"
                                            checked={category.includes(cat.id) ? true : false}
                                            onChange={e => handleChecked(cat.id, e)}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                    <a href="#" className="cat_button_expanded" onClick={toggleCategories}>
                    {
                        expanded
                            ? <><span className="icon-minus"></span> Voir moins</>
                            : <><span className="icon-plus"></span> Voir plus</>
                    }
                    </a>
                </>
                )
        }
    </div>
  )
}

