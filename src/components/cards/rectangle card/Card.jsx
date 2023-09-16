import React from "react";
import "./card.scss";
import { BiSolidRightArrow } from "react-icons/bi";
const Card = ({ backgroundImage, title, places }) => {
  return (
    <section
      className="rectangle-card-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-container">
        <p>{title}</p>
        <p>
          {`${places} places`} <BiSolidRightArrow size={10} />{" "}
        </p>
      </div>
    </section>
  );
};

export default Card;
