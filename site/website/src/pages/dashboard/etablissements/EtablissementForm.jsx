import React, { useEffect, useRef, useState } from 'react'
import Input from '../../../components/form/Input'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Select from 'react-select'
import PhoneInput from 'react-phone-input-2'
import { useForm } from 'react-hook-form'
import Loader from '../../../components/Loader'
import UploadImage from '../../../components/form/UploadImage'
import UploadGalery from '../../../components/form/UploadGalery'
import TextEditor from '../../../components/form/TextEditor'
import { DatePicker } from 'rsuite';
import toast from 'react-hot-toast'
import { createDate } from '../../../scripts/helper'
import useHttp from '../../../hooks/useHttp'
import AlertMessage from '../../../components/AlertMessage'

/**
 * Commponent of Form Etablissement
 */
export default function EtablissementForm() {
    const {sendRequest} = useHttp()
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [formErrors, setFormErrors] = useState({})
    const [image, setImage] = useState(null)
    const [galery, setGalery] = useState([])
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [phone, setPhone] = useState(null)
    const [commodites, setCommodites] = useState([])
    const descriptionRef = useRef(null);
    const [category, setCategory] = useState(null)
    const [hours, setHours] = useState([
        {label: 'Lundi', value: 0, checked: false, ouverture: null, fermeture: null},
        {label: 'Mardi', value: 1, checked: false, ouverture: null, fermeture: null},
        {label: 'Mercredi', value: 2, checked: false, ouverture: null, fermeture: null},
        {label: 'Jeudi', value: 3, checked: false, ouverture: null, fermeture: null},
        {label: 'Vendredi', value: 4, checked: false, ouverture: null, fermeture: null},
        {label: 'Samedi', value: 5, checked: false, ouverture: null, fermeture: null},
        {label: 'Dimanche', value: 6, checked: false, ouverture: null, fermeture: null},
    ])
    const [etablissement, setEtablissement] = useState({})
    const [imageUrl, setImageUrl] = useState(null)
    const [galleryImageUrl, setGalleryImageUrl] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [oldCommodites, setOldCommodites] = useState([])
    const params = useParams()

    const {
        handleSubmit,
        watch,
        formState: {errors},
        register,
        setValue
    } = useForm()


    //Navigation retour
    const navigateBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    /***************************************
     * QUERIES
     **************************************/

    //Recuperation des categories
    const queryGetCatecories = useQuery({
        queryKey: ['getCategories'],
        queryFn: async () => await sendRequest('/categories')
    })

    //Recuperation des commodities
    const queryGetCommodites = useQuery({
        queryKey: ['getCommodites'],
        queryFn: async () => await sendRequest('/commodites')
    })

    //Recuperation d'un etablissement
    const getEtablissement = useMutation({
        mutationKey: ['showEtablissement'],
        mutationFn: async (id) => sendRequest(`/etablissements/show/${id}`),
        onSuccess: ({data}) => {
            setIsFetching(false)
            const response = data.data 
            const oldCommoditesToUpdate = response.commodites?.map(commodite => commodite.id)

            //Recuperation des horaires depuis la reponse
            const horaires = response.jours?.reduce((acc, jour) => {
                const day = jour.id - 1
                acc[jour.libelle] = {
                    value: day,
                    ouverture: jour.pivot?.ouverture,
                    fermeture: jour.pivot?.fermeture
                };
                return acc;
            }, {});


            //Mise à jour des valeurs des horaires dans le state
            if (Object.keys(horaires).length > 0) {
                const updatedHours = hours.map(hour => {
                    if (Object.keys(horaires).includes(hour.label)) {
                        const horaire = horaires[hour.label]
                        return { ...hour, checked: true, ouverture: createDate(horaire.ouverture), fermeture: createDate(horaire.fermeture) };
                    }
                    return hour;
                });
                setHours(updatedHours)
            }

            //Mise à jour des valeurs de la gallerie dans le state
            const galleries = response.galleries?.map(gallery => import.meta.env.VITE_API_DOMAIN + gallery.image)
            setGalleryImageUrl(galleries)

            setEtablissement(response)
            setOldCommodites(oldCommoditesToUpdate)
            setImageUrl(import.meta.env.VITE_API_DOMAIN + response.image)
            setPhone(response.phone)
            setCategory(response.category_id)
        },
        onMutate : () => {
            setIsFetching(true)
        },
    })

    //Request of submit
    const submitEtablissement = useMutation({
        mutationKey: ['submitEtablissement'],
        mutationFn: async ({postUrl, formData}) => sendRequest(postUrl, 'POST', formData),
        onMutate: () => {
            setIsLoading(true)
            toast.loading('Patientez...')
        },
        onError: (error) => {
            if (error.status === 422) {
                const {errors} = error.response
                Object.keys(errors).map(key => {
                    setFormErrors(formErrors => (
                        {...formErrors, [key] : {
                            message: errors[key]
                        }}
                    ))
                })
            }

            setIsLoading(false)   
        }
    })

    /***************************************
     * SETDATA
     ***************************************/
    //Initialisation des commodites
    const onSetCommodites = ({data}) => {
        if(data){
            const getCommoites = data.data?.map(commodite => ({
                label: commodite.libelle,
                value: commodite.id
            }))

            setCommodites(getCommoites)
        }
    }


    //Initialisation des catégories
    const onSetCategories = ({data}) => {
        if (data && Array.isArray(data.data)) {
            const formattedCategories = data.data.map(d => ({
                label: d.libelle,
                value: d.id
            }));
            setCategories(formattedCategories);
        }
    }

    /**************************************
     * Submit element
     * @param {Object} data 
     * @returns 
     **************************************/
    const onSubmit = (data) => {
        setFormErrors({}); // Réinitialisation des erreurs du formulaire

        let errors = {};
        
        //Verification du contact
        if (phone === undefined || phone === null || phone === '') {
            errors.phone = {
                message: 'Veuillez renseigner le contact de l\'établissement'
            };
        }

        //Verification de la categorie
        if (category === null || category === undefined || category === '') {
            errors.category = {
                message: 'Veuillez sélectionner la catégorie de l\'établissement'
            };
        }

        //Verification de l'image, s'il s'agit d'un ajout
        if (params.id === null || params.id === undefined) {
            if (image === undefined || image === null || image === '') {
                errors.image = {
                    message: 'Veuillez télécharger une image de l\'établissement'
                };
            }
        }
        

        /**
         * Verification des heures d'ouverture et de fermeture
         * Si une date est activee et que les heures ne son pas renseignes
         */
        const hourFaileds = hours.filter(hour => hour.checked === true && (hour.ouverture === null || hour.fermeture === null))
        if (hourFaileds.length > 0) {
            errors.hour = {
                message: 'Vous avez activé un jour sans marquer les heures'
            }
        }

        //S'il existe une erreur dans le formulaire lors de la soumission
        if (Object.keys(errors).length > 0) {
            toast.error('Oups...')
            setFormErrors(errors);
            return;
        }

        //Recuperation des horaires cochees
        const hoursSubmit = hours.filter(hour => hour.checked === true)
        const transformHours = hoursSubmit.map(hour => (
            { ...hour, ouverture : hour.ouverture.toLocaleString(), fermeture: hour.fermeture.toLocaleString() }
        ))

        //Creation de la formData
        const formData = new FormData()
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        })

        galery.forEach((file, index) => {
            if (file instanceof File) {
                formData.append(`gallery[${index}]`, file);
            }
        });

        formData.append('image', image);
        formData.append('phone', phone);
        formData.append('category', category);
        formData.append('horaires', JSON.stringify(transformHours)); // Convertir en JSON
        formData.append('commodites', JSON.stringify(oldCommodites)); // Convertir en JSON
        formData.append('description', descriptionRef.current.getContent());

        if (params.id) {
            formData.append('_method', 'PUT');
        }
    
        //Soumission du formulaire
        const postUrl = params.id ? `/etablissements/update/${params.id}` : '/etablissements/store'
        const postAlertSuccess = params.id ? 'Établissement modifié' : 'Enregistrement effectué'
        submitEtablissement.mutate({postUrl, formData}, {
            onSuccess: () => {
                toast.remove();
                toast.success(postAlertSuccess);
                navigate('/mes-etablissements');
            }    
        })
    }

    //Observer
    watch(element => {
        if (element.libelle && element.ville && element.adresse) {
            setButtonDisabled(false)
        }
    })


    /***************************************
     * UPDATE FUNCTIONS
     **************************************/

    //Mise a jour des heures, grisee ou pas
    const handleChangeInputCheck = (dayValue, e) => {
        const isChecked = e.target.checked
        const updatedHours = hours.map(hour => 
            hour.value === dayValue ? { ...hour, checked: isChecked } : hour
        )
        setHours(updatedHours)
    }

    //Recuperation de la valeur de l'heure
    const handleChangeHour = (index, type, value) => {
        if (value instanceof Date && !isNaN(value)) {
            const updatedHours = hours.map(hour => 
                hour.value === index ? { ...hour, checked: true, [type]: value } : hour
            );
            setHours(updatedHours);
        } else {
            const updatedHours = hours.map(hour => 
                hour.value === index ? { ...hour, checked: true, [type]: null } : hour
            );
            setHours(updatedHours);
        }
    }

    //Mise à jour des champs avec les valeurs de l'etablissement
    const handleGetEtablissement = () => {
        if (params.id) {
            getEtablissement.mutate(params.id)
        }
    }

    /************************************
     * USEEFFECTS
     ***********************************/

    useEffect(() => {
        if(queryGetCatecories.isSuccess) onSetCategories(queryGetCatecories.data)
        if(queryGetCommodites.isSuccess) onSetCommodites(queryGetCommodites.data)
    }, [queryGetCatecories.data, queryGetCommodites.data, params])


    useEffect(() => {
        etablissement.libelle && setValue('libelle', etablissement.libelle)
        etablissement.email && setValue('email', etablissement.email)
        etablissement.ville && setValue('ville', etablissement.ville)
        etablissement.adresse && setValue('adresse', etablissement.adresse)
        etablissement.facebook && setValue('facebook', etablissement.facebook)
        etablissement.instagram && setValue('instagram', etablissement.instagram)
    }, [etablissement, params])

    useEffect(() => {
        handleGetEtablissement()
    }, [])

  return (
    <section id='etablissements' className='content-current'>
        <div className='col-md-3 mb-4'>
            <a onClick={navigateBack} className='btn_3 d-inline'><i className='icon-right'></i> Retour</a>
        </div>
        {
            isFetching
                ? <Loader />
                : <>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <h4 className=''>
                                {params.id ? 'Modification d\'un établissement' : 'Ajout d\'un établissement'}
                            </h4>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AlertMessage errors={formErrors} />
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
                                        value={categories.find(prevCategory => prevCategory.value === category)}
                                        onChange={cat => setCategory(cat.value)}
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
                                        value={etablissement.phone}
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
                                        value={commodites.filter(commodite => oldCommodites.includes(commodite.value))}
                                        name="commodites"
                                        options={commodites}
                                        onChange={prevCommodite => {
                                            const com = Array.from(prevCommodite).map(com => com.value)
                                            setOldCommodites(com)
                                        }}
                                        placeholder = "Sélectionnez une ou plusieurs commodité(s)"
                                        isMulti={true}
                                        noOptionsMessage = {() => 'Aucune commodité disponible'}
                                        styles={{ zIndex: 9 }}
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
                                        value = {etablissement.description}
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
                                                        onChange={value => handleChangeHour(index, 'ouverture', value)}
                                                        value={hour.ouverture}
                                                    />
                                                </td>
                                                <td>
                                                    <DatePicker 
                                                        format="HH:mm" 
                                                        caretAs={ClockIcon} 
                                                        disabled={!hour.checked} 
                                                        className='fermeture'
                                                        onChange={value => handleChangeHour(index, 'fermeture', value)}
                                                        value={hour.fermeture} 
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
                                <UploadImage onSetImage={setImage} formErrors={formErrors} url={imageUrl}/>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    {
                                        <UploadGalery 
                                            galery={galery} 
                                            onSetGalery = {setGalery} 
                                            formErrors = {formErrors} 
                                            url = {galleryImageUrl}
                                            isUpdate = {params.id ? true : false}
                                        />
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
                </>

        }
    </section>
  )
}

function ClockIcon(){
    return (
        <span className='icon-clock-4'></span>
    )
}