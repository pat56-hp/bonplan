import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate} from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { useAuthStateProvider } from '../contexts/AuthContextProvider'
import useAuthToken from '../hooks/useAuthToken'

export default function DashboadLayout() {
    const {user, token} = useAuthStateProvider()
    const { resetToken } = useAuthToken()
    const [info, setInfo] = useState({})
    const [breadcrumbs, setBreadcrumbs] = useState([])
    const [cdashboard, setCdashboard] = useState(true)
    const [cetablissement, setCetablissement] = useState(false)
    const [cfavoris, setCfavoris] = useState(false)
    const [cprofile, setCprofile] = useState(false)
    const [cproduct, setCproduct] = useState(false)
    const [cevent, setCevent] = useState(false)
    const [corder, setCorder] = useState(false)
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
        setCproduct(false)
        setCevent(false)
        setCorder(false)
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
        setCproduct(false)
        setCevent(false)
        setCorder(false)
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
        setCproduct(false)
        setCevent(false)
        setCorder(false)
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
        setCproduct(false)
        setCevent(false)
        setCorder(false)
    }

    const titleOfProduct = () => {
        setInfo({
            title: 'Mes produits',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Mes produits'}
        ])

        setCproduct(true)
        setCprofile(false)
        setCfavoris(false)
        setCetablissement(false)
        setCdashboard(false)
        setCevent(false)
        setCorder(false)
    }

    const titleOfEvent = () => {
        setInfo({
            title: 'Mes évènements',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Mes évènements'}
        ])

        setCevent(true)
        setCproduct(false)
        setCprofile(false)
        setCfavoris(false)
        setCetablissement(false)
        setCdashboard(false)
        setCorder(false)
    }

    const titleOfOrder = () => {
        setInfo({
            title: 'Mes reservations',
            subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
        })

        setBreadcrumbs([
            {label: 'Accueil', link : '/'},
            {label: 'Mes reservations'}
        ])

        setCevent(false)
        setCproduct(false)
        setCprofile(false)
        setCfavoris(false)
        setCetablissement(false)
        setCdashboard(false)
        setCorder(true)
    }

    
    useEffect(() => {
        const parentPath = location.pathname.split('/').slice(0, 2).join('/')
        if (location.pathname === '/tableau-de-bord') titleOfDashboard()
        else if(location.pathname === '/mes-favoris') titleOfWishlist()
        else if(location.pathname === '/mon-profil') titleOfProfil()
        else if(location.pathname === '/mes-etablissements' || parentPath === '/mes-etablissements') titleOfEtablissement()
        else if(location.pathname === '/mes-evenements') titleOfEvent()
        else if(location.pathname === '/mes-reservations') titleOfOrder()

    }, [location, user])

    useEffect(() => {
        resetToken()
    }, [token])

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
                                {/* <li className={cdashboard ? 'tab-current' : ''}>
                                    <Link 
                                        to="/tableau-de-bord" 
                                        className="icon-home"
                                        onClick={titleOfDashboard}
                                    ><span>Tableau de bord</span></Link>
                                </li> */}
                                <li className={cetablissement ? 'tab-current' : ''}>
                                    <Link 
                                        to="/mes-etablissements" 
                                        className="icon-icon-briefcase"
                                        onClick={titleOfEtablissement}
                                    ><span>Mes établissements</span></Link>
                                </li>
                                <li className={cevent ? 'tab-current' : ''}>
                                    <Link 
                                        to="/mes-evenements" 
                                        className="icon-newspaper"
                                    ><span>Mes Evènements</span></Link>
                                </li>
                                {/* <li className={corder ? 'tab-current' : ''}>
                                    <Link 
                                        to="/mes-reservations" 
                                        className="icon-bag"
                                    ><span>Mes Réservations</span></Link>
                                </li> */}
                            </>
                        }
                        
						<li className={cprofile ? 'tab-current' : ''}>
                            <Link 
                                to="/mon-profil" 
                                className="icon-profile"
                                onClick={titleOfProfil}
                            ><span>Mon profile</span></Link>
                        </li>
                        <li className={cfavoris ? 'tab-current' : ''}>
                            <Link 
                                to="/mes-favoris" 
                                className="icon-wishlist"
                                onClick={titleOfWishlist}
                            ><span>Mes favoris</span></Link>
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