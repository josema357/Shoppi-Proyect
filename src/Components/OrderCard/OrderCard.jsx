import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard(props) {
    // eslint-disable-next-line react/prop-types
    const {id, title, imageUrl, price, handleDelete} = props;
    let renderXMarkIcon
    if(handleDelete){
       renderXMarkIcon= <XMarkIcon onClick={()=> handleDelete(id)} className="h-6 w-6 text-black cursor-pointer"/>
    }
  return (
    <div className="order-card flex justify-between items-center mb-4 w-full">
        <div className="flex items-center gap-2">
            <figure className="w-10 h-10">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt="" />
            </figure>
            <p className="text-sm font-light max-[340px]:text-xs">{title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-sm font-medium max-[340px]:text-xs">${price}</p>
            {renderXMarkIcon}
        </div>
    </div>
  )
}

export {OrderCard};