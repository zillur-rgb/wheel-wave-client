import React from "react";
import { Container, Row } from "react-bootstrap";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";
import Products from "../Components/Products/Products";

const Homepage = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Banner />
      <About />
      <Products />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Homepage;
