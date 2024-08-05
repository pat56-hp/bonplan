import React, { useEffect } from 'react'
import { useAuthStateProvider } from '../contexts/AuthContextProvider'
import { useNavigate } from 'react-router-dom'

const useAuthToken = () => {
    const {user, token, setToken, setUser} = useAuthStateProvider()
    const navigate = useNavigate()

    const resetToken = () => {
        if (!localStorage.getItem('logU')) {
            setToken(null)
            setUser(null)
            navigate('/login')
        }
    }

    useEffect(() => {
        resetToken()
    }, [token, user])

    return {
        resetToken
    }
}

export default useAuthToken
