import React from "react";
import { NavLink } from "react-router-dom";
import "./options.scss";
const Options = () => {
  return (
    <div className="option-root">
      <NavLink to="/delevery" className="nav-link">
        <div className="options-container">
          <div className="img">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
              alt="Delivery"
            />
          </div>
          <p>Delivery</p>
        </div>
      </NavLink>
      <NavLink to="/dining" className="nav-link">
        <div className="options-container">
          <div className="img">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
              alt="Dining Out"
            />
          </div>
          <p>Dining Out</p>
        </div>
      </NavLink>
      <NavLink to="/nightlife" className="nav-link">
        <div className="options-container">
          <div className="img">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
              alt="Nightlife"
            />
          </div>
          <p>Nightlife</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Options;
