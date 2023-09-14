import React from "react";
import "./card.scss";
const Card = ({ image, title, location, rating, amount, time }) => {
  return (
    <div className="card-container">
      <section className="img-container">
        <img src={image} alt="" />
      </section>
      <section className="text-container">
        <div className="col-1">
          <p className="title">{title.length > 27 ? `${title.slice(0, 26)}...` : title}</p>
          <p className="location">{location.length > 26 ? `${location.slice(0, 26)}...` : location}</p>
        </div>
        <div className="col-2">
          <p className="rating">{rating}</p>
          <p className="amount">{amount}</p>
          <p className="time">{time}</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
