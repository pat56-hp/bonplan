import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import useHttp from './useHttp'

const useFrontQuery = () => {
    const {sendRequest} = useHttp({isFrontent: true})
    

    const query = useMutation({
        mutationKey : ['query'],
        mutationFn : (url, method='GET', body=null) => sendRequest(url, method, body)
    })

    /**
     * Recuperation des categories
     */
    const getCategories = () => {
        const url = '/categories'
        let data = []
        let isSuccess = false
        let isFetching = false

        
    
        const mutate = query.mutate(url)

        return {
            isFetching,
            isSuccess,
            data
        }
    }

    return {
        getCategories
    }

}

export default useFrontQuery
