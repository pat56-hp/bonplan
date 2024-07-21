import React, {useState} from "react";
import Input from "../../components/form/Input";

export default function Prestataire (){
    const [step, setStep] = useState(1)

    const [display, setDisplay] = useState({
        info: 'd-block',
        etablissement: 'd-none'
    })

    const handleClick = (e) => {
        e.preventDefault()

        setStep(1)
        setDisplay({
            info: 'd-block',
            etablissement: 'd-none'
        })
    }

    return (
        <form>
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
            />
            <Etablissement
                onSetStep = {setStep}
                display={display}
                onSetDisplay={setDisplay}
            />

        </form>
    )
}

function InfoPersonnelles ({onSetStep, display, onSetDisplay}){
    const [isLoading, setIsLoading] = useState(false)

    const handleClickToNext = (e) => {
        e.preventDefault()

        setIsLoading(true)

        setTimeout(() => {
            onSetStep(2)
            onSetDisplay({
                info: 'd-none',
                etablissement: 'd-block'
            })
            setIsLoading(false)
        }, 500)
    }

    return (
        <div className={`info_personnelles m-0 ${display.info}`}>
            <div className="form-group">
                <Input
                    label="Nom"
                    important="true"
                    placeholder="Votre nom"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Prénom(s)"
                    important="true"
                    placeholder="Votre prénom"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Contact"
                    important="true"
                    placeholder="Votre contact"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Email"
                    important="true"
                    type="email"
                    placeholder="Votre email"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Mot de passe"
                    type="password"
                    important="true"
                    placeholder="Votre mot de passe"
                    isPassword = {true}
                />
            </div>
            <div className="form-group">
                <Input
                    label="Confirmation du mot de passe"
                    type="password"
                    important="true"
                    placeholder="Confirmez votre mot de passe"
                    isPassword = {true}
                />
            </div>

            <div id="pass-info" className="clearfix"></div>
            <a
                className="btn_full"
                href="#"
                onClick={handleClickToNext}
            >
                Suivant
                {isLoading
                    ? <i className="icon-spin6 animate-spin"></i>
                    : <i className="icon-right-big"></i>
                }</a>
        </div>
    )
}

function Etablissement ({onSetStep, display, onSetDisplay}){
    const [isLoading, setIsLoading] = useState(false)

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

    return (
        <div className={`etablissement m-0 ${display.etablissement}`}>
           <div className="form-group">
                <Input
                    label="Etablissement"
                    important="true"
                    placeholder="Le nom de votre établissement"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Ville"
                    important="true"
                    placeholder="Ville"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Adresse"
                    important="true"
                    placeholder="L'adresse de l'établissement"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Contact"
                    important="true"
                    placeholder="Le contact de votre établissement"
                />
            </div>
            <div className="form-group">
                <Input
                    label="Email"
                    type="email"
                    placeholder="L'email de votre établissement"
                />
            </div>

            <div id="pass-info" className="clearfix"></div>
            <button className="btn_full">Valider l'inscription <i className="icon-check-2"></i></button>
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