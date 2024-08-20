import React, { useEffect, useState } from 'react'
import { useAuthStateProvider } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const useHttp = (props) => {
    const {token, setToken, setUser} = useAuthStateProvider()
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        return () => {
            toast.remove()
        }
    }, [toast])
    
    const sendRequest = async (
        url, 
        method = 'GET',
        body = null
    ) => {

        const urlPath = import.meta.env.VITE_API_URL + url
        
        setError(null)
        setData(null)
        setSuccess(false)

        try {
            const headers = {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }

            if (!(body instanceof FormData)) {
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(urlPath, {
                method: method,
                headers,
                body: body
                        ? body instanceof FormData ? body : JSON.stringify(body)
                        : null
            })

            if (!response.ok) {
                const error = new Error('Http error server ', response.status)
                error.status = response.status
                error.response = await response.json()
                throw error
            }
            
            const responseData =  await response.json();
            setData(responseData)
            setSuccess(true)

            return { success: true, data: responseData };
        } catch (error) {
            setSuccess(false)
            toast.remove()
            if (error.status === 401 || error.status === 419) {
                localStorage.removeItem('logU')
                setToken(null)
                setUser(null)
                if (!props || !props.isFrontend) {
                    toast.error('Oups, votre session a est interrompue. Veuillez vous reconnecter svp.')
                    navigate('/login')
                }
                
            }else if(error.status === 500 || error.status === 404) {
                toast.error('Oups, erreur serveur...')
                setError(error.response)
                console.log(error.response)
            }else{
                console.log(error.message)
                console.log(error.response)
            }

            throw error
        }

    }

    return {
        sendRequest,
        data,
        error,
        success
    }
}

export default useHttp