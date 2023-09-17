import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppState from "./context/AppState";
import "./App.scss";
import FilterState from "./context/FilterState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppState>
      <FilterState>
        <App />
      </FilterState>
    </AppState>
  </React.StrictMode>
);
