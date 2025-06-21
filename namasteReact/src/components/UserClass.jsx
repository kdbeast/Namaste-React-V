import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count1: 1,
    };
    console.log(this.props.name + "Child Component Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mounted");
  }

  render() {
    console.log(this.props.name + "Child Component Rendered");
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: count * 2,
            })
          }
        >
          Count Double
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @karanjamwal2004</h4>
      </div>
    );
  }
}

export default UserClass;
