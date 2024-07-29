import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { useAuthStateProvider } from '../contexts/AuthContextProvider'

export default function DashboadLayout() {
    const {user, token} = useAuthStateProvider()
    const [info, setInfo] = useState({})
    const [breadcrumbs, setBreadcrumbs] = useState([])
    const [cdashboard, setCdashboard] = useState(true)
    const [cetablissement, setCetablissement] = useState(false)
    const [cfavoris, setCfavoris] = useState(false)
    const [cprofile, setCprofile] = useState(false)
    const [csetting, setCsetting] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    if (!token) {
        navigate('/login')
    }

    const titleOfDashboard = () => {
        setInfo({
            title: 'Tableaud de bord',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Tableau de bord'}
        ])
        setCdashboard(true)
        setCetablissement(false)
        setCfavoris(false)
        setCprofile(false)
        setCsetting(false)
    }

    const titleOfEtablissement = () => {
        setInfo({
            title: 'Mes établissements',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Etablissements'}
        ])
        setCetablissement(true)
        setCdashboard(false)
        setCfavoris(false)
        setCprofile(false)
        setCsetting(false)
    }

    const titleOfWishlist = () => {
        setInfo({
            title: 'Mes favoris',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Mes favoris'}
        ])
        setCfavoris(true)
        setCetablissement(false)
        setCdashboard(false)
        setCprofile(false)
        setCsetting(false)
    }

    const titleOfProfil = () => {
        setInfo({
            title: 'Mon profil',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Mon profil'}
        ])

        setCprofile(true)
        setCfavoris(false)
        setCetablissement(false)
        setCdashboard(false)
        setCsetting(false)
    }

    const titleOfSetting = () => {
        setInfo({
            title: 'Paramètres du compte',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Paramètres du compte'}
        ])

        setCsetting(true)
        setCprofile(false)
        setCfavoris(false)
        setCetablissement(false)
        setCdashboard(false)
    }

    useEffect(() => {
        if (location.pathname === '/tableau-de-bord') titleOfDashboard()
        else if(location.pathname === '/mes-favoris') titleOfWishlist()
        else if(location.pathname === '/mon-profil') titleOfProfil()
        else if(location.pathname === '/mes-etablissements') titleOfEtablissement()
        else if(location.pathname === '/parametres') titleOfSetting()
    }, [])

  return (
    <>
        <Breadcrumbs info={info} breadcrumbs = {breadcrumbs} />
        <div className="margin_60 container">
			<div id="tabs" className="tabs">
				<nav>
					<ul>
					
                        {
                            user.type === 1 
                            &&
                            <>
                                <li className={cdashboard ? 'tab-current' : ''}>
                                    <Link 
                                        to="/tableau-de-bord" 
                                        className="icon-booking"
                                        onClick={titleOfDashboard}
                                    ><span>Tableau de bord</span></Link>
                                </li>
                                <li className={cetablissement ? 'tab-current' : ''}>
                                    <Link 
                                        to="/mes-etablissements" 
                                        className="icon-profile"
                                        onClick={titleOfEtablissement}
                                    ><span>Mes établissements</span></Link>
                                </li>
                            </>
                        }
                        
						<li className={cprofile ? 'tab-current' : ''}>
                            <Link 
                                to="/mon-profil" 
                                className="icon-profile"
                                onClick={titleOfProfil}
                            ><span>Profile</span></Link>
                        </li>
                        <li className={cfavoris ? 'tab-current' : ''}>
                            <Link 
                                to="/mes-favoris" 
                                className="icon-wishlist"
                                onClick={titleOfWishlist}
                            ><span>Mes favoris</span></Link>
                        </li>
                        <li className={csetting ? 'tab-current' : ''}>
                            <Link 
                                to="/parametres" 
                                className="icon-settings"
                                onClick={titleOfSetting}
                            ><span>Paramètres</span></Link>
                        </li>
					</ul>
				</nav>
				<div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}