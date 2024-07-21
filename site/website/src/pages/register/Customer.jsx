import React from "react";
import Input from "../../components/form/Input";

export default function Customer (){
    return (
        <form>
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
                    label="Email"
                    type="email"
                    important="true"
                    placeholder="Votre adresse email"
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
            <button className="btn_full">S'inscrire</button>
        </form>
    )
}