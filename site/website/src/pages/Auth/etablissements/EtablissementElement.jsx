import React, { useState } from 'react'
import ModalAlert from '../modals/ModalAlert'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getRequest } from '../../../queries/sendRequest'
import toast from 'react-hot-toast'
import { useAuthStateProvider } from '../../../contexts/AuthContextProvider'
import { useNavigate } from 'react-router-dom'

export default function EtablissementElement({etablissement, index}) {
    const apiDomain = import.meta.env.VITE_API_DOMAIN
    const {setUser, setToken} = useAuthStateProvider()
    const [openDelete, setOpenDelete] = useState(false)
    const [openStatus, setOpenStatus] = useState(false)
    const navigate = useNavigate()

    const handleOpenDelete = (e) => {
        e.preventDefault();
        setOpenDelete(true)
    };

    const handleOpenStatus = (e) => {
        e.preventDefault()
        setOpenStatus(true)
    };

    const deleteEtablissement = useMutation({
        mutationFn: () => getRequest(`/etablissements/delete`, 'DELETE'),
        mutationKey: ['deleteEtablissement']
    })


  return (
    <>
    <div className="strip_booking" key={index}>
        <div className="row">
            <div className="col-lg-2 col-md-2">
                <div className="img_container">
                    <a href="single_tour.html">
                        <img src={apiDomain + etablissement.image} width="800" height="533" className="img-fluid" alt="image" />
                    </a>
                </div>
            </div>
            <div className="col-lg-6 col-md-5">
                <h3 className="p-0 mt-1">
                    {etablissement.libelle}
                </h3>
                <span className='d-block'><i className='icon-briefcase'></i> {etablissement.category}</span>
                <span className='d-block'><i className='icon-phone-circled'></i>{etablissement.phone}</span>
                <span className='d-block'><i className='icon-location-outline'></i> {etablissement.ville}</span>
            </div>
            <div className="col-lg-2 col-md-3">
                <ul className="info_booking pt-3">
                    <li><strong>Ajouté le</strong> Sat. 23 Dec. 2015</li>
                    <li className='mt-2'>
                        <strong>
                            {
                                etablissement.facebook && 
                                <a target='_blank' href={etablissement.facebook} title='Facebook'><span className='facebook-icon'><i className='icon-facebook-squared-1'></i></span></a>
                            }
                            
                            {
                                etablissement.instagram &&
                                <a target='_blank' href={etablissement.instagram} title='Instagram'><span className='instagram-icon'><i className='icon-instagram-1'></i></span></a>
                            }
                           
                            <span className='gallery-icon' title='Gallerie'><i className='icon-picture-1'></i> {etablissement.total_image}</span>
                        </strong>
                    </li>
                    <li className='mt-2'>
                        <strong className={etablissement.status === 1 ? 'element_actif' : 'element_inactif'}>
                            {etablissement.status === 1 ? 'Activé' : 'Désactivé'}
                        </strong>
                    </li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2">
                <div className="booking_buttons mt-0">
                    <a href="#0" className="btn_2"><i className='icon-pencil-6'></i> Modifier</a>
                    <a href="#0" className="btn_3 btn-status" onClick={handleOpenStatus}>
                        {
                            etablissement.status === 1 
                            ?<><i className='icon-ok-circle'></i> Activer</>
                            : <><i className='icon-cancel-circled-4'></i> Désactiver</>
                        }
                        
                    </a>
                    <a 
                        href="#0"
                        className="btn_3 btn-delete" 
                        onClick={handleOpenDelete}
                    ><i className='icon-trash-7'></i> Supprimer</a>
                </div>
            </div>
        </div>
    </div>
        <ModalAlert
            title = "Action"
            description = "Êtes-vous sûre de vouloir supprimer cet établissement ? La suppression est irréversible."
            icon = "icon-trash-7"
            open = {openDelete}
            onSetOpen = {setOpenDelete}
            data = {etablissement}
            mutation = {openDelete ? deleteEtablissement : openStatus}
        />
    </>
  )
}
