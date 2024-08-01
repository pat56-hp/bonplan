import React, {useEffect} from "react";
import {useAuthStateProvider} from "../../contexts/AuthContextProvider";
import {Link, useNavigate} from "react-router-dom";
import {postRequest} from "../../queries/sendRequest";
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css'
import 'rsuite/Button/styles/index.css';
import toast from "react-hot-toast";

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
            }).catch(err => {
                if (err.status === 401) {
                    localStorage.removeItem('logU')
                    setUser({})
                    setToken(null)
                }
            })
    }

    useEffect(() => {
        if (token) getUser()
        else{
            setUser({})
            setToken(null)
        }
    }, [token])

    return (
        <Dropdown 
            title={user.name + ' ' + user.lastname} 
            icon={<UserIcon />}
            className='userLogedInButton'
        >
            {
                user.type === 1 &&
                <>
                    <Link to={'/tableau-de-bord'}>
                        <Dropdown.Item icon={<DashboardIcon />}>
                            Tableau de bord
                        </Dropdown.Item>
                    </Link>
                    <Link to={'/mes-etablissements'}>
                        <Dropdown.Item icon={<EtablissementIcon />}>
                            Mes établissements
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

function DashboardIcon (){
    return (
        <span className="icon-home-outline"></span>
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