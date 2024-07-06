import { Component } from "react";
import UserClass from "./UserClass";
import userContext from "../common/userContext.js";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor")
  }
  componentDidMount() {
    // console.log("parent componentDidMount")
  }
  render() {
    // console.log("Parent render")
    return (
      <div className="font-bold m-4 h-screen">
        <h1>About Us</h1>
        <div>
          <userContext.Consumer>
            {({ signedInUser }) => <h1>Username: {signedInUser}</h1>}
          </userContext.Consumer>
        </div>
        <UserClass name={"John Doe"} location="India" contact="@askjdfdi" />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//         <h1>About Us</h1>
//         <User name={"john doe"}/>
//         <UserClass name={"John Doe Class"} location="India" contact="@askjdfdi" />
//     </div>
//   )
// }

export default About;
