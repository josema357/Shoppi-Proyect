import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard(props) {
    // eslint-disable-next-line react/prop-types
    const {title, imageUrl, price} = props;
  return (
    <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt="" />
            </figure>
            <p className="text-sm font-light">{title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-lg font-medium">{price}</p>
            <XMarkIcon className="h-6 w-6 text-black cursor-pointer"/>
        </div>
    </div>
  )
}

export {OrderCard};