import React from "react";
import Collections from "./collections/Collections";
import Filter from "../filter/Filter";
import Banner from "./banner/Banner";
import Menu from "../Reusable components/menu/Menu";
const Dining = () => {
  return (
    <div>
      <Collections />
      <Filter />
      <Banner />
      <Menu title="Trending dining restaurants in" />
    </div>
  );
};

export default Dining;
