import { XMarkIcon } from '@heroicons/react/24/solid'
import './CheckoutSideMenu.css'
import { useContext } from 'react';
import { ShoppingContext } from '../../Context/Context';
import { OrderCard } from '../OrderCard/OrderCard';


function CheckoutSideMenu() {
    const context = useContext(ShoppingContext);
  return (
    <aside className={`${context.checkoutSideOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-4'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div 
                className='cursor-pointer'
                onClick={()=>context.setCheckoutSideOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-black" />
            </div>
        </div>
        <div className='px-4'>
            {
                context.shoppingCart.map((product)=>(
                    <OrderCard 
                        key={product.id}
                        title={product.title} 
                        imageUrl={product.images[0]}
                        price={product.price}/>
                ))
            }
        </div>
    </aside>
  )
}

export {CheckoutSideMenu};