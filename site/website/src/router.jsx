import React from "react";
import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Event from "./pages/events/Event";
import EventShow from "./pages/events/EventShow";
import Register from "./pages/auth/register/Register";
import DashboadLayout from "./layouts/DashboadLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Favoris from "./pages/dashboard/favoris/Favoris";
import Profile from "./pages/dashboard/Profile/Profile";
import EtablissementForm from "./pages/dashboard/etablissements/EtablissementForm";
import Product from "./pages/dashboard/products/Product";
import Order from "./pages/dashboard/orders/Order";
import ProdutForm from "./pages/dashboard/products/ProdutForm";
import Explore from "./pages/bonplans/Explore";
import Details from "./pages/bonplans/details/Details";
import Etablissement from "./pages/dashboard/etablissements/Etablissement";
import EventForm from "./pages/dashboard/events/EventForm";
import MyEvent from "./pages/dashboard/events/MyEvent";
import Setting from "./pages/dashboard/Profile/Setting";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/explorer',
                children: [
                    {
                        path: '',
                        element: <Explore />
                    },
                    {
                        path: ':slug',
                        element: <Details />
                    }
                ]
            },
            {
                path: '/evenements',
                children: [
                    {
                        path: '',
                        element: <Event />
                    },
                    {
                        path: ':slug',
                        element: <EventShow />,
                    }
                ]
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
                                path: 'ajouter',
                                element: <EtablissementForm />
                            },
                            {
                                path: 'modification/:id/:slug',
                                element: <EtablissementForm />
                            }
                        ]
                    },
                    {
                        path: '/mes-evenements',
                        children: [
                            {
                                path: '',
                                element: <MyEvent />
                            },
                            {
                                path: 'ajouter',
                                element: <EventForm />
                            },
                            {
                                path: 'modification/:id/:slug',
                                element: <EventForm />
                            }
                        ]
                    },
                    {
                        path: '/mes-produits',
                        children: [
                            {
                                path: '',
                                element: <Product />
                            },
                            {
                                path: 'ajouter',
                                element: <ProdutForm />
                            }
                        ]
                    },
                    {
                        path: 'mes-reservations',
                        element: <Order />
                    }
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