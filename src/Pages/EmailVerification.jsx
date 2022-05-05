import React from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";

const EmailVerification = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();

  let errorElem;
  if (error) {
    return (errorElem = <div>Error sending verification email</div>);
  }

  if (sending) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <Container>
      <Row className="py-5 h-100">
        <h1>Verify Your Email before continue</h1>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Button
              variant="warning"
              className="px-4 py-2 text-white"
              onClick={async () => {
                await sendEmailVerification();
                alert("Email Sent!");
                navigate("/");
              }}
            >
              Send Verification Email
            </Button>
          </Col>
          <Col md={4}></Col>
          {errorElem}
        </Row>
      </Row>
    </Container>
  );
};

export default EmailVerification;
