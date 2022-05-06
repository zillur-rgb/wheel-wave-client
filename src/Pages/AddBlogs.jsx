import React from "react";
import { Container, Row } from "react-bootstrap";
import AddNewBlog from "../Components/AddNewBlog/AddNewBlog";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";

const AddBlogs = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <AddNewBlog />
      <Footer />
    </Container>
  );
};

export default AddBlogs;
