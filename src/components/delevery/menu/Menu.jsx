import React, { useContext } from "react";
import "./menu.scss";
import Card from "../../squre card/Card";
import { AppContext } from "../../../context/AppState";
const Menu = () => {
  const { menu, setMenu,address } = useContext(AppContext);
  return (
    <div className="menu-container">
      <section className="title-container">
        <p className="title">Delivery Restaurants in {address}</p>
      </section>
      {menu.map((currFood) => {
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
