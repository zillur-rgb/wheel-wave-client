import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../Assets/logo.jpeg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Row className="my-5 pt-5">
      <Col md={4}>
        <img src={logo} alt="logo" height="50px" />
        <p className="text-muted lh-lg my-3">
          Bike lover’s hearts skip a beat for over 30 years! Find all you need
          for your bike business in our online shop. To offer the best profits
          at the most competitive prices we work together with a variety of
          international partners and manufacturers. Bike lover’s hearts skip a
          beat for over 30 years! Find all you need for your bike business in
          our online shop.
        </p>
      </Col>
      <Col md={1}></Col>
      <Col md={2}>
        <p>
          <b>Navigation</b>
        </p>
        <p className="text-muted">Home</p>
        <p className="text-muted">Products</p>
        <p className="text-muted">About</p>
        <p className="text-muted">Blogs</p>
        <p className="text-muted">Contact</p>
      </Col>
      <Col md={2}>
        <p>
          <b>Legal</b>
        </p>
        <p className="text-muted">Terms</p>
        <p className="text-muted">Privacy</p>
        <p className="text-muted">Security</p>
        <p className="text-muted">Status</p>
        <p className="text-muted">Docs</p>
      </Col>
      <Col md={3}>
        <p>
          <b>Address: </b>Hamburger Strasse 134, Bochum, 44135, Germany
        </p>
        <p>
          <b>Email: </b>contact@wheelwave.de
        </p>
        <p>
          <b>Phone: </b>+491598-6587984
        </p>
        <h3>
          <AiFillFacebook className="mx-2" />
          <AiFillTwitterSquare className="mx-2" />
          <AiFillInstagram className="mx-2" />
          <AiFillYoutube className="mx-2" />
        </h3>
      </Col>
      <Col className="text-center text-muted">
        All Right Reserved &copy;2022 MD Zillur Rahman
      </Col>
    </Row>
  );
};

export default Footer;
