import React from "react";
import "./home.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Options from "../serviceOptions/Options";
import Delevery from "../../components/delevery/Delevery";
import Dining from "../../components/dining out/Dining";
import NightLife from "../../components/night life/NightLife";

const Home = () => {
  return (
    <div className="home">
      <Router>
        <Header />
        <Options />
        <Routes>
          <Route path="/delevery" element={<Delevery />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/nightlife" element={<NightLife />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Home;
