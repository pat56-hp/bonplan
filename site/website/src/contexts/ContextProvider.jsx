import {useContext, useState} from "react";

//Creation du context avec des valeurs par defaut
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

//Fournisseur du context
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(null)

    //On verifie si le token existe
    const setToken = (token) => {
        _setToken(token)

        if (token){
            localStorage.setItem('logU', token)
        }else{
            localStorage.removeItem('logU')
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

//Acces aux valeurs du context
export const useStateContext = () => useContext(StateContext)