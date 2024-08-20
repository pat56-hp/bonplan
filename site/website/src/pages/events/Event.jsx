import Breadcrumbs from "../../components/Breadcrumbs";
import React, { useEffect, useRef, useState } from "react";
import Paginate from "../../components/Paginate";
import { useQuery } from "@tanstack/react-query";
import useHttp from "../../hooks/useHttp";
import toast from "react-hot-toast";
import { Placeholder } from "rsuite";
import ElementNotFound from "../../components/ElementNotFound";
import EventFilter from "./filter/EventFilter";
import EventItem from "./EventItem";

export default function Event(){
    const {sendRequest} = useHttp()
    const [events, setEvents] = useState([])
    const [meta, setMeta] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const timeOutRef = useRef()

    const breadcrumbs = [
        {label: 'Accueil', link : '/'},
        {label: 'Evènements'}
    ]

    const info = {
        title: 'Evènements',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
    }

    const {
        data: getEvents,
        isSuccess,
        isFetching
    } = useQuery({
        queryKey: ['getEvents'],
        queryFn: () => sendRequest('/events')
    })

    const setData = () => {
        if (isFetching) {
            setIsLoading(true)
            toast.loading('Chargement...')
        }

        timeOutRef.current = setTimeout(() => {
            if (isSuccess && getEvents) {
                const {data, meta} = getEvents.data
                setMeta(meta)
                setEvents(data)
                setIsLoading(false)
                toast.remove()
            }
        }, 800)
    }

    useEffect(() => {
        setData()
        return () => {
            clearTimeout(timeOutRef.current)
        }
    }, [getEvents, isSuccess])

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} info={info} />

            <div className="container margin_60">
                <div className="row">
                <div className="col-lg-3">
                        <EventFilter
                            onSetIsLoading = {setIsLoading}
                            onSetEvents = {setEvents}
                            onSetMeta = {setMeta}
                        />
                    </div>
                    <div className="col-lg-9">
                        <div className="shop-section">
                            <div className="row">
                                {
                                    isLoading 
                                        ? <Chargement />
                                        : (
                                            
                                            events.length > 0 ?
                                                events.map((event, key) => (                                               
                                                    <EventItem key={key} event={event} />
                                                ))
                                            : <ElementNotFound />
                                        )
                                }
                            </div>

                            <Paginate />

                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

function Chargement(){
    return (
        <>
            <div className="white_bg">
                <div className="container margin_60">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Placeholder.Graph  active className='hover_load' />
                            <Placeholder.Paragraph active className='hover_load' />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Placeholder.Graph active className='hover_load' />
                            <Placeholder.Paragraph active className='hover_load' />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Placeholder.Graph active className='hover_load' />
                            <Placeholder.Paragraph active className='hover_load' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}