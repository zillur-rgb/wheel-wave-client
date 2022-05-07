import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";
import SocialLogin from "../Components/SocialLogin/SocialLogin";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let errorMessage;
  if (error) {
    errorMessage = <p className="warning"></p>;
  }

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  let from = location.state?.from?.pathname || "/";
  // if (user) {
  //   // navigate(from, { replace: true });
  // }

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/api/login", {
      email,
    });
    localStorage.setItem("wheelwaveLoginToken", data.accessToken);
    navigate(from, { replace: true });
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
              <Form.Text className="text-muted">
                Demo User Email: solo@gmail.com Password: 12345678
              </Form.Text>
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
            <Button
              variant="info"
              size="lg"
              className="w-100 text-white"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </Form>

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
