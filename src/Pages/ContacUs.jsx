import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";

const ContacUs = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Contact />
      <Footer />
    </Container>
  );
};

export default ContacUs;
