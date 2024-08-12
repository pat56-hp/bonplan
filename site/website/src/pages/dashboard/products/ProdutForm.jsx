import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../../../components/AlertMessage';
import Input from '../../../components/form/Input';
import { useForm } from 'react-hook-form';

export default function ProdutForm() {
    const navigate = useNavigate()
    const [formErrors, setFormErrors] = useState({})

    const {
        handleSubmit,
        register,
        watch,
        formState: {errors}
    } = useForm()

    const navigateBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

  return (
    <section id='etablissements' className='content-current'>
        <div className='col-md-3 mb-4'>
            <a onClick={navigateBack} className='btn_3 d-inline'><i className='icon-right'></i> Retour</a>
        </div>

        <div className="row mb-5 pb-3 border-bottom">
            <div className="col-md-12">
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className='mb-3'>
                        <h4 className=''>Ajouter un produit</h4>
                        <span className='section_sub_title'><i className='icon-info-circled'></i> Cette section est utilisée pour la gestion de vos prodtuits</span>
                    </div>
                </div>
            </div>
        </div>
        <form>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <Input 
                            label='Libéllé'
                            placeholder="Le libéllé du produit"
                            important={true}
                            inputRegister={{...register('libelle', {
                                required: 'Veuillez saisir le libéllé du produit',
                                minLength: {
                                    value: '2',
                                    message: 'Veuillez saisir un libéllé d\'au moins 2 caractères'
                                },
                                maxLength: {
                                    value: '100',
                                    message: 'Le libéllé doit avoir 100 caractères maximum'
                                }
                            })}}
                        />
                        {errors.libelle && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.libelle.message}</span>}
                    </div>
                </div>
            </div>
        </form>
    </section>
  )
}
