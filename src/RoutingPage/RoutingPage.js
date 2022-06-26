import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NavBar from "../NavBar";
import People from "../Pages/People/People";
import "./RoutingPage.css"

function RoutingPage() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route />
        </Routes>
      </Router>
        
    </>
  );
}

export default RoutingPage;
