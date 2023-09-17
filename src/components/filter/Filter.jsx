import React, { useContext } from "react";
import "./filter.scss";
import { RxCross2 } from "react-icons/rx";
import { AppContext } from "../../context/AppState";
const Filter = () => {
  const { handleVegFilter, isVegFilterActive, handleRating, rating } =
    useContext(AppContext);
  return (
    <section className="filter">
      <div>Filters</div>
      <div onClick={handleRating} className={rating ? "filter-active" : ""}>
        Rating: 4:00 +
      </div>
      <div
        onClick={handleVegFilter}
        className={isVegFilterActive && "filter-active"}
      >
        Pure Veg {isVegFilterActive && <RxCross2 />}
      </div>
      <div>Cusines</div>
    </section>
  );
};

export default Filter;
