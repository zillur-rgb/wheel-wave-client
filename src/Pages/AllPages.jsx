import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import AboutUs from "./About";
import ContactUs from "./ContacUs";
import Blogs from "./Blogs";
import Signup from "./Signup";
import Signin from "./Signin";
import ProductDetails from "./ProductDetails";
import RequireAuth from "../Components/RequireAuth/RequireAuth";
import FourOFour from "./FourOFour";
import ManageInventory from "./ManageInventory";
import EmailVerification from "./EmailVerification";
import MyItems from "./MyItems";
import AddBlogs from "./AddBlogs";
import ForgotPasswordPage from "./ForgotPassword";

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
      {/* <Route path="/ManageInventory" element={<ManageInventory />} /> */}
      <Route path="/EmailVerification" element={<EmailVerification />} />
      <Route path="/myItems" element={<MyItems />} />
      <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />

      {/* <Route path="/:productid" element={<ProductDetails />} /> */}

      <Route
        path="/AddBlogs"
        element={
          <RequireAuth>
            <AddBlogs />
          </RequireAuth>
        }
      />
      <Route
        path="/ManageInventory"
        element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }
      />
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
