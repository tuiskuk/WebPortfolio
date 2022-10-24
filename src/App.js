import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />

        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
     
    </div>
  );
};

export default App;
