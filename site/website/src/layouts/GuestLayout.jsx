import React, { useEffect } from "react";
import {useAuthStateProvider} from "../contexts/AuthContextProvider";
import {Outlet, useNavigate} from 'react-router-dom'
import Header from "../components/head/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const GuestLayout = () => {

    const {token} = useAuthStateProvider()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) navigate('/')
    }, [token])

    return (
        <>
            <ScrollToTop />
            <Header/>
            <main>
                <section id="hero" className="login">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                <div id="login">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default GuestLayout