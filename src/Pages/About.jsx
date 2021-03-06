import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";
import About from "../Components/About/About";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <About />
      <Footer />
    </Container>
  );
};

export default AboutUs;
