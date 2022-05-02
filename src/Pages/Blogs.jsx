import React from "react";
import { Container, Row } from "react-bootstrap";
import NavMenu from "../Components/NavMenu/NavMenu";
import Footer from "../Components/Footer/Footer";

const Blogs = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Footer />
    </Container>
  );
};

export default Blogs;
