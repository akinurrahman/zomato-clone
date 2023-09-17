import React, { useContext } from "react";
import "./menu.scss";
import Card from "../../cards/squre card/Card";
import { AppContext } from "../../../context/AppState";

const Menu = () => {
  const { menu, address, search, isVegFilterActive, rating } =
    useContext(AppContext);

    const filterMenuByTitleAndLocation = menu.filter((currElem) => {
      const searchTerm = search.toLowerCase();
      const titleMatch = currElem.title.toLowerCase().includes(searchTerm);
      const locationMatch = currElem.location.toLowerCase().includes(searchTerm);
      
      // Check if the item is vegetarian and matches the search
      const isVegetarian = isVegFilterActive ? currElem.isVeg : true;
    
      // Check if the rating is higher than or equal to 4 when the rating filter is active
      const isRatingMatch = !rating || (parseFloat(currElem.rating) >= 4);
    
      // Include the item in the filtered result if all conditions are met
      return titleMatch && locationMatch && isVegetarian && isRatingMatch;
    });
    
  return (
    <div className="menu-container">
      <section className="title-container">
        <p className="title">Nightlife Restaurants in {address}</p>
      </section>
      {filterMenuByTitleAndLocation.length === 0 && (
        <p>No matching restaurants found.</p>
      )}
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
