import React, { useEffect, useRef, useState } from 'react'
import Input from '../../../components/form/Input'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getRequest } from '../../../queries/sendRequest'
import Select from 'react-select'
import PhoneInput from 'react-phone-input-2'
import { useForm } from 'react-hook-form'
import Loader from '../../../components/Loader'
import UploadImage from '../../../components/form/UploadImage'
import UploadGalery from '../../../components/form/UploadGalery'
import TextEditor from '../../../components/form/TextEditor'
import { DatePicker } from 'rsuite';
import toast from 'react-hot-toast'


export default function EtablissementForm() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [formErrors, setFormErrors] = useState({})
    const [image, setImage] = useState(null)
    const [galery, setGalery] = useState([])
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [phone, setPhone] = useState(null)
    const [category, setCategory] = useState(null)
    const [commodites, setCommodites] = useState([])
    const descriptionRef = useRef(null);
    const [hours, setHours] = useState([
        {label: 'Lundi', value: 0, checked: false, ouverture: null, fermeture: null},
        {label: 'Mardi', value: 1, checked: false, ouverture: null, fermeture: null},
        {label: 'Mercredi', value: 2, checked: false, ouverture: null, fermeture: null},
        {label: 'Jeudi', value: 3, checked: false, ouverture: null, fermeture: null},
        {label: 'Vendredi', value: 4, checked: false, ouverture: null, fermeture: null},
        {label: 'Samedi', value: 5, checked: false, ouverture: null, fermeture: null},
        {label: 'Dimanche', value: 6, checked: false, ouverture: null, fermeture: null},
    ])

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

    //Recuperation des commodites selectionnees
    const handleChangeCommodite = (elements) => {
        setCommodites([])
        elements.map(element => {
            //console.log(element.value)
            setCommodites(prevCommodites => [...prevCommodites, element.value])
        })
    }

    /**
     * Submit element
     * @param {Object} data 
     * @returns 
     */
    const onSubmit = (data) => {
        setFormErrors({}); // Réinitialisation des erreurs du formulaire

        let errors = {};

        if (phone === undefined || phone === null || phone === '') {
            errors.phone = {
                message: 'Veuillez renseigner le contact de l\'établissement'
            };
        }

        if (category === undefined || category === null || category === '') {
            errors.category = {
                message: 'Veuillez sélectionner la catégorie de l\'établissement'
            };
        }

        if (image === undefined || image === null || image === '') {
            errors.image = {
                message: 'Veuillez télécharger une image de l\'établissement'
            };
        }

        const hourFaileds = hours.filter(hour => hour.checked === true && (hour.ouverture === null || hour.fermeture === null))
        if (hourFaileds.length > 0) {
            errors.hour = {
                message: 'Vous avez activé un jour sans marquer les heures'
            }

            console.log(hourFaileds)
        }

        if (Object.keys(errors).length > 0) {
            toast.error('Oups...')
            setFormErrors(errors);
            return;
        }

        const hoursSubmit = hours.filter(hour => hour.checked === true)
        console.log(hoursSubmit)

        
        const formData = {
            ...data, 
            image: image, 
            gallery: galery, 
            phone: phone, 
            category: category, 
            horaires: hoursSubmit,
            commodites: commodites,
            description: descriptionRef.current.getContent()
        }

        console.log(formData)
    }

    //Observer
    watch(element => {
        //console.log(element)
        if (element.libelle && element.ville && element.adresse) {
            setButtonDisabled(false)
        }
    })

    //Mise a jour des heures, grisee ou pas
    const handleChangeInputCheck = (dayValue, e) => {
        const isChecked = e.target.checked
        const updatedHours = hours.map(hour => 
            hour.value === dayValue ? { ...hour, checked: isChecked } : hour
        )
        setHours(updatedHours)
    }

    //Recuperation de la valeur de l'heure d'ouverture
    const handleChangeHourOuverture = (value, dayValue) => {
        const updatedHours = hours.map(hour => 
            hour.value === dayValue ? { ...hour, ouverture: value } : hour
        )
        setHours(updatedHours)
    }

    //Recuperation de la valeur de l'heure de fermeture
    const handleChangeHourFermeture = (value, dayValue) => {
        const updatedHours = hours.map(hour => 
            hour.value === dayValue ? { ...hour, fermeture: value } : hour
        )
        setHours(updatedHours)
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <Input 
                            label='Libéllé'
                            placeholder="Le libéllé de l'établissement"
                            important={true}
                            inputRegister={{...register('libelle', {
                                required: 'Veuillez saisir le libéllé de l\'établissement',
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
                <div className='col-md-6'>
                    <div className="form-group">
                        <label htmlFor="categorie">Catégorie <span className="text-danger">*</span></label>
                        <Select
                            name="category"
                            options={categories}
                            onChange={category => setCategory(category.value)}
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
                            onChange={value => setPhone(value)}
                            placeholder={'Entrez le contact de votre établissement'}
                            inputStyle={{
                                width: '100%',
                                height: '40px'
                            }}
                        />
                        {formErrors.phone && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.phone.message}</span>}
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
                            inputRegister={{...register('ville', {
                                required: 'Veuillez saisir la ville de l\'établissement',
                                minLength: {
                                    value: '2',
                                    message: 'Veuillez saisir une ville d\'au moins 2 caractères'
                                },
                                maxLength: {
                                    value: '100',
                                    message: 'Le ville doit avoir 100 caractères maximum'
                                }
                            })}}
                        />
                        {errors.ville && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.ville.message}</span>}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <Input 
                            label='Adresse'
                            placeholder="Localisation de l'établissement"
                            important={true}
                            inputRegister={{...register('adresse', {
                                required: 'Veuillez saisir l\'adresse de localisation de l\'établissement',
                            })}}
                        />
                        {errors.adresse && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.adresse.message}</span>}
                    </div>
                </div>
                <div className='col-md-12'>
                <div className="form-group">
                        <label htmlFor="categorie">Commodité(s)</label>
                        <Select
                            name="commodites"
                            options={categories}
                            onChange={commodites => handleChangeCommodite(commodites)}
                            placeholder = "Sélectionnez une ou plusieurs commodité(s)"
                            isMulti={true}
                            noOptionsMessage = {() => 'Aucune catégorie disponible'}
                            styles={{ zIndex: 99999999999999 }}
                        />
                        <span className="text-secondary"><i className="icon-info-circled"></i>Services et installations que propose votre établissement pour améliorer le confort et l'expérience de vos clients</span>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <Input 
                            label='Facebook'
                            placeholder="Facebook"
                            inputRegister={{...register('facebook')}}
                        />
                        {errors.facebook && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.facebook.message}</span>}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <Input 
                            label='Instagram'
                            placeholder="Instagram"
                            inputRegister={{...register('instagram')}}
                        />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className='form-group'>
                        <TextEditor 
                            label="Description"
                            important={true}
                            descriptionRef = {descriptionRef}
                            errors = {formErrors}
                        />
                    </div>
                </div>
                
                
            </div>
            
            <div className='row'>
                <div className='col-md-12 card-hours'>
                    <h4 className='mb-4 text-center'>Horaire(s)</h4>
                    <table className='table table-condensed'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Jour(s)</th>
                                <th>Ouverture</th>
                                <th>Fermeture</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            hours.map((hour, index) => (
                                <tr key={index}>
                                    <td>
                                        <label className="switch-light switch-ios pull-right m-0">
                                            <input type="checkbox" name="option_1" id="option_1" defaultChecked={hour.checked} onChange={e => handleChangeInputCheck(hour.value, e)} />
                                            <span>
                                            <span>Non</span>
                                            <span>Oui</span>
                                            </span>
                                            <a></a>
                                        </label>
                                    </td>
                                    <td>{hour.label}</td>
                                    <td>
                                        <DatePicker 
                                            format="HH:mm" 
                                            caretAs={ClockIcon} 
                                            disabled={!hour.checked}
                                            className='ouverture'
                                            onChange={value => handleChangeHourOuverture(value, hour.value)}
                                        />
                                    </td>
                                    <td>
                                        <DatePicker 
                                            format="HH:mm" 
                                            caretAs={ClockIcon} 
                                            disabled={!hour.checked} 
                                            className='fermeture'
                                            onChange={value => handleChangeHourFermeture(value, hour.value)}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                    {formErrors.hour && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{formErrors.hour.message}</span>}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <UploadImage onSetImage={setImage} image={image} formErrors={formErrors}/>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        {
                            <UploadGalery galery={galery} onSetGalery = {setGalery} formErrors = {formErrors} />
                        }
                    </div>
                </div>
            </div>
            <div className='row justify-content-center mt-3'>
                <div className='col-md-4'>
                    <button
                        className={`btn_full ${buttonDisabled && 'disabled'}`}
                        type="submit"
                        disabled={buttonDisabled}
                    >
                        Enregistrer 
                        {
                            isLoading
                            ? <i className="icon-spin6 animate-spin"></i>
                            : <i className='icon-floppy-1'></i>
                        }
                    </button>
                </div>
            </div>
        </form>
    </section>
  )
}

function ClockIcon(){
    return (
        <span className='icon-clock-4'></span>
    )
}