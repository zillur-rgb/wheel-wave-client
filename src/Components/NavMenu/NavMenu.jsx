import React from "react";
import { ButtonGroup, Col, Nav, Navbar } from "react-bootstrap";
import logo from "../../Assets/logo.jpeg";

const NavMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Col md={4}>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="w-25" />
        </Navbar.Brand>
      </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <ButtonGroup className="btn btn-info text-light">Sign In</ButtonGroup>
        <ButtonGroup className="btn btn-success text-light mx-4">
          Sign Up
        </ButtonGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
