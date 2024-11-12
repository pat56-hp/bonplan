import React, { useEffect, useRef, useState } from 'react'

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";
import { apiUrl, slug } from "../../scripts/helper";
import { Link } from 'react-router-dom';

const userLocationIcon = L.divIcon({
    html: '<i class="fa fa-map-marker fa-3x" style="color:#e04f67;"></i>',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    className: 'custom-div-icon'
});

export default function MapPlan({bonplans}) {
    const [position, setPosition] = useState(null);
  return (
    <MapContainer
        center={[5.3484446,-4.0620661,12]}
        zoom={13}
        style={{ height: '450px', width: '100%'}}
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <MapControls setPosition={setPosition}/>

        {position && (
            <Marker position={position} icon={userLocationIcon}>
                <Popup>
                    Vous êtes ici
                </Popup>
            </Marker>
        )}
        
        {bonplans.length > 0 && bonplans.map(bonplan => {
            const position = [bonplan.latitude, bonplan.longitude]
            /* const customDivIcon = L.divIcon({
                html: `<img src=${apiUrl() + bonplan.image} alt=${bonplan.libelle} style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover" />`,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [0, -41],
                className: 'custom-div-icon' // Classe CSS optionnelle
              }); */

              const customDivIcon = L.divIcon({
                html: `
                  <div style="position: relative; display: inline-block;">
                    <div style="background-color: #fff; border-radius: 50%; padding: 5px; box-shadow: -1px 3px 17px 4px #828282;">
                      <img src=${apiUrl() + bonplan.image} alt=${bonplan.libelle} style="width: 26px; height: 26px; border-radius: 50%; object-fit: cover" />
                    </div>
                    <div style="position: absolute; top: 90%; left: 50%; width: 23px; height: 0; transform: translateX(-50%); border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #ffffff;"></div>
                  </div>
                `,
                iconSize: [25, 41], // Ajuste la taille si nécessaire
                iconAnchor: [12, 41],
                popupAnchor: [0, -41],
                className: 'custom-div-icon' // Classe CSS optionnelle
              });
              

            if (bonplan.longitude && bonplan.latitude) {
                return <Marker key={bonplan.id} position={position} icon={customDivIcon}>
                    <Popup>
                        <div className='popup_element'>
                            <div className='popup_img'>
                                <Link to={`/explorer/${slug(bonplan.id + '-' +bonplan.libelle)}`}>
                                    <img src={apiUrl() + bonplan.image}/>
                                </Link>
                            </div>
                            <h5 className='text-center'>
                            <Link to={`/explorer/${slug(bonplan.id + '-' +bonplan.libelle)}`}>{bonplan.libelle}</Link></h5>
                            <p className='text-center text-black mt-0'>
                              <a href={`tel:00${bonplan.phone}`}>{bonplan.phone}</a>
                            </p>
                        </div>
                    </Popup>
                </Marker>
            }
        })}
    </MapContainer>
  )
}

function MapControls({ setPosition }) {
    const map = useMap(); // Utilisation de useMap pour obtenir la référence de la carte
    const buttonAdded = useRef(false);
  
    useEffect(() => {
      if (!map || buttonAdded.current) return;
  
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
  
      // Bouton de localisation manuelle
      L.easyButton("fa-map-marker", () => {
        map.locate().on("locationfound", function (e) {
          setPosition(e.latlng);
          map.flyTo(e.latlng, map.getZoom());
        });
      }).addTo(map);

      buttonAdded.current = true
  
    }, [map, setPosition]);
  
    return null;
  }
