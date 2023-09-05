import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Trips from "./Trips";
import ReactDOM from "react-dom/client";

function Router():JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trips" element={<Trips />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
export default Router;
