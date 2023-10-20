import { createContext, useState } from "react";

export const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingProvider = ({children}) => {
    //Contador del carrito
    const [count, setCount] = useState(0);
    //Mostrar detalles
    const [detailOpen, setDetailOpen] = useState(false);
    //Detalles del producto
    const [productToShow, setProductToShow] = useState({
        title:'',
        price:'',
        description:'',
        images:[],
    });
    //Carrito de compras - Agregar productos
    const [shoppingCart, setShoppingCart] = useState([]);
    //Carrito de compras - Ordenar productos
    const [orderCart, setOrderCart] = useState([]);
    //Mostrar checkout
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
                setCheckoutSideOpen,
                orderCart,
                setOrderCart
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}