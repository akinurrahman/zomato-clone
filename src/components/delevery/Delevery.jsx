import React from "react";
import FirstOrder from "./first order/FirstOrder";
import TopBrands from "./top brands/TopBrands";
import Menu from "../Reusable components/menu/Menu";
import Filter from "../filter/Filter";

const Delevery = () => {
  return (
    <div>
      <Filter />
      <FirstOrder />
      <TopBrands />
      <Menu title="Delivery Restaurants in" />
    </div>
  );
};

export default Delevery;
