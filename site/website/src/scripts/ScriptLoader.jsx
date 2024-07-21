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
      loadScript('/js/jquery-3.6.4.min.js'),
      loadScript('/js/common_scripts_min.js'),
      loadScript('/js/functions.js'),
      loadScript('/js/tabs.js'),
      loadScript('/js/map_listing_hotels.js'),
      loadScript('/js/infobox.js'),
    ])
    .then(() => {
      console.log('All scripts loaded successfully.');
      new CBPFWTabs( document.getElementById( 'tabs'))
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
