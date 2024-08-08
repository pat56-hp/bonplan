import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/head/Banner";
import HomeEvent from "../components/HomeEvent";
import Categories from "../components/Categories";
import HomeWeekPlan from "../components/HomeWeekPlan";
import HomeOther from "../components/HomeOther";
import TabScript from "../scripts/TabScript";
import { Placeholder } from 'rsuite';
import { useMutation, useQuery } from "@tanstack/react-query";
import useHttp from "../hooks/useHttp";
import toast from "react-hot-toast";

const Home = () => {
    const {sendRequest} = useHttp()
    const [categories, setCategories] =  useState([])
    const [bonPlans, setBonPlans] = useState([])
    const [recommandes, setRecommandes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const timeOutRef = useRef()

    const {
        data: getData,
        isFetching,
        isSuccess
    } = useQuery({
        queryKey: ['getHomeData'],
        queryFn: () => sendRequest('/home-datas')
    })

    const setData = () => {
        if (isFetching) {
            setIsLoading(true);
            toast.loading('Chargement...');
        }
    
        timeOutRef.current = setTimeout(() => {
            if (isSuccess && getData) {
                const { data } = getData;
                setCategories(data.categories);
                setBonPlans(data.bonPlans);
                setRecommandes(data.recommandes);
                setIsLoading(false);
                toast.remove();
            }
        }, 800);
    }

    useEffect(() => {
        setData()
        return () => {
            clearTimeout(timeOutRef.current)
        }
    }, [getData])

    return (
        <>
            <Banner />
            {
                isLoading ? <Chargement />
                : <>
                    <HomeEvent/>
                    <Categories datas = {categories}/>
                    <HomeWeekPlan datas = {recommandes} />
                    <HomeOther datas = {bonPlans}/>
                </>
            }
            
        </>
    )
}

export default Home

function Chargement(){
    return (
        <>
            <div className="white_bg">
                <div className="container margin_60">
                    <Placeholder.Graph active className='hover_load' />
                    <Placeholder.Paragraph active className='hover_load' />
                </div>
            </div>
        </>
    )
}