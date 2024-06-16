import { CDN_URL } from "../common/constants"

const ResMenuItemList = ({menuItem}) => {

    return(
        <div>
            {menuItem.map((item) => (
                <div 
                    key={item.card.info.id}
                    className="flex justify-between items-center p-2 mt-3 border-gray-800 rounded-xl bg-yellow-50"
                >
                    <div className="p-2 font-semibold">
                        <span>{item.card.info.name}</span>
                        <span> | ₹{item.card.info.price/100}</span>
                        <p className="font-normal">{item.card.info.description}</p>
                    </div>
                    <div className="relative">
                        <img 
                            className="w-40 h-24 object-cover rounded-lg"
                            src={CDN_URL+item.card.info.imageId}
                        >
                        </img>
                        <button 
                            className="top-20 right-5 absolute bg-black text-white px-5 py-1 rounded-2xl"
                        >
                            +Add
                        </button>
                    </div>
                </div>
        ))}
        </div>
    )
}

export default ResMenuItemList;