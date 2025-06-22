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
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"India"} />
      </>
    );
  }
}

export default About;
