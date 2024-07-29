import React from "react";
import Loader from "../components/Loader";
import Banner from "../components/head/Banner";
import HomeEvent from "../components/HomeEvent";
import Categories from "../components/Categories";
import HomeWeekPlan from "../components/HomeWeekPlan";
import HomePopular from "../components/HomePopular";
import HomeOther from "../components/HomeOther";
import TabScript from "../scripts/TabScript";

const Home = () => {
    return (
        <>
            <Banner />
            <HomeEvent/>
            <Categories/>
            <HomeWeekPlan />
            <HomePopular/>
            <HomeOther/>
            <TabScript />
        </>
    )
}

export default Home