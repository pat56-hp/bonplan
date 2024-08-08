import React from 'react';
import Header from "../components/head/Header";
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer";
import ScrollToTop from '../components/ScrollToTop';

const DefaultLayout = () =>{

    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout