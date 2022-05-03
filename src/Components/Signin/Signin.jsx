import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavMenu from "../NavMenu/NavMenu";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signin = () => {
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row>
        <Col md={6}>
          <h1 className="my-5">Sign In</h1>

          <Form>
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
            Not Registered Yet?
            <Link to="/signup" className="text-info">
              <b>Sign Up Here</b>
            </Link>{" "}
            here
          </p>
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <SocialLogin />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Signin;
