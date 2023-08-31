import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import './App.css'

function App() {
  return (
    <>
      <div className='App bg-orange-400'>
        <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
      </div>
    </>
  )
}

export default App
