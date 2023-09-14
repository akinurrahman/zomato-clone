import React from "react";
import "./menu.scss";
import foorData from "./menuData";
import Card from "../squre card/Card";
const Menu = () => {
  return (
    <div className="menu-container">
      <section className="title-container">
        <p className="title">Delivery Restaurants in Delhi NCR</p>
      </section>
      {foorData.map((currFood) => {
        return (
          <section key={currFood.id}>
            <Card
              image={currFood.img}
              title={currFood.title}
              location={currFood.location}
              rating={currFood.rating}
              amount={currFood.amount}
              time={currFood.time}
            />
          </section>
        );
      })}
    </div>
  );
};

export default Menu;
