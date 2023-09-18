import React, { useContext, useRef } from "react";
import "./collections.scss";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import Card from "../../Reusable components/cards/rectangle card/Card";
import { AppContext } from "../../../context/AppState";
const Collections = () => {
  const { collection, address } = useContext(AppContext);

  const containerRef = useRef(null);
  const handlePreviousClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 300,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="collection-outer-container">
      <div className="collection-container">
        <GrFormPrevious
          onClick={handlePreviousClick}
          className="svg svg-prev"
        />
        <GrFormNext onClick={handleNextClick} className="svg svg-next" />
        <div className="text-container">
          <p className="title">Collections</p>
          <p className="describtion">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            {` ${address}`}, based on trends
          </p>
        </div>
        <div className="collection-card-container" ref={containerRef}>
          {collection.map((currElem) => {
            return (
              <div key={currElem.id} className="cards">
                <Card
                  backgroundImage={currElem.img}
                  title={currElem.title}
                  places={currElem.place}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;
