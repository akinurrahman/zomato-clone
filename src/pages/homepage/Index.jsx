import React from "react";
import Menu from "../../components/Reusable components/menu/Menu";
import Filter from "../../components/filter/Filter";

const Index = () => {
  return (
    <div>
      <Filter />
      <Menu title="Restaurants in " />
    </div>
  );
};

export default Index;
