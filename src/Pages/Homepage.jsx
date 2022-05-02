import React from "react";
import { Container, Row } from "react-bootstrap";
import NavMenu from "../Components/NavMenu/NavMenu";

const Homepage = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
    </Container>
  );
};

export default Homepage;
