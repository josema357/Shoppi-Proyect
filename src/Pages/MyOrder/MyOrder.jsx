import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { ShoppingContext } from "../../Context/Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingContext);
  const param = useParams();
  const indexOrder=Number(param.id);
  return (
    <div className="w-full max-w-sm px-1">
      <div className="flex items-center  relative mb-4">
        <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <p className="w-full text-center font-light text-lg">My order</p>
      </div>
      <div className='flex flex-col'>
            {
              isNaN(indexOrder)?
                (
                  context.orderCart?.slice(-1)[0].products.map(product=>(
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.images[0]}
                        price={product.price}/>
                  ))
                ):
                (
                  context.orderCart?.[indexOrder].products.map(product=>(
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.images[0]}
                        price={product.price}/>
                  ))
                )
            }
        </div>
    </div>
  )
}

export { MyOrder };