import React, { useState } from 'react'
import Input from '../../../components/form/Input'
import PhoneInput from 'react-phone-input-2'
import { useAuthStateProvider } from '../../../contexts/AuthContextProvider'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { postRequest } from '../../../queries/sendRequest'
import { useNavigate } from 'react-router-dom'
import AlertMessage from '../../../components/AlertMessage'

/**
 * 
 * @param {import('react').SetStateAction} onSetIsUpdating 
 * @returns 
 */
export default function EditProfile({onSetIsUpdating}) {
    const {user, setUser, setToken} = useAuthStateProvider()
    const [formErrors, setFormErrors] = useState({})
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [phone, setPhone] = useState(user.phone)
    const navigate = useNavigate()
    

    const {
        register,
        formState: {errors},
        handleSubmit,
        watch,
        reset
    } = useForm()

    /**
     * Submit data to update profile
     * @param {Object} data 
     * @returns 
     */
    const onSubmit = (data) => {
        setIsLoading(true)
        setFormErrors({})
        const errors = {}
        //Error message for phone
        if (phone === null || phone === '' || phone === undefined) {
            errors.phone = {
                message: 'Veuillez renseigner votre contact'
            }
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            setIsLoading(false)
            return 
        }

        toast.loading('Patientez...')
        console.log(data)
        //Submit data to server
        setTimeout(() => {
            postRequest('/profile/update', {...data, phone: phone})
                .then(({data}) => {
                    setUser(data)
                    reset()
                    setIsLoading(false)
                    onSetIsUpdating(false)
                    toast.remove()
                    toast.success('Mise à jour effectuée avec succès')
                })
                .catch(err => {
                    if(err.status === 422){
                        const {errors} = err.response
                        Object.keys(errors).map(key => {
                            setFormErrors(formErrors => (
                                {...formErrors, [key]:{
                                    message: errors[key]
                                }}
                            ))
                        })
                    }else if(err.status === 401 || err.status === 419) {
                        setToken(null)
                        setUser(null)
                        navigate('/login')
                    }
                    setIsLoading(false)
                })
        }, 800)
    }

    /**
     * Watch input
     */
    watch(element => {
        if (element.name && element.lastname) {
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    })

  return (
    <>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <AlertMessage errors={formErrors} />
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h4 className='my-4'>Modification du profile</h4>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <Input
                                label= 'Nom'
                                placeholder= 'Veuillez renseigner votre nom'
                                important={true}
                                defaultValue={user.name}
                                inputRegister = {{...register('name', {
                                    required: 'Veuillez saisir votre nom',
                                    minLength : {
                                        value: 3,
                                        message: "Veuillez saisir un nom d'au moins 3 caractères"
                                    },
                                    maxLength : {
                                        value: 100,
                                        message: "Votre nom doit avoir 100 caractères maximum"
                                    }
                                }
                                )}}
                            />
                            {errors.name && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.name.message}</span>}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <Input
                                label= 'Prénom(s)'
                                placeholder= 'Veuillez renseigner votre prénom'
                                important={true}
                                defaultValue={user.lastname}
                                inputRegister= {{...register('lastname', {
                                    required: "Veuillez saisir votre prénom",
                                    minLength: {
                                        value: 3,
                                        message: "Veuillez saisir un prénom d'au moins 3 caractères"
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Votre prénom doit avoir 100 caractères maximum"
                                    }
                                })}}
                            />
                            {errors.lastname && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.lastname.message}</span>}
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label htmlFor="phone">Contact <span className="text-danger">*</span></label>
                            <PhoneInput 
                                country={'ci'}
                                name="phone"
                                value={phone}
                                onChange={value => setPhone(value)}
                                required={true}
                                placeholder={'Entrez votre contact'}
                                inputStyle={{
                                    width: '100%',
                                    height: '40px'
                                }}
                            />
                            {formErrors.phone && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{formErrors.phone.message}</span>}
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <Input
                                label= 'Adresse'
                                placeholder= 'Veuillez renseigner votre adresse'
                                defaultValue={user.adresse}
                                inputRegister={{...register('adresse', {
                                    maxLength: {
                                        value: 250,
                                        message: 'Votre adresse ne doit pas dépasser 250 lettres',
                                    }
                                })}}
                            />
                        </div>
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
  )
}
