import React from "react";
import { Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.jpeg";
import Button from "../Button/Button";

const NavMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Col md={4}>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="w-25" />
        </Navbar.Brand>
      </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Col md={8}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#959F9D",
                padding: "0px 30px",
              }}
            >
              Home
            </Link>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "#959F9D",
                padding: "0px 30px",
              }}
            >
              Products
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#959F9D",
                padding: "0px 30px",
              }}
            >
              About
            </Link>
            <Link
              to="/blogs"
              style={{
                textDecoration: "none",
                color: "#959F9D",
                padding: "0px 30px",
              }}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#959F9D",
              }}
            >
              Contact
            </Link>
          </Nav>
          <div className="mx-0 my-2 md:my-0 md:mx-4">
            <Button bg="info" label="Sign In" />
          </div>
          <Button border="info" label="Sign Up" />
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
};

export default NavMenu;
