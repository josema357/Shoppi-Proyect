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
    const [shoppingCart, setShoppingCart] = useState([]);
    const [checkoutSideOpen, setCheckoutSideOpen] = useState(false);

    return (
        <ShoppingContext.Provider 
            value={{ 
                count, 
                setCount,
                detailOpen,
                setDetailOpen,
                productToShow,
                setProductToShow,
                shoppingCart,
                setShoppingCart,
                checkoutSideOpen,
                setCheckoutSideOpen
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}