import React from "react";
import {Link} from "react-router-dom";
import Input from "../components/form/Input";

const Login = () => {
    return (
        <form>
            <a href="#0" className="social_bt facebook">Se connecter avec Facebook</a>
            <a href="#0" className="social_bt google">Se connecter avec Google</a>
            <div className="divider"><span>Ou</span></div>
            <div className="form-group">
                <Input
                    label={'Email'}
                    important={true}
                    type={'email'}
                    placeholder={'Votre adresse email'}
                    inputRegister={''}
                />
            </div>
            <div className="form-group">
                <Input
                    label={'Mot de passe'}
                    important={true}
                    type={'password'}
                    placeholder={'Mot de passe'}
                    isPassword = {true}
                    inputRegister={''}
                />
            </div>
            <p className="small">
                <a href="#">Mot de passe oublié ?</a>
            </p>
            <button className="btn_full">Se connecter</button>
            <Link to="/register" className="btn_full_outline">S'inscrire</Link>
        </form>
    )
}

export default Login