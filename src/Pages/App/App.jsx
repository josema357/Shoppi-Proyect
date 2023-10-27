import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import './App.css'
import { Layout } from '../../Components/Layout/Layout';
import { ShoppingProvider } from '../../Context/Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu/CheckoutSideMenu';
import { AppRoutes } from '../../Routes/AppRoutes';
import { NavbarMobile } from '../../Components/NavbarMobile/NavbarMobile';
import { MenuMobile } from '../../Components/MenuMobile/MenuMobile';

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <Navbar/>
        <NavbarMobile/>
        <Layout>
          <AppRoutes/>
        </Layout>
        <CheckoutSideMenu/>
        <MenuMobile/>
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
