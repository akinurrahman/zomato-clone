import React from "react";
import "./home.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../components/header/Header";
import Options from "../serviceOptions/Options";
import Delevery from "../../components/delevery/Delevery";
import Dining from "../../components/dining out/Dining";
import NightLife from "../../components/night life/NightLife";
import Filter from "../../components/filter/Filter";

const Home = () => {
  return (
    <div className="home">
      <Router>
        <Header />

        <Options />
        <Filter />
        <Routes>
          <Route path="/delevery" element={<Delevery />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/nightlife" element={<NightLife />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
