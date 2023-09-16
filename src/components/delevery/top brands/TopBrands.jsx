import React, { useContext } from "react";
import "./brand.scss";
import { AppContext } from "../../../context/AppState";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const TopBrands = () => {
  const { brand, setBrand } = useContext(AppContext);
  return (
    <div className="top-brand-container">
      <div className="brand-container">
        <section className="title">Top brands for you</section>
        <div className="icon-container">
          <GrFormPrevious className="prev-svg" />
          <section className="images-container">
            {brand.map((currBrand) => {
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
          <GrFormNext className="next-svg" />
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
