import { createContext, useContext, useState } from "react";

const MenuStateContext = createContext({
    menuMobileActive: false,
    setMenuMobileActive: () => {}
})

export const MenuContextProvider = ({children}) => {
    const [menuMobileActive, setMenuMobileActive] = useState(false)

    return (
        <MenuStateContext.Provider value={{
            menuMobileActive,
            setMenuMobileActive
        }}>
            {children}
        </MenuStateContext.Provider>
    )
}

export const useMenuStateProvider = () => useContext(MenuStateContext)