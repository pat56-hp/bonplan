import React, { useEffect, useRef, useState } from 'react'
import Chargement from './Chargement'
import { useQuery } from '@tanstack/react-query'
import useHttp from '../../hooks/useHttp'

export default function CategoryFilter() {
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
                            categories.map((category, key) => (
                                <li key = {key}>
                                    <label className="container_check">
                                        {category.libelle} ({category.total_entreprise})
                                        <input
                                            type="checkbox"
                                            defaultChecked={false}
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

