import React, {useState} from "react";
import Input from "../../components/form/Input";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useForm} from "react-hook-form";
import InfoPersonnelles from "./InfoPersonnelles";
import Etablissement from "./Etablissement";
import {useQuery} from "@tanstack/react-query";
import {postRequest} from "../../queries/sendRequest";
import toast from "react-hot-toast";
import { useAuthStateProvider } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";


/**
 * Register for Prestataire
 * @returns {*}
 * @constructor
 */
export default function Prestataire (){
    const {setUser, setToken} = useAuthStateProvider()
    const [step, setStep] = useState(1)
    const [phone, setPhone] = useState(null)
    const [phoneEtabl, setPhoneEtabl] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState(null)
    const navigate = useNavigate()

    const [display, setDisplay] = useState({
        info: 'd-block',
        etablissement: 'd-none'
    })

    const {
        handleSubmit,
        watch,
        register,
        formState: {errors}
    } = useForm()

    /**
     * Submit register
     * @param {Object} datas
     */
    const onSubmit = (datas) => {
        setFormErrors({})
        setIsLoading(true)
        setTimeout(() => {
            if (category === null || category === undefined || category === ""){
                setFormErrors({category: {
                    message: 'Veuillez sélectionner une catégorie'
                }})
    
                setIsLoading(false)
                return;
            }

            if (phoneEtabl === null || phoneEtabl === undefined || phoneEtabl === '') {
                setFormErrors({phoneEtabl: {
                    message: 'Veuillez renseigner le contact de votre établissement'
                }})
    
                setIsLoading(false)
                return
            }
    
            const formData = {...datas, phone: phone, phoneEtabl:phoneEtabl, category: category, type: 1}
            toast.loading('Patientez...')
            /** Prestataire Register **/
            postRequest('/register', formData)
                .then((data) => {
                    setUser(data.user)
                    setToken(data.access_token)
                    setIsLoading(false)
                    setCategory(null)
                    setPhone(null)
                    setStep(1)
                    toast.remove()
                    navigate('/mon-profil')
                })
                .catch(error => {
                    if (error.status === 422){
                        const {errors} = error.response
                        Object.keys(errors).map(key => {
                            setFormErrors(formError => (
                                {...formError, [key]:{
                                    message: errors[key]
                                }}
                            ))
                        })
                        console.log(error.message, error.response)
                    }
    
                    setIsLoading(false)
                    toast.remove()
                })
            setIsLoading(false)
        }, 800);
    }

    /**
     * Prevent step to register
     * @param e
     */
    const handleClick = (e) => {
        e.preventDefault()

        setStep(1)
        setDisplay({
            info: 'd-block',
            etablissement: 'd-none'
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                {
                    Object.keys(formErrors).length > 0 &&
                    <div className="alert alert-danger" role="alert">
                    {Object.keys(formErrors).map((key, i) => (
                        <span key={i}><i className="icon-info-circled"></i> {formErrors[key].message} <br/></span>
                    ))}
                    </div>
                    
                }
            <div className="bs-wizard row">

                <div className={`col-6 bs-wizard-step complete`}>
                    <div className="text-center bs-wizard-stepnum">Infos personnelles</div>
                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                    <a
                        href="#"
                        onClick={handleClick}
                        className="bs-wizard-dot"
                    ></a>
                </div>

                <div className={`col-6 bs-wizard-step ${step === 2 ? 'complete' : 'disabled'}`}>
                    <div className="text-center bs-wizard-stepnum">Etablissement</div>
                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                    <a href="#" className="bs-wizard-dot"></a>
                </div>
            </div>

            <InfoPersonnelles
                onSetStep={setStep}
                display={display}
                onSetDisplay={setDisplay}
                register = {register}
                errors = {errors}
                watch = {watch}
                phone = {phone}
                onSetPhone = {setPhone}
            />
            <Etablissement
                onSetStep = {setStep}
                display={display}
                onSetDisplay={setDisplay}
                register = {register}
                errors = {errors}
                formErrors = {formErrors}
                watch = {watch}
                onSetPhoneEtabl = {setPhoneEtabl}
                onSetCategory = {setCategory}
                buttonDisabled = {buttonDisabled}
                onSetButtonDisabled={setButtonDisabled}
                isLoadingSubmit = {isLoading}
            />

        </form>
    )
}