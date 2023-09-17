import React, { useContext } from "react";
import "./collections.scss";
import Card from "../../Reusable components/cards/rectangle card/Card";
import { AppContext } from "../../../context/AppState";
const Collections = () => {
  const { collection, address } = useContext(AppContext);
  return (
    <section className="collection-outer-container">
      <div className="collection-container">
        <div className="text-container">
          <p className="title">Collections</p>
          <p className="describtion">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            {` ${address}`}, based on trends
          </p>
        </div>
        <div className="collection-card-container">
          {collection.map((currElem) => {
            return (
              <div key={currElem.id}>
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
