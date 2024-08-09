import React, { useEffect, useRef, useState } from 'react'
import Chargement from './Chargement'
import { useQuery } from '@tanstack/react-query'
import useHttp from '../../../hooks/useHttp'

export default function CategoryFilter({category, onSetCategory}) {
    const {sendRequest} = useHttp()
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
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
                    <ul>
                        {
                            categories.map((cat, key) => (
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
                )
        }
    </div>
  )
}

