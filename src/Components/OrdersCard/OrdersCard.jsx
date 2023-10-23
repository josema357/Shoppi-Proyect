import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

function OrdersCard(props) {
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between w-max items-center mb-4 border-slate-400 border rounded-lg px-6 py-4">
        <p className="flex gap-4 border-black">
            <span className="flex"><CalendarDaysIcon className="h-6 w-6 text-slate-400 cursor-pointer"/>01.20.2023</span>
            <span className="flex"><ClipboardDocumentCheckIcon className="h-6 w-6 text-slate-400 cursor-pointer"/>{totalProducts}</span>
            <span className="flex"><CurrencyDollarIcon className="h-6 w-6 text-slate-400 cursor-pointer"/>{totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-slate-400 cursor-pointer"/>
        </p>
    </div>
  )
}

export {OrdersCard};