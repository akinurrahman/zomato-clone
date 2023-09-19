import React, { useContext } from "react";
import "./header.scss";
import { FiSearch } from "react-icons/fi";
import { AppContext } from "../../context/AppState";
import { FilterContext } from "../../context/FilterState";
const Header = () => {
  const { address, handleLocation } = useContext(AppContext);
  const { search, handleSearch } = useContext(FilterContext);
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
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangaluru">Bangaluru</option>
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
                value={search}
                onChange={handleSearch}
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
