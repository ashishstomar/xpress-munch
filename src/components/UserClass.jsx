import React from "react";

class UserClass extends React.Component {

    constructor() {
        super();

        this.state = {
            userInfo: {
                name: "User",
                location: "IN", 
            },
        };

    }
   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ashishstomar")
        const json = await data.json()
      

        this.setState({
        userInfo: json,
        });

        console.log(json);
    }
    render() {
        // const {name, location} = this.userInfo.json
        const { name, location, html_url, avatar_url } = this.state.userInfo;
        return(
            <div className="m-10">
                <img className="rounded-3xl" src={avatar_url}></img>
                <h2 className="font-bold mt-5">Name: {name} </h2>
                <h3>Loaction:{location} </h3>
                <h4>GitHub: <a href={html_url}>{html_url}</a> </h4>
            </div>
        )
    }
} 

export default UserClass;