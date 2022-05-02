import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import AboutUs from "./About";
import ContactUs from "./ContacUs";
import Blogs from "./Blogs";
import Signup from "../Components/Signup/Signup";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllPages;
