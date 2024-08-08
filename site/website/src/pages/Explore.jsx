import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Paginate from "../components/Paginate";
import PlanFilter from "../components/filter/PlanFilter";
import PlanItemRow from "../components/PlanItemRow";
import PlanFilterSort from "../components/PlanFilterSort";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Placeholder } from 'rsuite';
import useHttp from "../hooks/useHttp";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export default function Explore (){
    const {sendRequest} = useHttp()
    const [bonplans, setBonPlans] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [meta, setMeta] = useState({})
    const location = useSearchParams()
    const timeOutRef = useRef()

    const breadcrumbs = [
        {label: 'Accueil', link: '/'},
        {label: 'Explorer'}
    ]

    const info = {
        title: 'Explorer nos bons plans',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
    }

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

    const setData = () => {
        setIsLoading(true)
        toast.loading('Chargement...')
        timeOutRef.current = setTimeout(() => {
            const searchData = Object.fromEntries(location[0])

            if (Object.keys(searchData).length > 0) {
                const requestUrl = `/explore-plans?${
                    Object.keys(searchData).map((key, index) => index === 0 ? `${key}=${searchData[key]}` : `&${key}=${searchData[key]}`)
                }`

                getData.mutate(requestUrl.replace(',', ''))
            }else{
                const requestUrl = '/explore-plans'
                getData.mutate(requestUrl)
            }
        }, 800);
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

            <div className="collapse" id="collapseMap">
                <div id="map" className="map"></div>
            </div>

            <div className="container margin_60">

                <div className="row">
                    <PlanFilter />

                    <div className="col-lg-9">

                        {
                            isLoading 
                            ? <Chargement />
                            : (
                                bonplans.length > 0 ? bonplans.map((bonplan, key) => (
                                    <PlanItemRow bonplan= {bonplan} key={key}/>
                                ))
                                :
                                <div className='text-center my-5'>
                                    <h5 className='empty-data'>
                                        <i className='icon-info-circled-1'></i> Oups, aucun bon plan trouvé
                                    </h5>
                                </div>
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