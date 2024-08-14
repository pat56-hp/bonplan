import React, { useState } from 'react'
import ModalAlert from '../modals/ModalAlert'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { slug } from '../../../scripts/helper'
import { Link, useNavigate } from 'react-router-dom'
import useHttp from '../../../hooks/useHttp'

export default function EtablissementElement({etablissement, index}) {
    const apiDomain = import.meta.env.VITE_API_DOMAIN
    const {sendRequest} = useHttp()
    const [openDelete, setOpenDelete] = useState(false)
    const [openStatus, setOpenStatus] = useState(false)
    const queryClient = useQueryClient();
    const statusMessage = `Êtes-vous sûre de vouloir ${etablissement.status === 1 ? 'désactiver' : 'activer'} cet établissement ?`
    const statusDelete = "Êtes-vous sûre de vouloir supprimer cet établissement ? La suppression est irréversible."
    const navigate = useNavigate()

    //Open modal to delele of etablissement
    const handleOpenDelete = (e) => {
        e.preventDefault();
        setOpenDelete(true)
    };

    //Open modal to update status of etablissement
    const handleOpenStatus = (e) => {
        e.preventDefault()
        setOpenStatus(true)
    };

    //Requette de suppression d'un etablissement
    const deleteEtablissement = useMutation({
        mutationFn: async () => await sendRequest(`/etablissements/delete/${etablissement.id}`, 'DELETE'),
        mutationKey: ['deleteEtablissement'],
        onSuccess: () => {
            queryClient.invalidateQueries('getEtablissents');
        },
    })

    //Requette de modification d'un etablissement
    const queryStatusEtablissement = useMutation({
        mutationFn: async () => sendRequest(`/etablissements/status/${etablissement.id}`, 'PUT'),
        mutationKey: ['statusEtablissement'],
        onSuccess: () => {
            queryClient.invalidateQueries('getEtablissements')
        }
    })

    //Navigate to update etablissemant
    const handleToUpdate = (e) => {
        e.preventDefault()
        const libelle = slug(etablissement.libelle)
        const id = etablissement.id
        navigate(`/mes-etablissements/modification/${id}/${libelle}`)
    }


  return (
    <>
    <div className="strip_booking" key={index}>
        <div className="row">
            <div className="col-lg-2 col-md-2">
                <div className="img_container">
                    <Link to={`/explorer/${slug(etablissement.id + '-' +etablissement.libelle)}`}>
                        <img src={apiDomain + etablissement.image} width="800" height="533" className="img-fluid" alt="image" />
                    </Link>
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
                    <li>{etablissement.created_at}</li>
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
                        <strong>
                            <span className={etablissement.validate === 1 ? 'element_actif' : 'element_inactif'}>
                                {etablissement.validate === 1 ? 'Validé' : (etablissement.validate === 0 ? 'En attente' : 'Refusé')}
                            </span> / 
                            <span className={etablissement.status === 1 ? 'element_actif' : 'element_inactif'}> {etablissement.status === 1 ? 'Actif' : 'Inactif'}</span>
                        </strong>
                    </li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2">
                <div className="booking_buttons mt-0">
                    <a href="#0" className="btn_2" onClick={handleToUpdate}><i className='icon-pencil-6'></i> Modifier</a>
                    <a href="#0" className="btn_3 btn-status" onClick={handleOpenStatus}>
                        {
                            etablissement.status === 1 
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
            data = {etablissement.id}
            mutation = {openDelete ? deleteEtablissement : queryStatusEtablissement}
            successMessage = {openDelete ? "Etablissement supprimé" : (etablissement.status === 1 ? 'Etablissement désactivé' : 'Etablissement Activé')}
        />
    </>
  )
}
