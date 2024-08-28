import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent({latitude, longitude, image, libelle, contact, isEvent = false}) {
    const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={13} style={{ height: isEvent ? '400px' : '130px', width: "100%" }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
            <Popup>
                <div className='popup_element'>
                    <div className='popup_img'>
                        <img src={image}/>
                    </div>
                    <h5 className='text-center'>{libelle}</h5>
                    <p className='text-center mt-0'>
                        <a href={`tel:00${contact}`}><i className='icon-phone'></i> {contact}</a>
                    </p>
                </div>
            </Popup>
        </Marker>
    </MapContainer>
  )
}
