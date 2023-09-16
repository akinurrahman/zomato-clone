import React from "react";
import FirstOrder from "./first order/FirstOrder";
import TopBrands from "./top brands/TopBrands";
import Menu from "./menu/Menu";
import Filter from "../filter/Filter";

const Delevery = () => {
  return (
    <div>
      <Filter />
      <FirstOrder />
      <TopBrands />
      <Menu />
    </div>
  );
};

export default Delevery;
