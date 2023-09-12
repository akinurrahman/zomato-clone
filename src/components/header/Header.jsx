import React from "react";
import "./header.css";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="img-container">
         <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
        </div>
        <ul>
          <div className="col-1">
            <li>
              <select className="location">
                <option>Choose your Address</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
              </select>
              |
            </li>
            <li className="search-btn">
              <FiSearch size={20} />
            </li>
            <li>
              <input
                type="text"
                placeholder="Search for restaurant,cusin or a dish"
                className="search-input"
              />
            </li>
          </div>
          <div className="authentication">
            <li>Log In</li>
            <li> Sign Up</li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
