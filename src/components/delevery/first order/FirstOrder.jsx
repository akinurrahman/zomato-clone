import React, { useContext } from "react";
import "./order.scss";
import { AppContext } from "../../../context/AppState";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const FirstOrder = () => {
  const { firstOrder } = useContext(AppContext);
  return (
    <div className="first-order-container">
      <div className="order-container">
        <section className="title">Inspiration for your first order</section>
        <div className="icon-container">
          <GrFormPrevious className="prev-svg"  />
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
          <GrFormNext className="next-svg" />
        </div>
      </div>
    </div>
  );
};

export default FirstOrder;
