import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { MyAccount } from "../Pages/MyAccount/MyAccount";
import { MyOrder } from "../Pages/MyOrder/MyOrder";
import { MyOrders } from "../Pages/MyOrders/MyOrders";
import { SignIn } from "../Pages/SignIn/SignIn";
import { NotFound } from "../Pages/NotFound/NotFound";
import { useContext } from "react";
import { ShoppingContext } from "../Context/Context";
import { checkIfHasAccount } from "../Utils/checkIfHasAccount";

const AppRoutes = () => {
    const context = useContext(ShoppingContext);
    //Sesion cerrada
    const signOut= localStorage.getItem('sign-out');
    const parsedSignOut= JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;
    //Tiene una cuenta
    const returnedObject=checkIfHasAccount(context.account);
    const hasUserAnAccount=returnedObject.hasUserAnAccount;
  return (
    useRoutes([
        { path: '/', element: <Home/> },
        { path: '/Shoppi-Proyect', element: <Home/> },
        { path: '/:category', element: <Home/> },
        { path: '/my-account', element: hasUserAnAccount && !isUserSignOut ? <MyAccount/> : <Navigate replace to={'/sign-in'}/> },
        { path: '/my-order', element: hasUserAnAccount && !isUserSignOut ? <MyOrder/> : <Navigate replace to={'/sign-in'}/> },
        { path: '/my-orders', element: hasUserAnAccount && !isUserSignOut ? <MyOrders/> : <Navigate replace to={'/sign-in'}/> },
        { path: '/my-orders/last', element: hasUserAnAccount && !isUserSignOut ? <MyOrder/> : <Navigate replace to={'/sign-in'}/> },
        { path: '/my-orders/:id', element: hasUserAnAccount && !isUserSignOut ? <MyOrder/> : <Navigate replace to={'/sign-in'}/> },
        { path: '/sign-in', element: <SignIn/> },
        { path: '/*', element: <NotFound/> },
      ])
  )
}

export {AppRoutes};