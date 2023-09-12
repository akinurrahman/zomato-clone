import React from "react";
import './home.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Delevery from "../serviceOptions/delevery/Delevery";
import Dining from "../serviceOptions/dining out/Dining";
import NightLife from "../serviceOptions/night life/NightLife";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Options from "../serviceOptions/Options";

const Home = () => {
  return (
    <div className="home">
      <Router>
        <Header />
        <Options/>
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
