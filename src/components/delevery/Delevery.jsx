import React, { useContext } from "react";
import Menu from "../Reusable components/menu/Menu";
import Filter from "../filter/Filter";
import ScrollCards from "../Reusable components/ScrollCards/ScrollCards";
import { AppContext } from "../../context/AppState";
const Delevery = () => {
  const { firstOrder, brand } = useContext(AppContext);
  return (
    <div>
      <Filter />
      <ScrollCards
        data={firstOrder}
        style={{ background: "#f8f8f8" }}
        title="Inspiration for your first order"
      />
      <ScrollCards data={brand} title="Top brands for you" />

      <Menu title="Delivery Restaurants in" />
    </div>
  );
};

export default Delevery;
