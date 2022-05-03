import React from "react";
import { Col, Row } from "react-bootstrap";
import contact from "../../Assets/contact.jpg";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <Row className="d-flex mt-5 pt-5">
      <Col md={5}>
        <img src={contact} alt="contact" className="h-75 w-100 contactImg" />
      </Col>
      <Col md={1}></Col>
      <Col md={6}>
        <h1 className="mb-5">Contact Us</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Fullname
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Fullname goes here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email goes here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your Message Goes Here
          </label>
          <textarea
            className="form-control mb-4"
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
          <Button label="Send Message" border="dark" />
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
