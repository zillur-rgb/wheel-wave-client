import React from "react";
import { Col, Row } from "react-bootstrap";
import contact from "../../Assets/contact.jpg";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <Row className="d-flex">
      <Col md={5}>
        <img src={contact} alt="contact" className="h-75 w-100 contactImg" />
      </Col>
      <Col md={1}></Col>
      <Col md={6}>
        <h1 className="mb-5">Contact Us</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Fullname goes here"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Email goes here"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control mb-4"
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
