import React, { useEffect } from 'react';

const CarouselLoader = () => {
    useEffect(() => {
        setTimeout(() => {
            const loadScript = (src) => {
                return new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = src;
                    script.async = true;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.body.appendChild(script);
                });
            };
    
            Promise.all([
                loadScript('/js/jquery.sliderPro.min.js')
            ])
            .then(() => {
                console.log('All scripts loaded successfully.');
            })
            .catch((err) => {
                console.error('Error loading scripts:', err);
            });
        }, 500)
    }, []);

    return null; // This component does not render anything
};

export default CarouselLoader;
