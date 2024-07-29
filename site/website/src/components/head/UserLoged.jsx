import React, {useEffect} from "react";
import {useAuthStateProvider} from "../../contexts/AuthContextProvider";
import {useNavigate} from "react-router-dom";
import {postRequest} from "../../queries/sendRequest";
import {toast} from "react-hot-toast";

/**
 * Composant utilisatateur connecté : dans le header
 * @returns {*}
 * @constructor
 */
export default function UserLoged (){
    const { user, setUser, token, setToken } = useAuthStateProvider()
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        console.log('logout')
        toast.loading('Patientez')
        setTimeout(() => {
            localStorage.removeItem('logU')
            setUser({})
            setToken(null)
            toast.remove()
            navigate('/')
        }, 500)
    }

    //Recuperation des informations de l'utilisateur connecté
    const getUser = () => {
        postRequest('/me')
            .then((data) => {
                setUser(data)
            })
    }

    useEffect(() => {
        if (token) getUser()
    }, [])

    return (
        <li>
            <div className="dropdown dropdown-cart">
                <a
                    href="#"
                    data-bs-toggle="dropdown"
                    className="cart_bt "
                    onClick={logout}
                ><i className=" icon-user-7"></i> { user.lastname } { user.name } </a>
                <ul
                    className="dropdown-menu"
                    id="cart_items"
                >
                    <li>
                        <a href="#">Tableau de bord</a>
                    </li>
                    <li>
                        <a href="#">Favoris</a>
                    </li>
                    <li>
                        <a href="#">Mes services</a>
                    </li>
                    <li>
                        <a 
                            href="#" 
                            onClick={logout}
                            className="button_drop w-100"
                        >Me déconnecter</a>
                    </li>
                
                </ul>
            </div>
        </li>
    )
}