import React from "react";
import { Col, Row } from "react-bootstrap";
import hero from "../../Assets/Hero.jpeg";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <Row className="d-flex align-items-center py-5 my-5">
      <Col md={5}>
        <h1 className="mx-auto text-left sm:text-center mb-3">
          Be Healthy Reduce Air Pollution Ride Bicycle
        </h1>
        <p className="mx-auto fs-6 text-left sm:text-center text-secondary">
          Supply bike and get a huge profit when you sell bike with us. You have
          all the controls to add delete or update the bike. You supply the bike
          and we will do the rest such as marketing and investment.
        </p>
        <Button label="Check Our Products" border="info" />
      </Col>
      <Col md={1}></Col>
      <Col md={6} className="w-full">
        <img src={hero} alt="hero" className="w-100 w-75 mx-auto" />
      </Col>
    </Row>
  );
};

export default Banner;
