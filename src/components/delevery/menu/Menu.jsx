import React, { useContext } from "react";
import "./menu.scss";
import Card from "../../squre card/Card";
import { AppContext } from "../../../context/AppState";
const Menu = () => {
  const { menu, setMenu, address, search } = useContext(AppContext);
  const filterMenuByTitle = menu.filter((currElem) => {
    return currElem.title.toLowerCase().includes(search.toLowerCase())

  });
  return (
    <div className="menu-container">
      <section className="title-container">
        <p className="title">Delivery Restaurants in {address}</p>
      </section>
      {filterMenuByTitle.map((currFood) => {
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
