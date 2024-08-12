import React, {useEffect, useState} from "react";
import {useAuthStateProvider} from "../../contexts/AuthContextProvider";
import {Link, useNavigate} from "react-router-dom";
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css'
import 'rsuite/Button/styles/index.css';
import toast from "react-hot-toast";
import useHttp from "../../hooks/useHttp";
import { useMutation, useQuery } from "@tanstack/react-query";

/**
 * Composant utilisatateur connecté : dans le header
 * @returns {*}
 * @constructor
 */
export default function UserLoged (){
    const { user, setUser, token, setToken } = useAuthStateProvider()
    const {sendRequest} = useHttp()
    const [isLoading, setIsLoading] = useState(true)
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
    const getUser = useMutation({
        mutationFn: async () => await sendRequest('/me', 'POST'),
        mutationKey: ['getUser'],
        onSuccess: ({data}) => {
            setUser(data)
            setIsLoading(false)
        },
        onMutate: () => {
            setIsLoading(true)
        }
    })

    useEffect(() => {
        if (token) getUser.mutate()
        else{
            setUser(null)
            setToken(null)
            localStorage.removeItem('logU')
        }
    }, [token])

    return (
        <Dropdown 
            title={!isLoading && (user.name + ' ' + user.lastname)} 
            icon={isLoading ? <LoadIngIcon /> : <UserIcon />}
            className='userLogedInButton'
        >
            {
                user.type === 1 &&
                <>
                    <Link to={'/mes-etablissements'}>
                        <Dropdown.Item icon={<EtablissementIcon />}>
                            Mes établissements
                        </Dropdown.Item>
                    </Link>
                    <Link to={'/mes-evenements'}>
                        <Dropdown.Item icon={<EventIcon />}>
                            Mes évènements
                        </Dropdown.Item>
                    </Link>
                </>
            }
            <Link to={'/mon-profil'}>
                <Dropdown.Item icon={<UserIcon />}>
                    Mon profil
                </Dropdown.Item>
            </Link>
            <Link to={'/mes-favoris'}>
                <Dropdown.Item icon={<HeartIcon />}>
                    Mes favoris
                </Dropdown.Item>
            </Link>
            <a href="#" onClick={logout}>
                <Dropdown.Item icon={<LogoutIcon />}>
                    Déconnexion
                </Dropdown.Item>
            </a>
        </Dropdown>
    )
}

function UserIcon() {
    return (
        <span className="icon-user-7"></span>
    )
}

function HeartIcon () {
    return (
        <span className="icon-heart-empty"></span>
    );
}

function EventIcon (){
    return (
        <span className="icon-calendar"></span>
    )
}

function LogoutIcon (){
    return (
        <span className="icon-logout-1"></span>
    )
}

function EtablissementIcon(){
    return (
        <span className="icon-building"></span>
    )
}

function LoadIngIcon(){
    return (
        <span className="icon-spin5 animate-spin"></span>
    )
}