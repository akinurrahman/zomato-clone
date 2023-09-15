import React, { useContext } from "react";
import "./order.scss";
import { AppContext } from "../../../context/AppState";
const FirstOrder = () => {
  const {firstOrder,setFirstOrder}= useContext(AppContext)
  return (
    <div className="first-order-container">
      <div className="order-container">
        <section className="title">Inspiration for your first order</section>
        <section className="images-container">
          {firstOrder.map((currFoood) => {
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
