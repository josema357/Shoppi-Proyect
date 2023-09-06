import { createContext, useState } from "react";

export const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [detailOpen, setDetailOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({
        title:'',
        price:'',
        description:'',
        images:[],
    });
    return (
        <ShoppingContext.Provider 
            value={{ 
                count, 
                setCount,
                detailOpen,
                setDetailOpen,
                productToShow,
                setProductToShow,
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}