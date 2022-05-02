import React from "react";
import { Col, Nav, Navbar } from "react-bootstrap";
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
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <div className="mx-0 my-2 md:my-0 md:mx-4">
          <Button bg="info" label="Sign In" />
        </div>
        <Button border="info" label="Sign Up" />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
