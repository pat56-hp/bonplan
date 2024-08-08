import React from 'react'
import Input from '../../../components/form/Input'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <section id='product' className='content-current'>
        <div className="row mb-5 pb-3 border-bottom">
            <div className="col-md-12">
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className='mb-3'>
                        <h4 className=''>Mes produits</h4>
                        <span className='section_sub_title'><i className='icon-info-circled'></i> Cette section est utilisée pour la gestion de vos prodtuits</span>
                    </div>
                    <div className='d-flex justify-content-between gap-2'>
                        <div className=''>
                            <Link to={'/mes-produits/ajouter'} className='btn_1 mb align-items-center d-flex' style={{height : '40px'}}>
                                <i className='icon-plus-circled'></i> Ajouter
                            </Link>
                        </div>
                        <Input 
                            placeholder='Rechercher...'
                            otherClass = ''
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
