import React from "react";
import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Event from "./pages/events/Event";
import EventShow from "./pages/events/EventShow";
import Register from "./pages/register/Register";
import DashboadLayout from "./layouts/DashboadLayout";
import Dashboard from "./pages/Auth/Dashboard";
import Favoris from "./pages/Auth/Favoris";
import Profile from "./pages/Auth/Profile/Profile";
import Setting from "./pages/Auth/Profile/Setting";
import Etablissement from "./pages/Auth/etablissements/Etablissement";
import EtablissementForm from "./pages/Auth/etablissements/EtablissementForm";

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
                element: <DashboadLayout />,
                children: [
                    {
                        path: '/tableau-de-bord',
                        element: <Dashboard />
                    },
                    {
                        path: 'mon-profil',
                        element: <Profile />
                    },
                    {
                        path: 'mes-favoris',
                        element: <Favoris />
                    },
                    {
                        path: 'parametres',
                        element: <Setting />
                    },
                    {
                        path: '/mes-etablissements',
                        children: [
                            {
                                path: '',
                                element: <Etablissement />
                            },
                            {
                                path: 'nouveau',
                                element: <EtablissementForm />
                            },
                            {
                                path: 'modification/:id/:slug',
                                element: <EtablissementForm />
                            }
                        ]
                    },
                ]
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
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    },

])

export default router