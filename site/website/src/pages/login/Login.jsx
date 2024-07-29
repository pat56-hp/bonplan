import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../../components/form/Input";
import {useForm} from "react-hook-form";
import {postRequest} from "../../queries/sendRequest";
import {useAuthStateProvider} from "../../contexts/AuthContextProvider";
import {useNavigate} from "react-router";
import {toast} from "react-hot-toast";

const Login = () => {
    const { setUser, setToken } = useAuthStateProvider()
    const navigate = useNavigate()

    const {
        formState: {errors},
        register,
        reset,
        watch,
        handleSubmit
    } = useForm()

    const [formErrors, setFormErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    watch(element => {
        if (element.email && element.password && element.password.length > 5) {
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    })

    const onsubmit = (data) => {
        setFormErrors({})
        setIsLoading(true)
        toast.loading('Patientez...')
        setTimeout(() => {
            postRequest('/login', data)
                .then((data) => {
                    setIsLoading(false)
                    const user = data.user
                    const token = data.access_token
                    setUser(user)
                    setToken(token)
                    reset()
                    toast.remove()
                    toast.success('Heureux de vous revoir')
                    navigate('/mon-profil')
                })
                .catch(error => {
                    setIsLoading(false)
                    if (error.status === 422){
                        Object.keys(error.response.data).map(key => {
                            setFormErrors(preError => (
                                {...preError, [key]: {
                                    message: error[key]
                                }}
                            ))
                        })
                    }

                    if (error.status === 406){
                        setFormErrors(preError => (
                            {...preError, error: {
                                message: error.response.message
                            }}
                        ))
                    }

                    //toast.remove()
                    //toast.error('Oups...')
                })
        }, 700)
    }

    return (
        <>
            <div className="text-center">
                <h3 className="text-uppercase mt-0">Se connecter</h3>
            </div>

            <hr/>
            <form onSubmit={handleSubmit(onsubmit)}>
                <a href="#0" className="social_bt facebook">Se connecter avec Facebook</a>
                <a href="#0" className="social_bt google">Se connecter avec Google</a>
                <div className="divider"><span>Ou</span></div>
                {
                    formErrors.error &&
                    <div className="alert alert-danger" role="alert">
                        <i className="icon-info-circled"></i> {formErrors.error.message}
                    </div>
                }
                <div className="form-group">
                    <Input
                        label={'Email'}
                        important={true}
                        type={'email'}
                        placeholder={'Votre adresse email'}
                        inputRegister={{...register('email', {
                                required: 'Veuillez saisir votre adresse email'
                            })}}
                    />
                    {(errors.email || formErrors.email) && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.email.message ?? formErrors.email.message}</span>}
                </div>
                <div className="form-group">
                    <Input
                        label={'Mot de passe'}
                        important={true}
                        type={'password'}
                        placeholder={'Mot de passe'}
                        isPassword = {true}
                        inputRegister={{...register('password', {
                                required: 'Veuillez saisir votre mot de passe'
                            })}}
                    />
                    {(errors.password || formErrors.password) && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors.password.message ?? formErrors.password.message}</span>}
                </div>
                <p className="small">
                    <a href="#">Mot de passe oublié ?</a>
                </p>
                <button
                    className={`btn_full ${buttonDisabled && 'disabled'}`}
                    disabled={buttonDisabled}
                    type="submit"
                >
                    Se connecter {isLoading && <i className="icon-spin6 animate-spin"></i>}
                </button>
                <Link to="/register" className="btn_full_outline">S'inscrire</Link>
            </form>
        </>
    )
}

export default Login