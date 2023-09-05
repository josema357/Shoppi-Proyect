import { createContext } from "react";

const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingContextProvider = ({children}) => {
    return (
        <ShoppingContext.Provider>
            {children}
        </ShoppingContext.Provider>
    )
}