import React from "react";
import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Event from "./pages/events/Event";
import EventShow from "./pages/events/EventShow";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/explorer',
                element: <Explore />
            },
            {
                path: '/evenements',
                element: <Event />
            },
            {
                path: '/details-evenement',
                element: <EventShow />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '*',
                element: <NotFound />
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

])

export default router