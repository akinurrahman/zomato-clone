import React, { useContext } from "react";
import "./header.scss";
import { FiSearch } from "react-icons/fi";
import { AppContext } from "../../context/AppState";
const Header = () => {
  const { address, setAddress, handleLocation } = useContext(AppContext);
  return (
    <header>
      <nav>
        <div className="img-container">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
          />
        </div>
        <ul>
          <div className="col-1">
            <li>
              <select
                className="location"
                onChange={handleLocation}
                value={address}
              >
                <option>Choose your Address</option>
                <option value="delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Dhubri">Dhubri</option>
                <option value="Bangaluru">Bangaluru</option>
                <option value="Noida">Noida</option>
                <option value="Guwahati">Guwahati</option>
                <option value="Kolkata">Kolkata</option>
              </select>
              |
            </li>
            <li className="search-btn">
              <FiSearch size={20} />
            </li>
            <li className="input-container">
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
