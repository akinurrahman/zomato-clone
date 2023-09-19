import React, { useContext } from "react";
import "./menu.scss";
import Card from "../../Reusable components/cards/squre card/Card";
import { AppContext } from "../../../context/AppState";
import { FilterContext } from "../../../context/FilterState";

const Menu = ({ title }) => {
  const { address } = useContext(AppContext);
  const { filteredMenu } = useContext(FilterContext);
  return (
    <div className="menu-container">
      <section className="title-container">
        <p className="title">
          {title} {address}
        </p>
      </section>
      {filteredMenu.length === 0 && <p>No matching restaurants found.</p>}
      {filteredMenu.map((currFood) => {
        return (
          <section key={currFood.id}>
            <Card
              image={currFood.img}
              title={currFood.title}
              location={currFood.location}
              rating={currFood.rating === "New" ? "New" : `${currFood.rating}★`}
              amount={`₹${currFood.amount} for one`}
              time={`${currFood.time} min`}
            />
          </section>
        );
      })}
    </div>
  );
};

export default Menu;
