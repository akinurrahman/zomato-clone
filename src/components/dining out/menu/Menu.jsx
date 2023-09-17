import React, { useContext } from "react";
import "./menu.scss";
import Card from "../../cards/squre card/Card";
import { AppContext } from "../../../context/AppState";

const Menu = () => {
  const { menu, address, search, isVegFilterActive } = useContext(AppContext);
  const filterMenuByTitleAndLocation = menu.filter((currElem) => {
    const searchTerm = search.toLowerCase();
    const titleMatch = currElem.title.toLowerCase().includes(searchTerm);
    const locationMatch = currElem.location.toLowerCase().includes(searchTerm);
    if (isVegFilterActive) {
      return (titleMatch || locationMatch) && currElem.isVeg;
    } else {
      return titleMatch || locationMatch;
    }
  });
  return (
    <div className="menu-container">
      <section className="title-container">
        <p className="title">Trending dining restaurants in {address}</p>
      </section>
      {filterMenuByTitleAndLocation.length === 0 && 
        <p>No matching restaurants found.</p>}
      {filterMenuByTitleAndLocation.map((currFood) => {
        return (
          <section key={currFood.id}>
            <Card
              image={currFood.img}
              title={currFood.title}
              location={currFood.location}
              rating={`${currFood.rating}★`}
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
