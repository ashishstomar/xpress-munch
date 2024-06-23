import { LOGO_PATH, CART_LOGO_PATH } from "../common/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../common/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")

  const {signedInUser} = useContext(userContext);

  //selector
  const cartBanner = useSelector((store) => store.cart.items);

    return (
      <div className="p-3 shadow-lg flex flex-wrap text-white justify-between items-center bg-[rgba(244,67,34,255)]">
        <div className="flex justify-between items-center italic text-2xl font-bold">
          <img className="h-24 p-3 rounded-s-full" src={LOGO_PATH}/>
          <Link to="/"><h1>XPRESSMUNCH</h1></Link>
        </div>
        <nav className="flex space-x-5 font-bold text-xl justify-center items-center mr-10 flex-wrap">
          <ul className="flex space-x-5 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="relative">
          <Link to="/cart"><img className="h-10" src={CART_LOGO_PATH}/></Link>
          <p className="absolute text-xs text-black rounded-full p-1  bg-white top-6">{cartBanner.length}</p>
          </div>
          <p>{signedInUser}</p>
            <button 
             className="bg-[rgb(255,255,255)] text-gray-700 px-8 py-2 rounded-3xl"
              onClick={() => loginBtn === "Login" ? setLoginBtn("Logout") :  setLoginBtn("Login")}
            >
              {loginBtn}
            </button> 
         
        </nav>
      </div>
    )
  }

  export default Header;
