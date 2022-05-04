import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FourOFour = () => {
  return (
    <Container className="fourofour">
      <Row>
        <h1 className="four">
          <span className="text-warning">4</span>0
          <span className="text-success">4</span>
        </h1>
      </Row>
      <Row>This page is not found!!</Row>

      <Link to="/">Go Back</Link>
    </Container>
  );
};

export default FourOFour;
