import { useDispatch } from "react-redux";
import { CDN_URL } from "../common/constants"
import { addItem } from "../common/cartSlice";

const ResMenuItemList = ({menuItem}) => {

    const dispatchAction = useDispatch()
    return(
        <div>
            {menuItem.map((item) => (
                <div 
                    key={item.card.info.id}
                    className="flex border-b-2 border-b-gray-200 text-left justify-between items-center px-4 mt-2 pb-3 rounded-sm"
                >
                    <div className="w-9/12 font-semibold text-base">
                        <span className="inline-block mb-2">{item.card.info.name}</span>
                        <span className="text-green-700"> | ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        <p className="font-normal text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="relative">
                        <img 
                            className="h-32 w-60 object-cover py-1 rounded-xl"
                            src={CDN_URL+item.card.info.imageId}
                        >
                        </img>
                        <button 
                            className="border-2 border-lime-500 top-[80px] right-20 absolute bg-gray-800 text-white px-5 py-1 rounded-3xl"
                            onClick={() => dispatchAction(addItem(item))}
                        >
                            Add
                        </button>
                    </div>
                </div>
        ))}
        </div>
    )
}

export default ResMenuItemList;