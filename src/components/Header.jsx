import {
  LOGO_PATH,
  CART_LOGO_PATH,
  LPIN_PATH,
  BURGER_PATH,
  CANCEL_PATH,
} from "../common/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../common/userContext";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const { signedInUser } = useContext(userContext);
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <nav className="text-center text-white flex md:flex-row flex-col md:gap-4 font-bold text-xl md:justify-center items-center">
      <ul className="md:flex md:gap-4">
        <li className="border-b-red-50 border-b md:border-0">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-red-50 border-b md:border-0">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="border-b-red-50 border-b md:border-0">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <p className="block">{signedInUser}</p>
      <button
        className="bg-[rgb(255,255,255)] text-gray-700 px-8 py-2 rounded-3xl"
        onClick={() =>
          loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
        }
      >
        {loginBtn}
      </button>
    </nav>
  );
};

const Header = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  //selector
  const cartBanner = useSelector((store) => store.cart.items);

  return (
    <header className="bg-[rgba(244,67,34,255)] sticky top-0 z-10 p-3 shadow-lg ">
      <div className="flex md:items-center text-white justify-between ">
        <button className="md:hidden" onClick={toggleNav}>
          {isOpen ? (
            <img className="h-7" src={CANCEL_PATH} />
          ) : (
            <img className="h-7" src={BURGER_PATH} />
          )}
        </button>

        <section className="w-full flex justify-between items-center">
          <div className="italic text-2xl font-bold flex justify-center items-center">
            <img className="h-14 md:h-24 p-3 rounded-s-full " src={LOGO_PATH} />
            <Link to="/">
              <h1>XPRESSMUNCH</h1>
            </Link>

            <label className="mx-12 px-3 bg-white rounded-3xl py-[0.3rem] hidden md:flex">
              <img className="h-7" src={LPIN_PATH} />
              <input
                className="text-base w-80 px-2 font-medium text-slate-400 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Delhi"
              ></input>
            </label>
          </div>
          <div className="md:block hidden">
            <NavLinks />
          </div>
        </section>

        <div className="relative ml-4">
          <Link to="/cart">
            <img className="h-10" src={CART_LOGO_PATH} />
          </Link>
          <p className="absolute text-xs text-black rounded-full p-1 bg-white top-6">
            {cartBanner.length}
          </p>
        </div>
      </div>
      <nav>
        {isOpen && (
          <div>
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
