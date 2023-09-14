import React from "react";
import foorData from "./orderData";
import "./order.scss";
const FirstOrder = () => {
  return (
    <div className="first-order-container">
      <div className="order-container">
        <section className="title">Inspiration for your first order</section>
        <section className="images-container">
          {foorData.map((currFoood) => {
            return (
              <div key={currFoood.id}>
                <div className="img-card">
                  <img src={currFoood.img} alt="" />
                  <p>{currFoood.title}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default FirstOrder;
