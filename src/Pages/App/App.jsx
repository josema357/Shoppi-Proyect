import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import './App.css'
import { Layout } from '../../Components/Layout/Layout';
import { ShoppingProvider } from '../../Context/Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu/CheckoutSideMenu';
import { AppRoutes } from '../../Routes/AppRoutes';

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
