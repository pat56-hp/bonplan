import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../../../components/form/Input";
import {useForm} from "react-hook-form";
import {useAuthStateProvider} from "../../../contexts/AuthContextProvider";
import {useNavigate} from "react-router";
import {toast} from "react-hot-toast";
import useHttp from "../../../hooks/useHttp";
import { useMutation } from "@tanstack/react-query";
import AlertMessage from "../../../components/AlertMessage";

const Login = () => {
    const { setUser, setToken } = useAuthStateProvider()
    const { sendRequest } = useHttp()
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

    //Mutation of login
    const mutation = useMutation({
        mutationFn: async (data) => await sendRequest('/login', 'POST', data),
        mutationKey: ['login'],
        onMutate: () => {
            toast.loading('Patientez...')
            setIsLoading(true)
        },
        onSuccess: ({data}) => {
            setIsLoading(false)
            setUser(data.user)
            setToken(data.access_token)
            reset()
            toast.remove()
            toast.success('Heureux de vous revoir')
            if(data.user.type === 0) navigate('/mon-profil')
            else navigate('/mes-etablissements')
        },
        onError: (error) => {
            setIsLoading(false)
            if (error.status === 422){
                const errors = error.response.data
                Object.keys(errors).map(key => {
                    setFormErrors(preError => (
                        {...preError, [key]: {
                            message: errors[key]
                        }}
                    ))
                })
            }else if (error.status === 406){
                setFormErrors(preError => (
                    {...preError, error: {
                        message: error.response.message
                    }}
                ))
            }
        },
        
    })

    watch(element => {
        if (element.email && element.password && element.password.length > 5) {
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    })

    //Submit data
    const onsubmit = (data) => {
        setFormErrors({})
        mutation.mutate(data)
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
                <AlertMessage errors={formErrors} />
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
                    {(errors.email || formErrors.email) && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors?.email?.message ?? formErrors?.email?.message}</span>}
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
                    {(errors.password || formErrors.password) && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{errors?.password?.message ?? formErrors?.password?.message}</span>}
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