import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { Navbar } from '../../Components/Navbar/Navbar';
import './App.css'
import { Layout } from '../../Components/Layout/Layout';
import { ShoppingContextProvider } from '../../Context/Context';

const AppRoutes=()=>{
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/*', element: <NotFound/> },
  ])
  return routes;
}

function App() {
  return (
    <ShoppingContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Layout>
          <AppRoutes/>
        </Layout>
      </BrowserRouter>
    </ShoppingContextProvider>
  )
}

export default App
