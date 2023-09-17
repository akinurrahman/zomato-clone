import React from "react";
import "./order.scss";
const ScrollCards = ({ title, data, style }) => {
  return (
    <div className="root-container" style={style}>
      <div className="order-container">
        <section className="title">{title}</section>
        <section className="slider-contaier">
          {data.map((currElem) => {
            return (
              <div key={currElem.id} className="img-card">
                <img src={currElem.img} alt="" />
                <p className="elem-title">{currElem.title}</p>
                {currElem.time && <p className="elem-time">{currElem.time}</p>}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default ScrollCards;
