import React, { useEffect, useRef, useState } from 'react'
import Input from '../../../components/form/Input'
import { Link } from 'react-router-dom'
import EtablissementElement from './EtablissementElement'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Loader from '../../../components/Loader'
import useHttp from '../../../hooks/useHttp'
import { Pagination } from 'rsuite';
import Paginate from '../../../components/Paginate'
import toast from 'react-hot-toast'

export default function Etablissement() {

    const [etablissements, setEtablisements] = useState({})
    const {sendRequest} = useHttp()
    const [meta, setMeta] = useState({})
    const debounceTimeout = useRef(null);

    //Get Etablissement Query
    const {
        data: getEtablissents,
        isFetching: isFetchingEtablissements,
        isSuccess: isSuccessEtablissements,
        isError: isErrorEtablissements,
        error: errorEtablissements
    } = useQuery({
        queryKey: ['getEtablissents'],
        queryFn: async () => await sendRequest('/etablissements'),
    });

    const searchEtablissement = useMutation({
        mutationFn: async (key) => await sendRequest(`/etablissements?key=${key}`),
        mutationKey: ['searchEtablissement'],
        onMutate: () => toast.loading('Patientez...'),
        onSuccess: ({data}) => {
            const datas = data.data
            const meta = data.meta
            setEtablisements(datas);
            setMeta(meta)
            toast.remove()
        }
    })

    //Set data of etablissement
    const getElements = () => {
        if(isSuccessEtablissements) {
            const {data, meta} = getEtablissents.data
            setEtablisements(data);
            setMeta(meta)
        }else if (isErrorEtablissements) {
            console.error('Error fetched Etablissements: ', errorEtablissements.message)
        }
    }

    const handleSearch = (e) => {
        const key = e.target.value;

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);   
        }

        debounceTimeout.current = setTimeout(() => {
            searchEtablissement.mutate(key);
        }, 800);
    };

    useEffect(() => {
        getElements()
    }, [isFetchingEtablissements, getEtablissents])

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, []);

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
                            onChange = {handleSearch}
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
                ? 
                    <>
                        {
                            etablissements.map((etablissement, index) => (
                                <EtablissementElement 
                                    key={index}
                                    etablissement={etablissement} 
                                />
                            ))
                        }
                        
                    </>
                : <div className='text-center'>
                    <h5 className='empty-data'>
                        <i className='icon-info-circled-1'></i> Aucun établissement disponible
                    </h5>
                </div>
            )
        }
        <Paginate 
            meta = {meta}
            onSetMeta = {setMeta}
            onSetData = {setEtablisements}
            pageUrl = "/etablissements?page="
        />
    </section>
  )
}
