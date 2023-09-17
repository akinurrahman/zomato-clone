import React from "react";
import Filter from "../filter/Filter";
import Banner from "../dining out/banner/Banner";
import Menu from "../Reusable components/menu/Menu";
const NightLife = () => {
  return (
    <div>
      <Filter />
      <Banner />
      <Menu title="Nightlife Restaurants in" />
    </div>
  );
};

export default NightLife;
