import React from 'react'
import Input from '../../../components/form/Input'
import { Link } from 'react-router-dom'

export default function Etablissement() {
  return (
    <section id='etablissements' className='content-current'>
        <div className="row mb-3">
            <div className="col-md-6">
                <h4 className=''>Mes établissements</h4>
            </div>
        </div>
        <div className='row mb-5 pb-3 border-bottom'>
            <div className='col-md-6'>
                <Link to={'/mes-etablissements/nouveau'} className='btn_1'><i className='icon-plus-circled'></i> Ajouter un établissement</Link>
            </div>
            <div className='col-md-6'>
                <div className='text-end'>
                    <label>
                        <Input 
                            placeholder='Rechercher...'
                            otherClass = ''
                        />
                    </label>
                </div>
            </div>
        </div>
        <div className="strip_booking">
            <div className="row">
                <div className="col-lg-2 col-md-2">
                    <div className="date">
                        <span className="month">Dec</span>
                        <span className="day"><strong>23</strong>Sat</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5">
                    <h3 className="hotel_booking">Hotel Mariott Paris<span>2 Adults / 2 Nights</span></h3>
                </div>
                <div className="col-lg-2 col-md-3">
                    <ul className="info_booking">
                        <li><strong>Booking id</strong> 23442</li>
                        <li><strong>Booked on</strong> Sat. 23 Dec. 2015</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="booking_buttons">
                        <a href="#0" className="btn_2">Edit</a>
                        <a href="#0" className="btn_3">Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
