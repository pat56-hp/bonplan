import { API_URL } from "@/utils/env"

export const loginUser = async (credentials) => {

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
    
        const data = await response.json()

        if (!response.ok) {
            const error = new Error('Http error ', response.status)
            error.status = response.status
            error.response = data
            throw error
        }

        return data
    } catch (error) {
        console.log(error)
        throw error
    }
    
}

export const register = () => {}

export const resetPassword = () => {}