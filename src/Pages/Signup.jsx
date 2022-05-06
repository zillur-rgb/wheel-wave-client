import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import NavMenu from "../Components/NavMenu/NavMenu";
import Footer from "../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import { auth } from "../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useState } from "react";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  let errorMessage;
  if (error || updateError) {
    errorMessage = <p>{error?.message}</p>;
  }

  if (loading || updating) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (user) {
    navigate("/EmailVerification");
  }

  const handleCreateUser = async () => {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: firstName + " " + lastName });
  };

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
                  <Form.Control
                    type="text"
                    placeholder="Alexander"
                    value={firstName}
                    onChange={({ target }) => {
                      setFirstName(target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="py-3" controlId="exampleForm.lastname">
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Dragunov"
                    value={lastName}
                    onChange={({ target }) => {
                      setLastName(target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="py-3" controlId="exampleForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="py-3" controlId="exampleForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your Password here"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />
            </Form.Group>
          </Form>
          <Button
            variant="info"
            size="lg"
            className="w-100 text-white"
            onClick={handleCreateUser}
          >
            Sign Up
          </Button>
          {errorMessage}
          <p className="my-3 text-muted">
            Already Registered?{" "}
            <Link to="/signin" className="text-info">
              <b>Sign In</b>
            </Link>{" "}
            here
          </p>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className="my-5">
          <SocialLogin />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Signup;
