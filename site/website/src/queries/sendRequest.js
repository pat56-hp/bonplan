/**
 * Send post Request
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
import {toast} from "react-hot-toast";

const postRequest  = async (url, data= {}, method = 'POST') =>  {
    const urlPath = import.meta.env.VITE_API_URL + url
    const token = localStorage.getItem('logU')
    const headers = {
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' + token
    };

    //Ajouter content type lorsqu'il ne s'agit pas de data provenant de formData
    if (!(data instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    
    try {
        const resp = await fetch(urlPath, {
            method: method,
            headers: headers,
            body: data instanceof FormData ? data : JSON.stringify(data)
        })

        if (!resp.ok) {
            const errorData = await resp.json();
            const error = new Error(`HTTP error! status: ${resp.status}`);
            error.status = resp.status;
            error.response = errorData;
            console.log("Error Data:", errorData);
            console.log("Error Status:", error.status);
            throw error;
        }

        return await resp.json();
    }catch (error) {
        console.error('Request failed:', error);
        toast.remove()
        if (error.status === 404) toast.error('Oups, url invalide')
        else if (error.status === 400) toast.error('Oups, une s\'est produite sur le server')
        else if (error.status === 500) {
            toast.error('Oups, erreur server')
            console.log(error.response)
        }
        else if(error.status === 419 || error.status === 401) {
            //toast.error('Oups, votre session a été interrompue...')
            localStorage.removeItem('logU')
        }

        throw error;
    }

}

/**
 * Send get Request
 * @param url
 * @returns {Promise<any>}
 */
const getRequest = async (url, method = 'GET') => {
    const urlPath = import.meta.env.VITE_API_URL + url
    const token = localStorage.getItem('logU')
    try {
        const resp = await fetch(urlPath, {
            method: method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
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
        toast.remove()
        if (error.status === 404) toast.error('Oups, url invalide')
            else if (error.status === 400) toast.error('Oups, une s\'est produite sur le server')
            else if (error.status === 500) {
                toast.error('Oups, erreur server')
                console.log(error.response)
            }
            else if(error.status === 419 || error.status === 401) {
                //toast.error('Oups, votre session a été interrompue...')
                localStorage.removeItem('logU')
            }
        
        throw error;
    }
}

export {
    postRequest, getRequest
}