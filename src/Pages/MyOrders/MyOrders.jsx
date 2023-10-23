import { useContext } from "react";
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard";
import { ShoppingContext } from "../../Context/Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context=useContext(ShoppingContext);

  return (
    <div>
      <p className="w-full text-center font-light text-lg mb-4">My orders</p>
      {
        context.orderCart.map((order, index)=>(
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
    </div>
  )
}

export {MyOrders};