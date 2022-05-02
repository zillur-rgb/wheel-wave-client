import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import About from "./About";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AllPages;
