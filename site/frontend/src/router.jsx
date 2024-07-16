import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Home from "./pages/home/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Event from "./pages/Event";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                name: 'home'
            },
            {
                path: '/explorer',
                element: <Explore title={'Explorer'}/>,
            },
            {
                path: '/evenements',
                element: <Event title={'Evènements'}/>,
            },
            {
                path: '/contact',
                element: <Contact title={'Nous-contacter'}/>,
                name: 'contact'
            }
        ]
    },
    {
        element: <GuestLayout />,
        path: '/guest'
    }
])

export default router