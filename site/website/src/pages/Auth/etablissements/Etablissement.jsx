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
        <div className="row mb-5 pb-3 border-bottom">
            <div className="col-md-12">
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className='mb-3'>
                        <h4 className=''>Mes établissements</h4>
                        <span className='section_sub_title'><i className='icon-info-circled'></i> Cette section est utilisée pour la gestion de vos établissements</span>
                    </div>
                    <div className='d-flex justify-content-between gap-2'>
                        <div className=''>
                            <Link to={'/mes-etablissements/ajouter'} className='btn_1 mb align-items-center d-flex' style={{height : '40px'}}>
                                <i className='icon-plus-circled'></i> Ajouter
                            </Link>
                        </div>
                        <Input 
                            placeholder='Rechercher...'
                            otherClass = ''
                            onChange = {handleSearch}
                        />
                    </div>
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
