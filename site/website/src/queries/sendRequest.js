/**
 * Send post Request
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
import {toast} from "react-hot-toast";

const postRequest  = async (url, data= {}) =>  {
    const urlPath = import.meta.env.VITE_API_URL + url
    const token = localStorage.getItem('logU')
    try {
        const resp = await fetch(urlPath, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(data)
        })

        if (!resp.ok) {
            const errorData = await resp.json();
            const error = new Error(`HTTP error! status: ${resp.status}`);
            error.status = resp.status;
            error.response = errorData;
            throw error;
        }

        return await resp.json();
    }catch (error) {
        console.error('Request failed:', error);

        if (error.status === 401) localStorage.removeItem('logU')
        if (error.status === 404) toast.error('Oups, url invalide')
        if (error.status === 400) toast.error('Oups, une s\'est produite sur le server')
        throw error;
    }

}


/**
 * Send get Request
 * @param url
 * @returns {Promise<any>}
 */
const getRequest = async (url) => {
    const urlPath = import.meta.env.VITE_API_URL + url
    const token = localStorage.getItem('logU')
    try {
        const resp = await fetch(urlPath, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })

        if(!resp.ok){
            const errorData = await resp.json()
            const error = new Error(`HTTP error! status: ${resp.status}`)
            error.status = resp.status
            error.response = errorData
            throw error
        }

        return await resp.json()
    }catch (error) {
        console.error('Request failed:', error);
        if (error.status === 401) localStorage.removeItem('logU')
        if (error.status === 404) toast.error('Oups, url invalide')
        if (error.status === 400) toast.error('Oups, une s\'est produite sur le server')
        throw error;
    }
}

export {
    postRequest, getRequest
}