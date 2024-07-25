import React, {useEffect, useState} from "react";
import {useAuthStateProvider} from "../contexts/AuthContextProvider";
import {useNavigate} from "react-router";
import {postRequest} from "../queries/sendRequest";

/**
 * Composant utilisatateur connecté : dans le header
 * @returns {*}
 * @constructor
 */
export default function UserLoged (){
    const { user, setUser, token } = useAuthStateProvider()
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('logU')
        navigate('/')
    }

    const handleHover = () => {

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
                    href="#0"
                    data-bs-toggle="dropdown"
                    className="cart_bt"
                    onBlur={handleHover}
                ><i className=" icon-user-7"></i> { user.lastname } { user.name }</a>
                <ul className="dropdown-menu" id="cart_items">
                    <li>
                        <div className="image"><img src="img/thumb_cart_1.jpg" alt="image" /></div>
                        <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                    </li>
                    <li>
                        <div className="image"><img src="img/thumb_cart_2.jpg" alt="image"/></div>
                        <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                    </li>
                    <li>
                        <div className="image"><img src="img/thumb_cart_3.jpg" alt="image"/></div>
                        <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                    </li>
                    <li>
                        <a href="#" onClick={logout} className="button_drop outline w-100">Se déconnecter</a>
                    </li>
                </ul>
            </div>
        </li>
    )
}