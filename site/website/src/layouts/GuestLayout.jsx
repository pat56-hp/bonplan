import React from "react";
import {useAuthStateProvider} from "../contexts/AuthContextProvider";
import { Navigate } from 'react-router-dom'

const GuestLayout = () => {

    const {token} = useAuthStateProvider()

    if (token) <Navigate to={'/'}/>

    return (
        <>
            GuestLayout
        </>
    )
}

export default GuestLayout