import { useState } from "react";
import { lOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-purple-600 shadow-2xl">
      <div className="logo-container">
        <img className="w-56" src={lOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 px-4">
          <li className="px-4 text-sm font-bold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 text-sm font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-sm font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-sm font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-sm font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-sm font-bold">Cart</li>
          <button
            className="border-2 border-solid bg-amber-400 p-1"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
