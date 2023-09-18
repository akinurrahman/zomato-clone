import React, { useRef } from "react";
import "./order.scss";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
const ScrollCards = ({ title, data, style }) => {
  const containerRef = useRef(null);
  const handlePreviousClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 300,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 300,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  };
  return (
    <div className="root-container" style={style}>
      <div className="order-container">
        <section className="title">{title}</section>
        <GrFormPrevious
          onClick={handlePreviousClick}
          className="svg svg-prev"
        />
        <GrFormNext onClick={handleNextClick} className="svg svg-next" />
        <section className="slider-contaier" ref={containerRef}>
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
