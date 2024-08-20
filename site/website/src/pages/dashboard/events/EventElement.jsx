import React, { useState } from 'react'
import ModalAlert from '../modals/ModalAlert'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { slug } from '../../../scripts/helper'
import { Link, useNavigate } from 'react-router-dom'
import useHttp from '../../../hooks/useHttp'

export default function EventElement({event, index}) {
    const apiDomain = import.meta.env.VITE_API_DOMAIN
    const {sendRequest} = useHttp()
    const [openDelete, setOpenDelete] = useState(false)
    const [openStatus, setOpenStatus] = useState(false)
    const queryClient = useQueryClient();
    const statusMessage = `Êtes-vous sûre de vouloir ${event.status === 1 ? 'désactiver' : 'activer'} cet évènement ?`
    const statusDelete = "Êtes-vous sûre de vouloir supprimer cet évènement ? La suppression est irréversible."
    const navigate = useNavigate()

    //Open modal to delele of event
    const handleOpenDelete = (e) => {
        e.preventDefault();
        setOpenDelete(true)
    };

    //Open modal to update status of event
    const handleOpenStatus = (e) => {
        e.preventDefault()
        setOpenStatus(true)
    };

    //Requette de suppression d'un event
    const deleteevent = useMutation({
        mutationFn: async () => await sendRequest(`/evenements/delete/${event.id}`, 'DELETE'),
        mutationKey: ['deletEevent'],
        onSuccess: () => {
            queryClient.invalidateQueries('getEvents');
        },
    })

    //Requette de modification d'un event
    const queryStatusevent = useMutation({
        mutationFn: async () => sendRequest(`/evenements/status/${event.id}`, 'PUT'),
        mutationKey: ['statusEvent'],
        onSuccess: () => {
            queryClient.invalidateQueries('getEvents')
        }
    })

    //Navigate to update etablissemant
    const handleToUpdate = (e) => {
        e.preventDefault()
        const libelle = slug(event.titre)
        const id = event.id
        navigate(`/mes-evenements/modification/${id}/${libelle}`)
    }


  return (
    <>
    <div className="strip_booking" key={index}>
        <div className="row">
            <div className="col-lg-2 col-md-2">
                <div className="img_container">
                    <Link to={`/evenements/${slug(event.id + '-' + event.titre)}`}>
                        <img src={apiDomain + event.image} width="800" height="533" className="img-fluid" alt="image" />
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-5">
                <h3 className="p-0 mt-1">
                    {event.titre}
                </h3>
                <span className='d-block'><i className='icon-briefcase'></i> {event.category}</span>
                <span className='d-block'><i className='icon-phone-circled'></i>{event.contact}</span>
                {
                    (event.whatsapp != 'null' && event.whatsapp !== null) &&
                    <span className='d-block'><i className='icon-phone-circled'></i>{event.whatsapp}</span>
                }
                <span className='d-block'><i className='icon-location-outline'></i> {event.adresse}</span>
            </div>
            <div className="col-lg-2 col-md-3">
                <ul className="info_booking pt-3">
                    <li>{event.created_at}</li>
                    <li className='mt-2'>
                        <strong>
                            {
                                event.facebook && 
                                <a target='_blank' href={event.facebook} title='Facebook'><span className='facebook-icon'><i className='icon-facebook-squared-1'></i></span></a>
                            }
                            
                            {
                                event.instagram &&
                                <a target='_blank' href={event.instagram} title='Instagram'><span className='instagram-icon'><i className='icon-instagram-1'></i></span></a>
                            }
                           
                            <span className='gallery-icon' title='Gallerie'><i className='icon-picture-1'></i> {event.total_gallerie}</span>
                        </strong>
                    </li>
                    <li className='mt-2'>
                        <strong>
                            <span className={event.validate === 1 ? 'element_actif' : 'element_inactif'}>
                                {event.validate === 1 ? 'Validé' : (event.validate === 0 ? 'En attente' : 'Refusé')}
                            </span> / 
                            <span className={event.status === 1 ? 'element_actif' : 'element_inactif'}> {event.status === 1 ? 'Actif' : 'Inactif'}</span>
                        </strong>
                    </li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2">
                <div className="booking_buttons mt-0">
                    <a href="#0" className="btn_2" onClick={handleToUpdate}><i className='icon-pencil-6'></i> Modifier</a>
                    <a href="#0" className="btn_3 btn-status" onClick={handleOpenStatus}>
                        {
                            event.status === 1 
                            ? <><i className='icon-cancel-circled-4'></i> Désactiver</>
                            :<><i className='icon-ok-circle'></i> Activer</>
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
            description = {openDelete ? statusDelete : statusMessage}
            icon = "icon-trash-7"
            open = {openDelete ? openDelete : openStatus}
            onSetOpen = {openDelete ? setOpenDelete : setOpenStatus}
            data = {event.id}
            mutation = {openDelete ? deleteevent : queryStatusevent}
            successMessage = {openDelete ? "Evènement supprimé" : (event.status === 1 ? 'Evènement désactivé' : 'Evènement Activé')}
        />
    </>
  )
}
