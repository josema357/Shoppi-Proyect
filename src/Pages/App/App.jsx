import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { Navbar } from '../../Components/Navbar/Navbar';
import './App.css'
import { Layout } from '../../Components/Layout/Layout';
import { ShoppingProvider } from '../../Context/Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu/CheckoutSideMenu';

const AppRoutes=()=>{
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/*', element: <NotFound/> },
  ])
  return routes;
}

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Navbar/>
        <Layout>
          <AppRoutes/>
        </Layout>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
