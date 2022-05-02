import React from "react";
import { Col, Row } from "react-bootstrap";
import about from "../../Assets/about.jpeg";

const About = () => {
  return (
    <Row className="d-flex align-items-center py-5">
      <Col lg={6} className="my-5 py-5">
        <img src={about} alt="about" className="w-full" />
      </Col>
      <Col md={5} className="my-5 py-5">
        <h1 className="my-4">
          That's Us! <span className="text-info">Wheel Wave</span>.
        </h1>
        <p className="text-muted">
          Bike lover’s hearts skip a beat for over 30 years! Find all you need
          for your bike business in our online shop. To offer the best profits
          at the most competitive prices we work together with a variety of
          international partners and manufacturers. We will be happy to do
          business with you. The worldwide network of suppliers and our
          strategically optimized purchase management allows us to offer the
          best price-performance ratio and a huge selection on products.
        </p>
        <p className="text-muted">
          On asphalt or trails, being safe on your bike comes first. Finding the
          right helmet, which doesn’t just fit well but also looks good is
          important, especially for children. That’s why we offer a wide variety
          of youth- and children helmets.
        </p>
      </Col>
    </Row>
  );
};

export default About;
