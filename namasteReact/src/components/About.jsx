import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Component Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mounted");
  }

  render() {
    // console.log("Parent Component Rendered");

    return (
      <>
        <h1 className="text-center font-bold text-4xl">
          About Class Component
        </h1>
        <h2 className="text-center font-medium text-2xl">
          This is Namaste React Web Series
        </h2>
        <UserClass name={"First"} location={"India"} />

        <div>
          Logged In User
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1 className="text-center font-bold text-4xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </>
    );
  }
}

export default About;
