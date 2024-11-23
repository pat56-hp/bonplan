import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStateContext = createContext({
    user: {},
    token: null,
    setUser: () => {},
    setToken: () => {},
    logout: () => {},
})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(AsyncStorage.getItem('userToken'))

    const setToken = async (token) => {
        _setToken(token)
        await AsyncStorage.setItem('userToken', token)
    }

    const logout = async () => {
        _setToken(null)
        await AsyncStorage.removeItem('userToken')
    }

    const checkToken = async () => {
        const storedToken = await AsyncStorage.getItem('userToken')
        if (storedToken) {
            _setToken(storedToken)
        }
    }

    useEffect(() => {
        checkToken()
    }, [])

    return (
        <AuthStateContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            logout,
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}

export const useAuthStateContext = () => useContext(AuthStateContext)