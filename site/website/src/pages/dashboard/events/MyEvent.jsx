import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/form/Input'
import ElementNotFound from '../../../components/ElementNotFound'
import useHttp from '../../../hooks/useHttp'
import { useMutation, useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import EventElement from './EventElement'
import Paginate from '../../../components/Paginate'
import Loader from '../../../components/Loader'

export default function MyEvent() {
    const [events, setEvents] = useState({})
    const {sendRequest} = useHttp()
    const [meta, setMeta] = useState({})
    const debounceTimeout = useRef(null);

    const {
        data: getEvents,
        isFetching: isFetchingEvents,
        isSuccess: isSuccessEvents,
        isError: isErrorEvents,
        error: errorEvents
    } = useQuery({
        queryKey: ['getEvents'],
        queryFn: () => sendRequest('/evenements'),
    });

    const searchEvent = useMutation({
        mutationFn: (key) => sendRequest(`/evenements?key=${key}`),
        mutationKey: ['searchEvent'],
        onMutate: () => toast.loading('Patientez...'),
        onSuccess: ({data}) => {
            console.log(data)
            const datas = data.data
            const meta = data.meta
            setEvents(datas);
            setMeta(meta)
            toast.remove()
        }
    })

    const getElements = () => {
        if(isSuccessEvents) {
            const {data, meta} = getEvents.data
            setEvents(data);
            setMeta(meta)
        }else if (isErrorEvents) {
            console.error('Error fetched Events: ', errorEvents.message)
        }
    }

    const handleSearch = (e) => {
        const key = e.target.value;

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);   
        }

        debounceTimeout.current = setTimeout(() => {
            searchEvent.mutate(key);
        }, 800);
    };

    useEffect(() => {
        getElements()
    }, [isFetchingEvents, getEvents])

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, []);

  return (
    <section id='etablissements' className='content-current'>
        <div className="row mb-4 pb-3 border-bottom">
            <div className="col-md-12">
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className='mb-3'>
                        <h4 className=''>Mes évènements</h4>
                        <span className='section_sub_title'><i className='icon-info-circled'></i> Cette section est utilisée pour la gestion de vos évènements</span>
                    </div>
                    <div className='d-flex justify-content-between gap-2'>
                        <div className=''>
                            <Link to={'/mes-evenements/ajouter'} className='btn_1 mb align-items-center d-flex' style={{height : '40px'}}>
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
            isFetchingEvents
            ? <Loader />
            : (
                <>
                <div className='mb-4'>
                    <h6 className='text-end'>Total : <span>{meta.total}</span></h6>
                </div>
                {
                    events.length > 0
                    ? 
                        <>
                            {
                                events.map((event, index) => (
                                    <EventElement 
                                        key={index}
                                        event={event} 
                                    />
                                ))
                            }
                            
                        </>
                    : <ElementNotFound />
                }
                </>
            )
        }
        <Paginate 
            meta = {meta}
            onSetMeta = {setMeta}
            onSetData = {setEvents}
            pageUrl = "/events?page="
        />
    </section>
  )
}
