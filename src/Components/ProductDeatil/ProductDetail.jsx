import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'
import { useContext } from 'react';
import { ShoppingContext } from '../../Context/Context';


function ProductDetail() {
    const context = useContext(ShoppingContext);
  return (
    <aside className={`${context.detailOpen ? 'flex' : 'hidden'} product-detail flex flex-col overflow-y-scroll fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-4'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div 
                className='cursor-pointer'
                onClick={()=>context.setDetailOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-black" />
            </div>
        </div>
        <figure className='px-4'>
            <img 
                className='w-full h-full rounded-lg' 
                src={context.productToShow.images[0]} 
                alt={context.productToShow.title}/>
        </figure>
        <p className='flex flex-col p-4'>
            <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
            <span className='font-medium text-md'>{context.productToShow.title}</span>
            <span className='font-light text-sm'>{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export {ProductDetail};