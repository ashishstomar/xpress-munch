import { useSelector } from "react-redux";
import { CDN_URL } from "../common/constants"
import { deleteItem } from "../common/cartSlice";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items)
    
    return(
        <div className="p-4 my-4">
            <h1 className="text-3xl font-semibold text-center">cart</h1>
            <section className="sm:mx-20 lg:mx-64 md:mx-28 ">
            {cartItem.map((item) => (
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
                    </div>
                </div>
            ))}    
            </section>
        </div>
    )
}

export default Cart;