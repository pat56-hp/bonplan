import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp';
import Input from '../../../components/form/Input';
import { useForm } from 'react-hook-form';
import AlertMessage from '../../../components/AlertMessage';
import { useAuthStateProvider } from '../../../contexts/AuthContextProvider';
import { DatePicker } from 'rsuite';
import PhoneInput from 'react-phone-input-2';
import TextEditor from '../../../components/form/TextEditor';
import UploadImage from '../../../components/form/UploadImage';
import UploadGalery from '../../../components/form/UploadGalery';
import { useMutation, useQuery } from '@tanstack/react-query';
import Select from 'react-select'
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader';

export default function EventForm() {
    const navigate = useNavigate()
    const {sendRequest} = useHttp()
    const {user} = useAuthStateProvider()
    const [formErrors, setFormErrors] = useState({})
    const descriptionRef = useRef(null)
    const [image, setImage] = useState(null)
    const [galery, setGalery] = useState([])
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(null)
    const [debut, setDebut] = useState(null)
    const [fin, setFin] = useState(null)
    const [contact, setContact] = useState(null)
    const [whatsapp, setWhatsapp] = useState(null)
    const [event, setEvent] = useState({})
    const [imageUrl, setImageUrl] = useState(null)
    const [galleryImageUrl, setGalleryImageUrl] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const params = useParams()

    const [suggestions, setSuggestions] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
    const [loadAdress, setLoadAdress] = useState(false)

    //Navigation retour
    const navigateBack = (e) => {
        e.preventDefault();
        navigate(-1)
    }

    /**
     * Queries
     */
    //Recuperation des categories des evenements
    const queryGetCatecories = useQuery({
        queryKey: ['getEventCategories'],
        queryFn: () => sendRequest('/eventCategories')
    })

    //Recuperation d'un etablissement
    const getEvent = useMutation({
        mutationKey: ['showEvent'],
        mutationFn: async (id) => sendRequest(`/evenements/show/${id}`),
        onMutate : () => {
            setIsFetching(true)
        },
        onSuccess: ({data}) => {
            setIsFetching(false)
            const response = data.data 

            //Mise à jour des valeurs de la gallerie dans le state
            const galleries = response.galleries?.map(gallery => import.meta.env.VITE_API_DOMAIN + gallery.image)
            setGalleryImageUrl(galleries)
            setEvent(response)
            setCoordinates({ lat: response.latitude, lon: response.longitude });
            setImageUrl(import.meta.env.VITE_API_DOMAIN + response.image)
            setContact(response.contact)
            const debut = new Date(response.debut)
            const fin = new Date(response.fin)
            setDebut(debut)
            setFin(fin)
            setWhatsapp(response.whatsapp)
            setCategory(response.category_id)
        },
        
    })


    //Envoie de requette post
    const submitEvent = useMutation({
        mutationKey: ['submitEvent'],
        mutationFn: async ({eventUrl, formData}) => sendRequest(eventUrl, 'POST', formData),
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

    /**
     * Sauvegarde des categories dans une variable
     * @param {Object} data 
     */
    const onSetCategories = ({data}) => {
        if (data && Array.isArray(data.data)) {
            const formattedCategories = data.data.map(d => ({
                label: d.title,
                value: d.id
            }));
            setCategories(formattedCategories);
        }
    }


    const {
        handleSubmit,
        formState: {errors},
        register,
        watch,
        setValue
    } = useForm()

    //Submit data
    const onSubmit = (data) => {
        setFormErrors({})
        let errors = {};

        //Verification du contact
        if (contact === undefined || contact === null || contact === '') {
            errors.contact = {
                message: 'Veuillez renseigner un contact'
            };
        }

        //Verification du debut
        if (debut === null) {
            errors.debut = {
                message: 'Veuillez renseigner la date de demarrage de l\'évènemnt'
            }
        }

        //Verification de la fin debut
        if (fin === null) {
            errors.fin = {
                message: 'Veuillez renseigner la date finale de l\'évènemnt'
            }
        }

        //Verification de la categorie
        if (category === null || category === undefined || category === '') {
            errors.category = {
                message: 'Veuillez sélectionner la catégorie de l\'évènement'
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

        //S'il existe une erreur dans le formulaire lors de la soumission
        if (Object.keys(errors).length > 0) {
            toast.error('Oups...')
            setFormErrors(errors);
            return;
        }

        const formData = new FormData()
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        })

        galery.forEach((file, index) => {
            if (file instanceof File) {
                formData.append(`gallery[${index}]`, file)
            }
        });

        formData.append('category', category)
        formData.append('image', image)
        formData.append('debut', debut.toISOString())
        formData.append('fin', fin.toISOString())
        formData.append('contact', contact)
        formData.append('whatsapp', whatsapp)
        formData.append('description', descriptionRef.current?.getContent())
        formData.append('longitude', coordinates.lon)
        formData.append('latitude', coordinates.lat)

        if (params.id) {
            formData.append('_method', 'PUT');
        }

        //Soumission du formulaire
        const eventUrl = params.id ? `/evenements/update/${params.id}` : '/evenements/store'
        const eventAlertSuccess = params.id ? 'Évènement modifié' : 'Enregistrement effectué'
        submitEvent.mutate({eventUrl, formData}, {
            onSuccess: () => {
                toast.remove();
                toast.success(eventAlertSuccess);
                navigate('/mes-evenements');
            }    
        })
    }

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setLoadAdress(true)
        if (value.length > 2) { // Lancer la recherche après quelques caractères
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1&limit=10`);
            const data = await response.json();
            setSuggestions(data);
            setLoadAdress(false)
        } else {
            setSuggestions([]);
            setLoadAdress(false)
        }
    };

    const handleSelect = (suggestion) => {
        setValue('adresse', suggestion.display_name)
        setCoordinates({ lat: suggestion.lat, lon: suggestion.lon });
        setSuggestions([]);
    };


    //Observe input
    watch(element => {
        if (element.titre && element.organisateur && element.adresse) {
            setButtonDisabled(false)
        }
    })

    useEffect(() => {
        if(queryGetCatecories.isSuccess) onSetCategories(queryGetCatecories.data)
    }, [queryGetCatecories.data, params])

    useEffect(() => {
        if (!params.id) {
            setValue('organisateur', user.name + ' ' + user.lastname)
        }else{
            event.organisateur && setValue('organisateur', event.organisateur)
            event.titre && setValue('titre', event.titre)
            event.adresse && setValue('adresse', event.adresse)
            event.email && setValue('email', event.email)
            event.siteweb && setValue('site', event.siteweb)
            event.facebook && setValue('facebook', event.facebook)
            event.instagram && setValue('instagram', event.instagram)
        }
    }, [event, params])

    useEffect(() => {
        if (params.id) {
            getEvent.mutate(params.id)
        }
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
                                {params.id ? 'Modificiation d\'un évènement' : 'Ajout d\'un évènement'}
                            </h4>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AlertMessage errors={formErrors} />
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <Input 
                                        label= 'Titre'
                                        placeholder="Titre de l'évènement"
                                        important={true}
                                        inputRegister={{...register('titre', {
                                            required: 'Veuillez saisir le titre de l\'évènement',
                                            minLength: {
                                                value: '2',
                                                message: 'Veuillez saisir un titre d\'au moins 2 caractères'
                                            },
                                            maxLength: {
                                                value: '100',
                                                message: 'Le titre doit avoir 100 caractères maximum'
                                            }
                                        })}}
                                    />
                                    {errors.titre && <span className="text-danger"><i className="icon-info-circled"></i>{errors.titre.message}</span>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <Input
                                        label= 'Organisateur'
                                        placeholder="Le nom de l'organisateur"
                                        important={true}
                                        inputRegister={{...register('organisateur', {
                                            required: 'Veuillez saisir le nom de l\'organisateur',
                                            minLength: {
                                                value: '2',
                                                message: 'Veuillez saisir un nom d\'au moins 2 caractères'
                                            },
                                            maxLength: {
                                                value: '100',
                                                message: 'Le nom doit avoir 100 caractères maximum'
                                            }
                                        })}}
                                    />
                                    {errors.organisateur && <span className="text-danger"><i className="icon-info-circled"></i>{errors.organisateur.message}</span>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
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
                                    <Input 
                                        label= 'Adresse'
                                        onChange={(e) => handleInputChange(e)}
                                        placeholder="Adresse de l'évènement"
                                        important={true}
                                        inputRegister={{...register('adresse', {
                                            required: 'Veuillez saisir une adresse',
                                        })}}
                                    />
                                    {errors.adresse && <span className="text-danger"><i className="icon-info-circled"></i>{errors.adresse.message}</span>}
                                    <ul className="list-group" id='geoloc_adress'>
                                        {
                                            loadAdress ?
                                                <li className="list-group-item"><Loader /></li>
                                                : suggestions.map((suggestion, index) => (
                                                    <li key={index} className="list-group-item" onClick={() => handleSelect(suggestion)}>
                                                        <i className='icon-location-outline'></i> {suggestion.display_name}
                                                    </li>
                                                ))
                                        }
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='d-block'>Debut de l'évènement <span className='text-danger'>*</span></label>
                                    <DatePicker
                                        style={{width: '100%'}}
                                        format='dd-MM-yyyy à HH:mm'
                                        onChange={value => setDebut(value)}
                                        value={debut}
                                    />
                                    {formErrors.debut && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.debut.message}</span>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='d-block'>Fin de l'évènement <span className='text-danger'>*</span></label>
                                    <DatePicker
                                        style={{width: '100%'}}
                                        format='dd-MM-yyyy à HH:mm'
                                        onChange={value => setFin(value)}
                                        value={fin}
                                    />
                                    {formErrors.fin && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.fin.message}</span>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='d-block'>Contact <span className='text-danger'>*</span></label>
                                    <PhoneInput
                                        onChange={value => setContact(value)}
                                        value={contact}
                                        country={'ci'}
                                        required={true}
                                        placeholder={'Entrez un contact'}
                                        inputStyle={{
                                            width: '100%',
                                            height: '40px'
                                        }}
                                    />
                                    {formErrors.contact && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.contact.message}</span>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='d-block'>Whatsapp</label>
                                    <PhoneInput
                                        onChange={value => setWhatsapp(value)}
                                        value={whatsapp}
                                        country={'ci'}
                                        placeholder={'Entrez un contact whatsapp'}
                                        inputStyle={{
                                            width: '100%',
                                            height: '40px'
                                        }}
                                    />
                                    {formErrors.whatsapp && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.whatsapp.message}</span>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <Input
                                        label= 'Email'
                                        placeholder="Adresse email"
                                        inputRegister = {{...register('email', {
                                            pattern: {
                                                value: "/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})$/",
                                                message: "Veuillez renseigner une adresse email valide"
                                            },
                                        })}}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <Input
                                        label= 'Site web'
                                        placeholder="Url d'un site web"
                                        inputRegister = {{...register('site')}}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <Input
                                        label= 'Facebook'
                                        placeholder="Facebook"
                                        inputRegister = {{...register('facebook')}}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <Input
                                        label= 'Instagram'
                                        placeholder="Instagram"
                                        inputRegister = {{...register('instagram')}}
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
                                        value = {event.description}
                                    />
                                    {formErrors.description && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.description.message}</span>}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <UploadImage 
                                    onSetImage={setImage} 
                                    formErrors={formErrors}
                                    url={imageUrl}
                                />
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
