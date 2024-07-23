import React, {useState} from "react";
import Input from "../../components/form/Input";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useForm} from "react-hook-form";
import InfoPersonnelles from "./InfoPersonnelles";
import Etablissement from "./Etablissement";


/**
 * Register for Prestataire
 * @returns {*}
 * @constructor
 */
export default function Prestataire (){
    const [step, setStep] = useState(1)
    const [phone, setPhone] = useState(null)
    const [phoneEtabl, setPhoneEtabl] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

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
     * @param {Object} data
     */
    const onSubmit = (data) => {
        setIsLoading(true)
        if (phoneEtabl === null || phoneEtabl === undefined || phoneEtabl === '') {
            setFormErrors({...formErrors, phoneEtabl: {
                message: 'Veuillez renseigner le contact de votre établissement'
            }})

            setIsLoading(false)
            return
        }

        setFormErrors({...formErrors, phoneEtabl: null})
        const formData = {...data, phone: phone, phoneEtabl:phoneEtabl}
        console.log(formData)
        setIsLoading(false)
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
                buttonDisabled = {buttonDisabled}
                onSetButtonDisabled={setButtonDisabled}
                isLoadingSubmit = {isLoading}
            />

        </form>
    )
}