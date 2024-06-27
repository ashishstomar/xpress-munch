import { useSelector } from "react-redux";
import { CDN_URL } from "../common/constants"
import { decrementItem, incrementItem, clearCart } from "../common/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items)
    console.log(cartItem)

    const totalSum = cartItem.reduce((accumulator, item) => {
        return accumulator + (item.card.info.price/100 || item.card.info.defaultPrice/100) * item.quantity;
    }, 0)
    
    const gst = totalSum * 18/100
    const toPay = gst + totalSum
    const toPayRounded = toPay.toFixed(2);

    console.log(totalSum)
    const dispatchAction = useDispatch()
    
    if(cartItem.length === 0){
        return (
            <div className="h-screen flex justify-center items-center text-3xl font-semibold">
                <h1 className=" bg-white px-7 py-4 text-zinc-700 rounded-full shadow-2xl">
                    It looks empty! 🍽️ Add Something 🥟 🍧 😋  
                </h1>
            
            </div>
        );
    }

    return(
        <div className="p-4 my-4">
            <h1 className="text-3xl font-semibold text-center">Your cart</h1>

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
                        <div className="w-40 flex gap-6 justify-between">
                            <div className="flex text-center justify-between items-center font-semibold">
                                <button 
                                    className="px-3 border-2 border-lime-500 bg-white text-black rounded-s-full"
                                    onClick={() => dispatchAction(decrementItem(item))}
                                >
                                    -
                                </button>
                                <div
                                    className=" w-8 border-2 border-l-0 border-r-0 border-lime-500 bg-white text-black"
                                >
                                    {item.quantity}
                                </div>
                                <button 
                                    className=" px-3 border-2 border-lime-500 bg-white text-black rounded-e-full"
                                    onClick={() => dispatchAction(incrementItem(item))}
                                >
                                    +
                                </button>
                            </div>
                            <span className=" font-bold text-green-700 text-left"> ₹{item.quantity * item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        </div>
                    </div>
                ))} 
            <div className="flex justify-center mt-6">
                <button 
                    className="text-xl bg-slate-200 px-4 py-1 rounded-2xl shadow-lg"
                    onClick={() => dispatchAction(clearCart())}
                >
                    Clear
                </button>
            </div>   
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
                        <h1 className="font-semibold text-xl">₹{toPayRounded}</h1>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Cart;