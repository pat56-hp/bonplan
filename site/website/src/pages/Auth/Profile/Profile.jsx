import React, { useEffect, useState } from 'react'
import { useAuthStateProvider } from '../../../contexts/AuthContextProvider'
import Loader from '../../../components/Loader'
import EditProfile from './EditProfile'

export default function Profile() {

    const {user} = useAuthStateProvider()
    const [isUpdating, setIsUpdating] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const loadData = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 600)
    }

    const handleUpdatingUser = (e) => {
        e.preventDefault();
        setIsUpdating(isUpdating => !isUpdating)
    }

    useEffect (() => {
        loadData()
    }, [])


  return (
    <>
        <section id='profil' className='content-current'>
            {
                isLoading 
                    ? <Loader />
                    : 
                (
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className='mb-4'>Mon profile</h4>
                                <ul id="profile_summary">
                                    <li>Nom <span>{user.name}</span>
                                    </li>
                                    <li>Prénom(s) <span>{user.lastname}</span>
                                    </li>
                                    <li>Email <span>{user.email}</span>
                                    </li>
                                    <li>Contact <span>{user.phone}</span>
                                    </li>
                                    <li>Adresse <span>{user.adresse ?? 'Aucune info'}</span></li>
                                </ul>
                                <a 
                                    href='#' 
                                    title={isUpdating ? 'Fermer le formulaire' : 'Modifier mon profil'}
                                    className={`btn_1 pt-1 pb-2 ${isUpdating ? 'btn_color' : ''}`} 
                                    onClick={handleUpdatingUser}
                                > 
                                    {
                                        !isUpdating
                                            ? <><i className='icon-edit-2'></i></>
                                            : <><i className='icon-cancel-circled2'></i></>
                                    }
                                    
                                </a>
                            </div>
                            <div className="col-md-6">
                                <p>
                                    <img src="img/tourist_guide_pic.jpg" alt="Image" className="img-fluid styled profile_pic" width={200} />
                                </p>
                            </div>
                        </div>
                        {
                            isUpdating && <EditProfile onSetIsUpdating = {setIsUpdating} />
                        }
                    </>
                )
            }            
        </section>
    </>
    
  )
}
