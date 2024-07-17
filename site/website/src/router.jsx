import React from "react";
import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ],
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            }

        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router