import { LOGO_PATH } from "../common/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-wrap">
          <img className="logo" src={LOGO_PATH}/>
          <h1>XPRESSMUNCH</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Munchies</li>
            <li>Orders</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    )
  }

  export default Header;
  