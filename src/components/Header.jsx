import { LOGO_PATH } from "../common/constants";
import { useState } from "react";

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
            <li>Home</li>
            <li>Munchies</li>
            <li>Orders</li>
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
  