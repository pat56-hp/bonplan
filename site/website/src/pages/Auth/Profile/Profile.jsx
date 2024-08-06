import React, { useEffect, useState } from 'react'
import { useAuthStateProvider } from '../../../contexts/AuthContextProvider'
import Loader from '../../../components/Loader'
import EditProfile from './EditProfile'
import Setting from './Setting'

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
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h4 className='mb-4 d-flex justify-content-between'>
                                    Mon profile
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
                                </h4>
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
                                
                            </div>
                        </div>
                        {
                            isUpdating && <EditProfile onSetIsUpdating = {setIsUpdating} />
                        }
                        <div className="divider"></div>
                        <Setting />
                    </>
                )
            }            
        </section>
    </>
    
  )
}
