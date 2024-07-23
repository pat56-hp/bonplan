import React, {useEffect, useRef, useState} from "react";
import Input from "../../components/form/Input";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useForm } from "react-hook-form"

/**
 * Register for customer
 * @returns {*}
 * @constructor
 */
export default function Customer (){
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState({})
    const [phone, setPhone] = useState(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    /**
     * Submit form function
     * @param {Object} data
     */
    const onSubmit = (data) => {
        //TODO: Verifie si le contact est bien renseigné
        if (phone === null || phone === undefined || phone === "") {
            setFormErrors({...formErrors, phone: {
                message: "Veuillez renseigner votre contact"
            }})

            return
        }

        setFormErrors({...formErrors, phone: null})
        const formData = {...data, phone: phone}
        console.log(formData)
    }

    /**  Watch element **/
    watch((element) => {
        if (element.password !== element.password_confirmation){
            setFormErrors({...formErrors, passwordConfirm: {
                message: "La confirmation du mot de passe ne correspond pas"
            }})
            setButtonDisabled(true)
            return
        }

        setFormErrors({...formErrors, passwordConfirm: null})

        if (element.name && element.lastname && element.email && element.password && element.password_confirmation){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <Input
                    label="Nom"
                    important="true"
                    placeholder="Votre nom"
                    inputRegister = {{...register('name', {
                        required: "Veuillez saisir votre nom",
                        minLength: {
                            value: 3,
                            message: "Veuillez saisir un nom d'au moins 3 caractères"
                        },
                        maxLength: {
                            value: 100,
                            message: "Votre nom doit avoir 100 caractères maximum"
                        }
                    })}}
                />
                {errors.name && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.name.message}</span>}
            </div>
            <div className="form-group">
                <Input
                    label="Prénom(s)"
                    important="true"
                    placeholder="Votre prénom"
                    inputRegister = {{...register('lastname', {
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
            <div className="form-group">
                <label htmlFor="phone">Contact <span className="text-danger">*</span></label>
                <PhoneInput
                    country={'ci'}
                    name="phone"
                    onChange={value => setPhone(value)}
                    required={true}
                    placeholder={'Entrez votre contact'}
                    inputStyle={{
                        width: '100%',
                        height: '40px'
                    }}
                />
                {
                    formErrors.phone &&
                    <span className="text-danger text-sm-start">
                            <i className="icon-info-circled"></i>
                        {formErrors.phone.message}
                    </span>
                }
            </div>
            <div className="form-group">
                <Input
                    label="Email"
                    type="email"
                    important="true"
                    placeholder="Votre adresse email"
                    inputRegister = {{...register('email', {
                        required: "Veuillez saisir votre adresse email",
                        pattern: {
                            value: "/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})$/",
                            message: "Veuillez renseigner une adresse email valide"
                        },
                    })}}
                />
                {errors.email && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.email.message}</span>}
            </div>
            <div className="form-group">
                <Input
                    label="Mot de passe"
                    type="password"
                    important="true"
                    placeholder="Votre mot de passe"
                    isPassword = {true}
                    inputRegister = {{...register("password", {
                            required: "Veuillez saisir un mot de passe",
                            minLength: {
                                value: 6,
                                message: "Veuillez saisir un mot de passe d'au moins 6 caractères"
                            }
                        })}}

                />
                {errors.password && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.password.message}</span>}
            </div>
            <div className="form-group">
                <Input
                    label="Confirmation du mot de passe"
                    type="password"
                    important="true"
                    placeholder="Confirmez votre mot de passe"
                    isPassword = {true}
                    inputRegister = {{...register('password_confirmation', {
                        required: "Veuillez confirmer votre mot de passe"
                    })}}
                />
                {   (errors.password_confirmation ?? formErrors.passwordConfirm) &&
                    <span className="text-danger text-sm-start">
                        <i className="icon-info-circled"></i>
                        {errors.password_confirmation?.message ?? formErrors.passwordConfirm?.message}
                    </span>
                }
            </div>
            <div id="pass-info" className="clearfix"></div>
            <button
                className={`btn_full ${buttonDisabled && 'disabled'}`}
                disabled={buttonDisabled}
                type="submit"
            >S'inscrire</button>
        </form>
    )
}