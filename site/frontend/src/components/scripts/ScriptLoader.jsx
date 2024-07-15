import React, { useEffect } from 'react';

const ScriptLoader = () => {
  useEffect(() => {
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
      
      loadScript('/assets/js/footer-accordion.js'),
      loadScript('/assets/js/loader.js'),
      loadScript('/assets/js/script.js')
    ])
    .then(() => {
      console.log('All scripts loaded successfully.');
    })
    .catch((err) => {
      console.error('Error loading scripts:', err);
    });

    return () => {
      // Clean up scripts if necessary
    };
  }, []);

  return null; // This component does not render anything
};

export default ScriptLoader;
