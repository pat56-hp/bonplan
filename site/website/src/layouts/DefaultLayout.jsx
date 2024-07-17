import React from 'react';
import Header from "../components/head/Header";
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer";

const DefaultLayout = () =>{
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout