import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useRef, useState } from 'react'
import useHttp from '../../hooks/useHttp'
import Chargement from './Chargement'

export default function CommoditeFilter() {
    const {sendRequest} = useHttp()
    const [commodites, setCommodites] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const timeoutRef = useRef(null)

    const {
        data: getCommodites,
        isFetching,
        isSuccess,
    } = useQuery({
        queryKey: ['getCommodites'],
        queryFn: async () => await sendRequest('/commodites')
    })

    const setData = () => {
        if (isFetching) {
            setIsLoading(true)
        }

        timeoutRef.current = setTimeout(() => {
            if (isSuccess) {
                const {data} = getCommodites
                setCommodites(data.data)
                setIsLoading(false)
            }
        }, 800);   
    }

    useEffect(() => {
        setData()
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [getCommodites, isSuccess])

  return (
    <div className="filter_type">
        <h6>Par commodités</h6>
        {
            isLoading 
                ? <Chargement />
                : (
                    <ul>
                        {
                            commodites.map((commodite, key) => (
                                <li key = {key}>
                                    <label className="container_check">
                                        {commodite.libelle} ({commodite.total_entreprise})
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
