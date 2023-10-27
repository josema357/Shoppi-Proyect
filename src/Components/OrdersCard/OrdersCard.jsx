import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

function OrdersCard(props) {
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props;

  return (
    <div className="flex mb-4 border-slate-400 border rounded-lg p-4 max-[350px]:p-2">
        <div className="flex gap-1 w-full justify-between border-black">
            <div className="flex min-w-[40px] justify-start items-center"><ClipboardDocumentCheckIcon className="h-5 w-5 text-slate-400 cursor-pointer"/>{totalProducts}</div>
            <div className="flex min-w-[96px] justify-start items-center"><CalendarDaysIcon className="h-5 w-5 text-slate-400 cursor-pointer"/>01.20.2023</div>
            <div className="flex flex-1 justify-end items-center"><CurrencyDollarIcon className="h-5 w-5 text-slate-400 cursor-pointer"/>{totalPrice}</div>
            <div className="flex w-[24px] justify-end items-center"><ChevronRightIcon className="h-6 w-6 text-slate-400 cursor-pointer"/></div>
            
        </div>
    </div>
  )
}

export {OrdersCard};