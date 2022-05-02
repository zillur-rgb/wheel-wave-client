import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../Components/Banner/Banner";
import NavMenu from "../Components/NavMenu/NavMenu";

const Homepage = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Banner />
    </Container>
  );
};

export default Homepage;
