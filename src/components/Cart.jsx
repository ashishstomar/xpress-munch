import { useSelector } from "react-redux";
import { CDN_URL } from "../common/constants"
import { deleteItem } from "../common/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items)
    console.log(cartItem)

    const totalSum = cartItem.reduce((accumulator, item) => {
        return accumulator + (item.card.info.price/100 || item.card.info.defaultPrice/100);
    }, 0) 
    
    const gst = totalSum * 18/100

    console.log(totalSum)
    const dispatchAction = useDispatch()
    
    return(
        <div className="p-4 my-4">
            <h1 className="text-3xl font-semibold text-center">cart</h1>
            <section className="sm:mx-20 lg:mx-64 md:mx-28">
                {cartItem.map((item) => (
                    <div 
                        key={item.card.info.id}
                        className="flex border-b-2 border-b-gray-200 text-center justify-between items-center px-4 mt-2 pb-3 rounded-sm"
                    >
                        <div className="flex gap-8 items-center">
                            <img 
                                className="h-14 w-20 object-cover rounded-lg"
                                src={CDN_URL+item.card.info.imageId}
                            >
                            </img>
                            <span>{item.card.info.name}</span>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex text-center justify-between items-center font-semibold">
                                <button 
                                    className="px-3 border-2 border-lime-500 bg-white text-black rounded-s-full"
                                    onClick={() => dispatchAction(deleteItem(item))}
                                >
                                    -
                                </button>
                                <div
                                    className="px-3 border-2 border-lime-500 bg-white text-black"
                                >
                                    1
                                </div>
                                <button 
                                    className=" px-3 border-2 border-lime-500 bg-white text-black rounded-e-full"
                                    onClick={() => dispatchAction(deleteItem(item))}
                                >
                                    +
                                </button>
                            </div>
                            <span className=" font-bold text-green-700"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        </div>
                    </div>
                ))}    
                
                <section className="shadow-md flex justify-around items-center px-4 mt-10 rounded-xl bg-slate-100 py-7">
                <button className=" shadow-xl bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg">Checkout</button>
                    <div>
                        <h3 className="font-semibold text-lg">Total: </h3>
                        <h5 className="font-semibold">GST and Restaurant Charges: </h5>
                        <h1 className="font-semibold text-xl">TO PAY: </h1>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">₹{totalSum}</h3>
                        <h5 className="font-semibold">₹{gst} </h5>
                        <h1 className="font-semibold text-xl">₹{totalSum + gst}</h1>
                    </div>
                </section>
               
            </section>
        </div>
    )
}

export default Cart;