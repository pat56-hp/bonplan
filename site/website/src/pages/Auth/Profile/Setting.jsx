import React, { useState } from 'react'
import Input from '../../../components/form/Input'
import { useForm } from 'react-hook-form'
import { postRequest } from '../../../queries/sendRequest'
import toast from 'react-hot-toast'

/**
 * Component Setting of profil 
 */
export default function Setting() {

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [formErrors, setFormErrors] = useState({})

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: {errors}
    } = useForm()

    /**
     * Submit data to the server
     * @param {Object} data 
     */
    const onSubmit = (data) => {
        setIsLoading(true)
        setFormErrors({})
        toast.loading('Patientez...')

        setTimeout(() => {
            postRequest('/profile/update/password', data)
            .then(() => {
                setIsLoading(false)
                reset()
                toast.remove()
                toast.success('Votre mot de passe a été mis à jour')
            })
            .catch(err => {
                if (err.status === 422) {
                    const {errors} = err.response
                    Object.keys(errors).map(key => {
                        setFormErrors(formErrors => (
                            {...formErrors, [key]:{
                                message: errors[key]
                            }}
                        ))
                    })
                }

                if (err.status === 406) {
                    const {message} = err.response
                    setFormErrors(formErrors => (
                        {...formErrors, error: {
                            message: message
                        }}
                    ))
                    toast.remove()
                    toast.error(message)
                }

                setIsLoading(false)
            })
        }, 800)
    }

    /**
     * Watch form elements
     */
    watch(element => {
        if (element.newpassword !== element.newpassword_confirmation) {
            setButtonDisabled(true)
            return
        }else if (element.oldpassword && element.newpassword && element.newpassword_confirmation){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    })

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h4 className='my-4'>Modifier mon mot de passe</h4>
                    {
                        formErrors.error &&
                        <div className="alert alert-danger" role="alert">
                            {formErrors.error.message}
                        </div>
                    }
                    <div className='form-group'>
                        <Input
                            label= 'Ancien mot de passe'
                            placeholder= 'Veuillez renseigner votre ancien mot de passe'
                            type={'password'}
                            isPassword = {true}
                            important={true}
                            inputRegister = {{...register('oldpassword',{
                                required: "Veuillez renseigner votre ancien mot de passe"
                            })}}
                        />
                        {(errors.oldpassword || formErrors.oldpassword) && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.oldpassword.message ?? formErrors?.oldpassword?.message}</span>}
                    </div>
                    <div className='form-group'>
                        <Input
                            label= 'Nouveau mot de passe'
                            placeholder= 'Veuillez renseigner votre nouveau mot de passe'
                            type={'password'}
                            isPassword = {true}
                            important={true}
                            inputRegister = {{...register('newpassword',{
                                required: "Veuillez renseigner votre nouveau mot de passe",
                                minLength: {
                                    value: 6,
                                    message: "Le mot de passe doit contenir au moins 6 caractères"
                                }
                            })}}
                        />
                        {(errors.newpassword || formErrors.newpassword) && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors?.newpassword?.message ?? formErrors?.newpassword?.message}</span>}
                    </div>
                    <div className='form-group'>
                        <Input
                            label= 'Confirmez le nouveau mot de passe'
                            placeholder= 'Veuillez confirmez votre nouveau mot de passe'
                            type={'password'}
                            isPassword = {true}
                            important={true}
                            inputRegister = {{...register('newpassword_confirmation',{
                                required: "Veuillez confirmer votre nouveau mot de passe",
                            })}}
                        />
                        {(errors.newpassword_confirmation || formErrors.newpassword_confirmation) && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors?.newpassword_confirmation?.message ?? formErrors?.newpassword_confirmation?.message}</span>}
                    </div>
                    <div className='form-group'>
                        <button
                            className={`btn_full ${buttonDisabled && 'disabled'}`}
                            disabled={buttonDisabled}
                            type="submit"
                        >
                            Enregistrer 
                            {
                                isLoading
                                    ? <i className="icon-spin6 animate-spin"></i>
                                    : <i className="icon-floppy-1"></i>
                            }
                        </button>
                    </div>
                </div>
            </div>
       </form>
        <div className="divider"></div>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <h4 className='my-4'>Modifier mon adresse Email</h4>
                <button className={`btn_full btn_color`}>
                    Recevoir le lien de modification <i className='icon-email'></i>
                </button>
            </div>
        </div>
    </>
        
  )
}
