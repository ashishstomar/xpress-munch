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

const ResCard = () => {
  return (
    <article className="cardWrap" >
      <img className="cardImg" src="https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg?auto=compress&cs=tinysrgb&w=800"></img>
      <h3>Biryani Corner</h3>
      <p>Hot and frshly cooked Biryani.</p>
      <p>Station, Bengaluru</p> 
      <div className="cardInfo">
        <h3 className="price" >₹320</h3>
          <div className="cardInfo-Bottom">
            <h4>4.4 Rating</h4>
            <h5>32 min</h5>
          </div>
      </div>
    </article>
  )
}


const Main = () => {
  return (
    <div className="cardsSection" >
      <ResCard />
    </div>
  )
}
  
const App = () => {
  return (
    <div>
        <Header />
        <Main />
    </div>
 )
}

export default App;