import React from "react";
import "./brand.scss";
import brandData from "./data";
const TopBrands = () => {
  return (
    <div className="top-brand-container">
      <div className="brand-container">
        <section className="title">Top brands for you</section>
        <section className="images-container">
          {brandData.map((currBrand) => {
            return (
              <div key={currBrand.id}>
                <div className="img-card">
                  <img src={currBrand.img} alt="" />
                  <p>{currBrand.title}</p>
                  <p className="time">{currBrand.time}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default TopBrands;
