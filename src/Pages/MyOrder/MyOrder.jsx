import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { ShoppingContext } from "../../Context/Context";

function MyOrder() {
  const context = useContext(ShoppingContext);
  console.log(context.orderCart?.slice(-1)[0])
  return (
    <div>
      <p className="w-full text-center pb-4 font-light text-lg">My order</p>
      <div className='flex flex-col flex-grow'>
            {
                context.orderCart?.slice(-1)[0].products.map(product=>(
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.images[0]}
                        price={product.price}/>
                ))
            }
        </div>
    </div>
  )
}

export { MyOrder };