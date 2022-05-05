import React from "react";
import { Col, Dropdown, Nav, Navbar, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.jpeg";
import { auth } from "../../firebase.init";
import Button from "../Button/Button";

const NavMenu = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    auth.signOut();
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
    alert("You are signed out!");
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Col md={4}>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" className="w-25" />
          </Navbar.Brand>
        </Link>
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
            {user ? (
              <Link
                to="/ManageInventory"
                style={{
                  textDecoration: "none",
                  color: "#959F9D",
                  padding: "0px 30px",
                }}
              >
                Manage Inventory
              </Link>
            ) : (
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
            )}
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
                padding: "0px 30px",
              }}
            >
              Contact
            </Link>
          </Nav>
          {user ? (
            <div>
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="info">
                  {user.displayName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Add Item</Dropdown.Item>

                  <Dropdown.Item>
                    <Link to="/ManageInventory">Manage Items</Link>
                  </Dropdown.Item>

                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div className="mx-0 my-2 md:my-0 md:mx-4">
              <Link to="/signin">
                <Button bg="info" label="Sign In" />
              </Link>

              <Link to="/signup">
                <Button border="info" label="Sign Up" />
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
};

export default NavMenu;
