import { LOGO_PATH } from "../common/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")

    return (
      <div className="header">
        <div className="logo-wrap">
          <img className="logo" src={LOGO_PATH}/>
          <h1>XPRESSMUNCH</h1>
        </div>
        <nav className="Navbar">
          <ul>
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
            className="login-btn"
            onClick={() => loginBtn === "Login" ? setLoginBtn("Logout") :  setLoginBtn("Login")}
          >
            {loginBtn}
          </button>
        </nav>
      </div>
    )
  }

  export default Header;
  