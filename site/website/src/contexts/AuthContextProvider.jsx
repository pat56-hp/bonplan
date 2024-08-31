import {createContext, useContext, useEffect, useState} from "react";

//Create du AuthContext avec les valeurs par defaut
const AuthStateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

//Partage des informations avec les enfants du context
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('logU'))

    const setToken = (token) => {
        _setToken(token)
        if (token) localStorage.setItem('logU', token)
        else {
            localStorage.removeItem('logU')
        }
    }

    return (
        <AuthStateContext.Provider value={{
            user,
            token,
            setToken,
            setUser
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}

//Fonction d'utilisation du Auth context
export const useAuthStateProvider = () => useContext(AuthStateContext)