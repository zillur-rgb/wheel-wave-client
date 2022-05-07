import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";

const ForgotPasswordPage = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row>
        <ForgotPassword />
      </Row>
      <Footer />
    </Container>
  );
};

export default ForgotPasswordPage;
