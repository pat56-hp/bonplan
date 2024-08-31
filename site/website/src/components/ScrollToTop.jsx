import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMenuStateProvider } from '../contexts/MenuContextProvide';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const {setMenuMobileActive} = useMenuStateProvider()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });

        setMenuMobileActive(false)
    }, [pathname]);

    return null;
};

export default ScrollToTop;
