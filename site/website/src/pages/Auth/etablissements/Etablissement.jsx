import React, { useEffect, useState } from 'react'
import Input from '../../../components/form/Input'
import { Link, useNavigate } from 'react-router-dom'
import EtablissementElement from './EtablissementElement'
import { useQuery } from '@tanstack/react-query'
import { getRequest } from '../../../queries/sendRequest'
import toast from 'react-hot-toast'
import Loader from '../../../components/Loader'
import { useAuthStateProvider } from '../../../contexts/AuthContextProvider'

export default function Etablissement() {

    const [etablissements, setEtablisements] = useState({})
    const {setUser, setToken} = useAuthStateProvider()
    const navigate = useNavigate()

    //Get Etablissement Query
    const {
        data: getEtablissents,
        isFetching: isFetchingEtablissements,
        isSuccess: isSuccessEtablissements,
        isError: isErrorEtablissements,
        error: errorEtablissements
    } = useQuery({
        queryKey: ['getEtablissents'],
        queryFn: () => getRequest('/etablissements')
    });
    
    useEffect(() => {
        if(isSuccessEtablissements) {
            setEtablisements(getEtablissents.data);
        }
        if (isErrorEtablissements) {
            console.error('Error fetched Etablissements: ', errorEtablissements)
            if(errorEtablissements.status === 401 || errorEtablissements.status === 419){
                setUser(null)
                setToken(null)
                navigate('/login')
            }

            toast.error('Oups, une erreur s\'est produite. Veuillez rééssayer svp...')
        }
    }, [isFetchingEtablissements, getEtablissents])

  return (
    <section id='etablissements' className='content-current'>
        <div className="row mb-3">
            <div className="col-md-6">
                <h4 className=''>Mes établissements</h4>
            </div>
        </div>
        <div className='row mb-5 pb-3 border-bottom'>
            <div className='col-md-6'>
                <Link to={'/mes-etablissements/nouveau'} className='btn_1'><i className='icon-plus-circled'></i> Ajouter un établissement</Link>
            </div>
            <div className='col-md-6'>
                <div className='text-end'>
                    <label>
                        <Input 
                            placeholder='Rechercher...'
                            otherClass = ''
                        />
                    </label>
                </div>
            </div>
        </div>
        {
            isFetchingEtablissements 
            ? <Loader />
            : (
                etablissements.length > 0
                ? etablissements.map((etablissement, index) => (
                    <EtablissementElement 
                        key={index}
                        etablissement={etablissement} 
                    />
                ))
                : <div className='text-center'>
                    <h5 className='empty-data'>
                        <i className='icon-info-circled-1'></i> Aucun établissement disponible
                    </h5>
                </div>
            )
        }
    </section>
  )
}
