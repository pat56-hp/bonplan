import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Paginate from "../../components/Paginate";
import PlanFilter from "./filter/PlanFilter";
import { useMutation } from "@tanstack/react-query";
import { Loader, Placeholder } from 'rsuite';
import useHttp from "../../hooks/useHttp";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import PlanItemRow from "./PlanItemRow";
import ElementNotFound from "../../components/ElementNotFound";
import MapPlan from "../../components/map/MapPlan";

export default function Explore (){
    const {sendRequest} = useHttp()
    const [bonplans, setBonPlans] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [openMap, setOpenMap] = useState(true)
    const [meta, setMeta] = useState({})
    const location = useSearchParams()
    const timeOutRef = useRef(null)    

    const breadcrumbs = [
        {label: 'Accueil', link: '/'},
        {label: 'Explorer'}
    ]

    const info = {
        title: 'Explorer nos bons plans',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
    }

    //Recuperation des bonplans en fonction de l'url de la requette
    const getData = useMutation({
        mutationKey: ['getAllEtablissements'],
        mutationFn: async (requestUrl) => await sendRequest(requestUrl),
        onMutate: () => {
            setIsLoading(true)
        },
        onSuccess: ({data}) => {
            const {data : etablissements, meta} = data
            setBonPlans(etablissements)
            setMeta(meta)
            setIsLoading(false)
            toast.remove()
            
        },
        onError: () => setIsLoading(false)
    })

    //Envoie des infos lors du chargement de la page
    const setData = () => {
        setIsLoading(true)
        toast.loading('Chargement...')
        const searchData = Object.fromEntries(location[0])
        submitRequest(searchData)
    }

    //Preparation de la requette
    const submitRequest = (searchData) => {
        timeOutRef.current = setTimeout(() => {
            if (Object.keys(searchData).length > 0) {
                const requestUrl = `/explore-plans?${Object.keys(searchData).map(key => `${key}=${searchData[key]}`).join('&')}`;
                getData.mutate(requestUrl)
            }else{
                const requestUrl = '/explore-plans'
                getData.mutate(requestUrl)
            }
        }, 800);
    }

    //Envoie des infos pour le filtre
    const handleFilter = (data) => {
        setIsLoading(true)
        //toast.loading('Chargement...')
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }

        submitRequest(data)
    }

    useEffect(() => {
        setData()
        return () => {
            clearTimeout(timeOutRef.current)
            toast.remove()
        }
    }, [])

    return (
        <>
            <Breadcrumbs
                breadcrumbs = {breadcrumbs}
                info = {info}
            />

            <div className={`collapse ${openMap && 'show'}`} id="collapseMap">
                <div id="map" className="map">
                    <MapPlan bonplans={bonplans} />
                </div>
            </div>

            <div className="container margin_60">

                <div className="row">
                    <PlanFilter 
                        getData = {getData} 
                        handleFilter = {handleFilter} 
                        onSetOpenMap = {setOpenMap}
                        openMap = {openMap}
                    />

                    <div className="col-lg-9">

                        {
                            isLoading 
                            ? <Chargement />
                            : (
                                bonplans.length > 0 ? bonplans.map((bonplan, key) => (
                                    <PlanItemRow bonplan= {bonplan} key={key}/>
                                ))
                                :
                                <ElementNotFound />
                            )
                        }

                        <Paginate 
                            meta={meta}
                            onSetMeta={setMeta}
                            onSetData = {setBonPlans}
                            pageUrl = '/explore-plans?page='
                        />
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
                        <div className="col-md-4">
                            <Placeholder.Graph width={300} height={200} active className='hover_load' />
                        </div>
                        <div className="col-md-8">
                            <Placeholder.Paragraph active className='hover_load' />
                            <Placeholder.Paragraph active className='hover_load' />
                            <Placeholder.Paragraph active className='hover_load' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}