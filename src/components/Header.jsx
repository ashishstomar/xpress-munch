import { LOGO_PATH } from "../common/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")

    return (
      <div className="flex justify-between items-center bg-[rgb(250,226,226)]">
        <div className="flex justify-between items-center italic text-2xl font-bold">
          <img className="h-24 p-3" src={LOGO_PATH}/>
          <Link to="/"><h1>XPRESSMUNCH</h1></Link>
        </div>
        <nav className="flex space-x-5 font-bold text-xl justify-center items-center mr-10">
          <ul className="flex space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>Cart</li>
          </ul>
          <button 
            className="bg-red-300 px-8 py-2 rounded-3xl"
            onClick={() => loginBtn === "Login" ? setLoginBtn("Logout") :  setLoginBtn("Login")}
          >
            {loginBtn}
          </button>
        </nav>
      </div>
    )
  }

  export default Header;
  