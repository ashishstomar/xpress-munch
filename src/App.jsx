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
      <div className="logo">
        <img src="src\assets\icon.svg" />
      </div>
    </div>
  )
}

const App = () => (
  <h1 className="header">
    This is a Test
    </h1>
)

export default App;