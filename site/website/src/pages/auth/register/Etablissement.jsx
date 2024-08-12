import React, {useEffect, useState} from "react";
import Input from "../../components/form/Input";
import PhoneInput from "react-phone-input-2";
import {useQuery} from '@tanstack/react-query'
import {getRequest} from "../../queries/sendRequest";
import Select from 'react-select'


/**
 * Component of info etablissement for register prestataire
 * @param onSetStep
 * @param display
 * @param onSetDisplay
 * @param onRegister
 * @param errors
 * @param formErrors
 * @param watch
 * @param phoneEtabl
 * @param onSetPhoneEtabl
 * @param onSetCategory
 * @param buttonDisabled
 * @param onSetButtonDisabled
 * @param isLoadingSubmit
 * @constructor
 */
export default function Etablissement ({
        onSetStep,
        display,
        onSetDisplay,
        register,
        errors,
        formErrors,
        watch,
        onSetPhoneEtabl,
        onSetCategory,
        buttonDisabled,
        onSetButtonDisabled,
        isLoadingSubmit
    }){

    const [categories, setCategories] = useState([])
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

    useEffect(() => {
        onSetCategories(data)
    }, [data])


    const [isLoading, setIsLoading] = useState(false)

    /** @Function prevent on step 1 for register **/
    const handleClickToNext = (e) => {
        e.preventDefault()

        setIsLoading(true)
        setTimeout(() => {
            onSetStep(1)
            onSetDisplay({
                info: 'd-block',
                etablissement: 'd-none'
            })
            setIsLoading(false)
        }, 500)
    }

    /** Watch element form **/
    watch(element => {
        if (element.etablissement && element.ville && element.adresse){
            onSetButtonDisabled(false)
        }else{
            onSetButtonDisabled(true)
        }
    })

    return (
        <div className={`etablissement m-0 ${display.etablissement}`}>
            <div className="form-group">
                <Input
                    label="Etablissement"
                    important="true"
                    placeholder="Le nom de votre établissement"
                    inputRegister ={{...register('etablissement', {
                            required: "Veuillez saisir le nom de votre établissement",
                            minLength: {
                                value: 3,
                                message: "Veuillez saisir un nom d'au moins 3 caractères"
                            },
                            maxLength: {
                                value: 100,
                                message: "Le nom de votre établissement doit avoir 100 caractères maximum"
                            }
                        })}}
                />
                {errors.etablissement && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.etablissement.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="categorie">Catégorie <span className="text-danger">*</span></label>
                <Select
                    name="category"
                    options={categories}
                    onChange={option => onSetCategory(option.value)}
                    placeholder = "Sélectionnez une catégorie"
                    noOptionsMessage = {() => 'Aucune catégorie disponible'}
                />
                {formErrors.category && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.category.message}</span>}
            </div>
            <div className="form-group">
                <Input
                    label="Ville"
                    important="true"
                    placeholder="Ville d'emplacement de votre établissement"
                    inputRegister ={{...register('ville', {
                            required: "Veuillez saisir la ville d'emplacement de votre établissement",
                            maxLength: {
                                value: 100,
                                message: "La ville doit avoir 100 caractères maximum"
                            }
                        })}}
                />
                {errors.ville && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.ville.message}</span>}
            </div>
            <div className="form-group">
                <Input
                    label="Adresse"
                    important="true"
                    placeholder="L'adresse de votre établissement"
                    inputRegister ={{...register('adresse', {
                            required: "Veuillez saisir l'adresse de votre établissement",
                            maxLength: {
                                value: 100,
                                message: "L'adresse doit avoir 100 caractères maximum"
                            }
                        })}}
                />
                {errors.adresse && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.adresse.message}</span>}
            </div>
            <div className="form-group">
                <label>Contact de l'établissement<span className="text-danger">*</span></label>
                <PhoneInput
                    country={'ci'}
                    required={true}
                    onChange={value => onSetPhoneEtabl(value)}
                    placeholder={'Entrez le contact de votre établissement'}
                    inputStyle={{
                        width: '100%',
                        height: '40px'
                    }}
                />
                {formErrors.phoneEtabl && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{formErrors.phoneEtabl.message}</span>}
            </div>
            <div className="form-group">
                <Input
                    label="Email de l'établissement"
                    type="email"
                    placeholder="L'email de votre établissement"
                    inputRegister = {{...register('etablissementEmail', {
                            pattern: {
                                value: "/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})$/",
                                message: "Veuillez renseigner une adresse email valide"
                            },
                        })}}
                />
                {errors.etablissementEmail && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.etablissementEmail.message}</span>}
            </div>

            <div id="pass-info" className="clearfix"></div>
            <button
                className={`btn_full ${buttonDisabled && 'disabled'}`}
                disabled={buttonDisabled}
                type="submit"
            >
                Valider l'inscription
                {
                    isLoadingSubmit
                        ? <i className="icon-spin6 animate-spin"></i>
                        : <i className="icon-check-2"></i>
                }
            </button>
            <a
                className="btn_full_outline"
                href="#"
                onClick={handleClickToNext}
            >
                <i className="icon-left-3"></i>
                Précédent {isLoading && <i className="icon-spin6 animate-spin"></i>}
            </a>
        </div>
    )
}