import { createContext, useEffect, useState } from "react";
import { initializeLocalStorage } from "../Utils/iniLocalStorage";

export const ShoppingContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingProvider = ({children}) => {
    //Inicializar LocalStorage
    initializeLocalStorage();
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
    //Obtener los productos - API
    const [items, setItems] = useState(null);
    //Obtener productos por titulo
    const [searchByTitle, setSearchByTitle] = useState('');
    //Filtrar los productos
    const [filteredItems, setFilteredItems] = useState(null);
    //Obtener productos por categoria
    const [searchByCategory, setSearchByCategory] = useState(null);
    //Cuenta
    const [account, setAccount]=useState({});
    //Inicio de sesion
    const [signOut, setSignOut]=useState(true);
    //Mostrar mobile menu
    const [menuMobile, setMenuMobile] = useState(false);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response=> response.json())
        .then(data=> setItems(data))
    },[]);

    /**
     * Esta funcion filtra segun el titulo del producto
     * @param {Object} items objeto obtenido de la API
     * @param {String} searchByTitle texto ingresado por medio del input del Home
     * @returns 
     */
    const filteredItemByTitle=(items, searchByTitle)=>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    /**
     * Esta funcion filtra segun la categoria
     * @param {Object} items objeto obtenido de la API
     * @param {String} searchByCategory categoria seleccionada en el navbar
     * @returns 
     */
    const filteredItemByCategory=(items, searchByCategory)=>{
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    /**
     * Esta funcion retorna los items filtrados
     * @param {String} searchType tipo de filtro
     * @param {String} searchByTitle string para filtrar por titulo
     * @param {String} searchByCategory string para filtrar por categoria
     * @returns 
     */
    const filterBy=(searchType, searchByTitle, searchByCategory)=>{
        if(searchType==='BY_TITLE'){
            return filteredItemByTitle(items, searchByTitle);
        }
        if(searchType==='BY_CATEGORY'){
            return filteredItemByCategory(items, searchByCategory);
        }
        if(searchType==='BY_TITLE_AND_CATEGORY'){
            return filteredItemByCategory(items, searchByCategory)
                .filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }
        if(!searchType){
            return items;
        }
    }

    useEffect(()=>{
        if(searchByTitle && !searchByCategory){
            setFilteredItems(filterBy('BY_TITLE', searchByTitle, searchByCategory));
        }
        if(searchByCategory && !searchByTitle){
            setFilteredItems(filterBy('BY_CATEGORY', searchByTitle, searchByCategory));
        }
        if(!searchByCategory && !searchByTitle){
            setFilteredItems(filterBy(null, searchByTitle, searchByCategory));
        }
        if(searchByCategory && searchByTitle){
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', searchByTitle, searchByCategory));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[items, searchByTitle, searchByCategory]);


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
                setOrderCart,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory,
                account,
                setAccount,
                signOut,
                setSignOut,
                menuMobile,
                setMenuMobile
            }}>
            {children}
        </ShoppingContext.Provider>
    )
}