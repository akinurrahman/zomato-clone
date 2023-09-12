import React from "react";
import { NavLink } from "react-router-dom";

const Options = () => {
  return (
    <div>
      <NavLink to="/delevery">Delivery</NavLink>
      <NavLink to="/dining">Dining</NavLink>
      <NavLink to="/nightlife">Nightlife</NavLink>
    </div>
  );
};

export default Options;
