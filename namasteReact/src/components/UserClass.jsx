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

    console.log(this.props.name + "Child Component Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mounted");

    const data = await fetch("https://api.github.com/users/kdbeast");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate = () => {
    console.log(this.props.name + "Child Component Updated");
  };

  componentWillUnmount = () => {
    console.log(this.props.name + "Child Component Unmounted");
  };

  render() {
    console.log(this.props.name + "Child Component Rendered");

    const { name, login, avatar_url } = this.state.userInfo;

    return (
      <div className="border-3 text-2xl p-1 m-1">
        <div>
          <img className="rounded-full mx-auto" src={avatar_url} />
        </div>
        <h2 className="text-center font-mono">Name: {name}</h2>
        <h3 className="text-center font-mono">Login: {login}</h3>
        <h4 className="text-center font-mono">Contact: @karanjamwal2004</h4>
      </div>
    );
  }
}

export default UserClass;
