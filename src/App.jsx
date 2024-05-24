import React from "react";

/** 
 * header
 *  -logo
 *  - Nav bar
 * body
 *  cards
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrap">
        <img className="logo" src="src\assets\icon.svg" />
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

const App = () => (
  <Header />
)

export default App;