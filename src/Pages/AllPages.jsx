import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import AboutUs from "./About";
import ContactUs from "./ContacUs";
import Blogs from "./Blogs";
import Signup from "../Components/Signup/Signup";
import Signin from "../Components/Signin/Signin";
import ProductDetails from "./ProductDetails";
import RequireAuth from "../Components/RequireAuth/RequireAuth";
import FourOFour from "./FourOFour";
import ManageInventory from "./ManageInventory";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/ManageInventory" element={<ManageInventory />} />

      {/* <Route path="/:productid" element={<ProductDetails />} /> */}

      <Route
        path="product/:productid"
        element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>
        }
      />
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
};

export default AllPages;
