import React, { useEffect, useRef, useState } from 'react'
import Input from '../../../components/form/Input'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getRequest } from '../../../queries/sendRequest'
import Select from 'react-select'
import PhoneInput from 'react-phone-input-2'
import { useForm } from 'react-hook-form'
import Loader from '../../../components/Loader'
import UploadImage from '../UploadImage'

export default function EtablissementForm() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [formErrors, setFormErrors] = useState({})
    const [image, setImage] = useState(null)
    const [galerie, setGalerie] = useState([])

    const {
        reset,
        handleSubmit,
        watch,
        formState: {errors},
        register
    } = useForm()

    const {data} = useQuery({
        queryKey: ['getCategories'],
        queryFn: () => getRequest('/categories')
    }) 

    //Mise à jour du state des catégories
    const onSetCategories = (data) => {
        if (data && Array.isArray(data.data)) {
            const formattedCategories = data.data.map(d => ({
                label: d.libelle,
                value: d.id
            }));
            setCategories(formattedCategories);
        }
    }

    const navigateBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    useEffect(() => {
        onSetCategories(data)
    }, [data])

  return (
    <section id='etablissements' className='content-current'>
        <div className='col-md-3 mb-4'>
            <a onClick={navigateBack} className='btn_3 d-inline'><i className='icon-right'></i> Retour</a>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
                <h4 className=''>Ajout d'un établissement</h4>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='form-group'>
                    <Input 
                        label='Libéllé'
                        placeholder="Le libéllé de l'établissement"
                        important={true}
                    />
                </div>
            </div>
            <div className='col-md-6'>
                <div className="form-group">
                    <label htmlFor="categorie">Catégorie <span className="text-danger">*</span></label>
                    <Select
                        name="category"
                        options={categories}
                        placeholder = "Sélectionnez une catégorie"
                        noOptionsMessage = {() => 'Aucune catégorie disponible'}
                        styles={{ zIndex: 99999999999999 }}
                    />
                    {formErrors.category && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.category.message}</span>}
                </div>
            </div>
            <div className='col-md-6'>
                <div className='form-group'>
                    <label>Contact de l'établissement <span className="text-danger">*</span></label>
                    <PhoneInput
                        country={'ci'}
                        required={true}
                        onChange={value => console.log(value)}
                        placeholder={'Entrez le contact de votre établissement'}
                        inputStyle={{
                            width: '100%',
                            height: '40px'
                        }}
                    />
                </div>
            </div>
            <div className='col-md-6'>
            <div className="form-group">
                <Input
                    label="Email de l'établissement"
                    type="email"
                    placeholder="L'email de votre établissement"
                    inputRegister = {{...register('email', {
                            pattern: {
                                value: "/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})$/",
                                message: "Veuillez renseigner une adresse email valide"
                            },
                        })}}
                />
                {errors.email && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.email.message}</span>}
            </div>
            </div>
            <div className='col-md-6'>
                <div className='form-group'>
                    <Input 
                        label='Ville'
                        placeholder="Ville de l'établissement"
                        important={true}
                    />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='form-group'>
                    <Input 
                        label='Adresse'
                        placeholder="Localisation de l'établissement"
                        important={true}
                    />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='form-group'>
                    <Input 
                        label='Facebook'
                        placeholder="Facebook"
                    />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='form-group'>
                    <Input 
                        label='Instagram'
                        placeholder="Instagram"
                    />
                </div>
            </div>
            <div className='col-md-6'>
                <UploadImage onSetImage={setImage} image={image}/>
            </div>
            <div className='col-md-6'>
                <div className='form-group'>
                    <label>Galerie</label>
                    <div className='galerie_component'>
                        {
                            galerie.length > 0
                             ? (<div className='card ad_image mt-3 d-flex justify-content-center align-items-center'>
                                    <i className='icon-picture'></i>
                                </div>)
                             : (<div className='card ad_image mt-3 d-flex justify-content-center align-items-center'>
                                    <i className='icon-picture'></i>
                                </div>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
