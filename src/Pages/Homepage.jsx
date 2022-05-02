import React from "react";
import { Container, Row } from "react-bootstrap";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import NavMenu from "../Components/NavMenu/NavMenu";

const Homepage = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Banner />
      <About />
    </Container>
  );
};

export default Homepage;
