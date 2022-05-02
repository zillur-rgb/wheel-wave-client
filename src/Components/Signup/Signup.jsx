import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import NavMenu from "../../Components/NavMenu/NavMenu";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Signup = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row>
        <Col md={6}>
          <h1 className="my-5">Sign Up</h1>

          <Form>
            <Row>
              <Col md={6}>
                <Form.Group
                  className="py-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control type="text" placeholder="Alexander" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="py-3" controlId="exampleForm.lastname">
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control type="text" placeholder="Dragunov" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="py-3" controlId="exampleForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="py-3" controlId="exampleForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Your Password here" />
            </Form.Group>
          </Form>
          <Button variant="info" size="lg" className="w-100 text-white">
            Sign Up
          </Button>
          <p className="my-3 text-muted">
            Already Registered?{" "}
            <Link to="/signin" className="text-info">
              <b>Sign In</b>
            </Link>{" "}
            here
          </p>
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <h3 className="py-5">Sign In using Social Media Account</h3>

          <div className="my-5">
            <Button variant="outline-danger" className="w-100">
              Sign In using <BsGoogle className="mx-2" />
            </Button>
            <Button variant="outline-primary" className="w-100  my-2">
              Sign In using <FaFacebookF className="mx-2" />
            </Button>
            <Button variant="outline-dark" className="w-100  my-2">
              Sign In using <BsGithub className="mx-2" />
            </Button>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Signup;
