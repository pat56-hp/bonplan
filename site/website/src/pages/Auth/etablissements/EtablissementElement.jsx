import React from 'react'

export default function EtablissementElement({etablissement, index}) {
    const apiDomain = import.meta.env.VITE_API_DOMAIN
  return (
    <div className="strip_booking" key={index}>
        <div className="row">
            <div className="col-lg-2 col-md-2">
                <div className="img_container">
                    <a href="single_tour.html">
                        <img src={apiDomain + etablissement.image} width="800" height="533" className="img-fluid" alt="image" />
                    </a>
                </div>
            </div>
            <div className="col-lg-6 col-md-5">
                <h3 className="p-0 mt-1">
                    {etablissement.libelle}
                </h3>
                <span className='d-block'><i className='icon-briefcase'></i> {etablissement.category}</span>
                <span className='d-block'><i className='icon-phone-circled'></i>{etablissement.phone}</span>
                <span className='d-block'><i className='icon-location-outline'></i> {etablissement.ville}</span>
            </div>
            <div className="col-lg-2 col-md-3">
                <ul className="info_booking pt-3">
                    <li><strong>Ajouté le</strong> Sat. 23 Dec. 2015</li>
                    <li className='mt-3'>
                        <strong>
                            {
                                etablissement.facebook && 
                                <a target='_blank' href={etablissement.facebook} title='Facebook'><span className='facebook-icon'><i className='icon-facebook-squared-1'></i></span></a>
                            }
                            
                            {
                                etablissement.instagram &&
                                <a target='_blank' href={etablissement.instagram} title='Instagram'><span className='instagram-icon'><i className='icon-instagram-1'></i></span></a>
                            }
                           
                            <span className='gallery-icon' title='Gallerie'><i className='icon-picture-1'></i> {etablissement.total_image}</span>
                        </strong>
                    </li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2">
                <div className="booking_buttons mt-0">
                    <a href="#0" className="btn_2">Modifier</a>
                    <a href="#0" className="btn_3">Désactiver</a>
                    <a href="#0" className="btn_3 text-danger btn-danger">Supprimer</a>
                </div>
            </div>
        </div>
    </div>
  )
}
