import { useContext } from "react";
import { ShoppingContext } from "../../Context/Context";
import { PlusIcon } from "@heroicons/react/24/solid";

function Card(data) {
  const context = useContext(ShoppingContext);
  
  const showProduct=(productDetail)=>{
    context.setDetailOpen(true);
    context.setCheckoutSideOpen(false);
    context.setProductToShow(productDetail)
  }

  const addProductsToCart=(event, productData)=>{
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setShoppingCart([...context.shoppingCart, productData]);
    context.setCheckoutSideOpen(true);
    context.setDetailOpen(false);
  }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={()=>showProduct(data.data)}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
            <img className="w-full h-full object-cover rounded-lg" 
              src={data.data.images[0]} 
              alt="" />
            <button 
              className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
              onClick={(event)=>addProductsToCart(event,data.data)}>
                <PlusIcon className="h-6 w-6 text-black"/>
            </button>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">{data.data.title}</span>
            <span className="text-lg font-medium">${data.data.price}</span>
        </p>
    </div>
  )
}

export {Card};