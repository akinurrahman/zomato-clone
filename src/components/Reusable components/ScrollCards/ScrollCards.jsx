import React from "react";
import "./order.scss";
const ScrollCards = ({ title, data,style }) => {
  return (
    <div className="root-container"  style={style}>
      <div className="order-container">
        <section className="title">{title}</section>
        <section className="slider-contaier">
          {data.map((currFoood) => {
            return (
              <div key={currFoood.id} className="img-card">
                <img src={currFoood.img} alt="" />
                <p>{currFoood.title}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default ScrollCards;
