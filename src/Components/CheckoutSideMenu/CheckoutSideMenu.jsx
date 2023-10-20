import { XMarkIcon } from '@heroicons/react/24/solid'
import './CheckoutSideMenu.css'
import { useContext } from 'react';
import { ShoppingContext } from '../../Context/Context';
import { OrderCard } from '../OrderCard/OrderCard';
import { totalPrice } from '../../Utils/totalPrice';
import { Link } from 'react-router-dom';

function CheckoutSideMenu() {
    const context = useContext(ShoppingContext);
    /**
     * Esta funcion elimina un producto del shoppingCart
     * @param {String} id  
     */
    const handleDelete=(id)=>{
        const filteredProducts = context.shoppingCart.filter(product => product.id !=id);
        context.setShoppingCart(filteredProducts);
    }
    /**
     * Esta funcion hace el checkout para realizar una nueva compra 
     */
    const handleCheckout=()=>{
        const orderToAdd={
            date: '01.02.23',
            products: context.shoppingCart,
            totalProducts: context.shoppingCart.length,
            totalPrice: totalPrice(context.shoppingCart)
        }
        context.setOrderCart([...context.orderCart,orderToAdd]);
        context.setShoppingCart([]);
        context.setCount(0);
        context.setCheckoutSideOpen(false);
    }

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
        <div className='px-4 overflow-y-auto flex-grow'>
            {
                context.shoppingCart.map((product)=>(
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.images[0]}
                        price={product.price}
                        handleDelete={handleDelete}/>
                ))
            }
        </div>
        <div className='px-6 py-4 flex-shrink-0'>
            <p className='flex justify-between items-center pb-3'>
                <span className='font-medium'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.shoppingCart)}</span>
            </p>
            <Link to='/my-orders/last'>
                <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=> handleCheckout()}>Checkout</button>
            </Link>
        </div>

    </aside>
  )
}

export {CheckoutSideMenu};