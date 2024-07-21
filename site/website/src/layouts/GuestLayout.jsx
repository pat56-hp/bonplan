import React from "react";
import {useAuthStateProvider} from "../contexts/AuthContextProvider";
import {Navigate, Outlet} from 'react-router-dom'
import Header from "../components/head/Header";
import Footer from "../components/Footer";

const GuestLayout = () => {

    const {token} = useAuthStateProvider()

    if (token) <Navigate to={'/'}/>

    return (
        <>
            <Header/>
            <main>
                <section id="hero" className="login">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                                <div id="login">
                                    <div className="text-center">
                                        <h3 className="text-uppercase mt-0">Inscription</h3>
                                    </div>
                                    <hr/>
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