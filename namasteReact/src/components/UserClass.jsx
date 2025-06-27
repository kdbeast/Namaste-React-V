import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(this.props.name + "Child Component Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mounted");

    const data = await fetch("https://api.github.com/users/kdbeast");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate = () => {
    // console.log(this.props.name + "Child Component Updated");
  };

  componentWillUnmount = () => {
    // console.log(this.props.name + "Child Component Unmounted");
  };

  render() {
    // console.log(this.props.name + "Child Component Rendered");

    const { name, login, avatar_url } = this.state.userInfo;

    return (
      <div className="border-4 text-2xl p-1 m-1 bg-amber-300">
        <div>
          <img className="rounded-full mx-auto" src={avatar_url} />
        </div>
        <div className="border-3">
          <p className="text-center font-mono bg-purple-500 ">Name: {name}</p>
          <p className="text-center font-mono bg-purple-500 ">Login: {login}</p>
          <p className="text-center font-mono bg-purple-500 ">
            Contact: @karanjamwal2004
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
