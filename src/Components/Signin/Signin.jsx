import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import Footer from "../Footer/Footer";
import NavMenu from "../NavMenu/NavMenu";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  let errorMessage;
  if (error) {
    errorMessage = <p>Error: {error?.message}</p>;
  }

  if (loading) {
    <p>loading.....</p>;
  }

  if (user) {
    navigate("/");
  }

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(email, password);
  };

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
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </Form.Group>
            <Form.Group className="py-3" controlId="exampleForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your Password here"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Form.Group>
          </Form>
          <Button
            variant="info"
            size="lg"
            className="w-100 text-white"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          {errorMessage}
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
