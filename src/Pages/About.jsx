import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";

const About = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Footer />
    </Container>
  );
};

export default About;
