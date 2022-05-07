import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavMenu from "../Components/NavMenu/NavMenu";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import AllBlogs from "../Components/AllBlogs/AllBlogs";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col md={4}>
          <h1 className="py-5">Blogs</h1>
        </Col>
        <Col md={6}></Col>
        <Col md={2}>
          <Button variant="info" onClick={() => navigate("/AddBlogs")}>
            Add New Blog
          </Button>
        </Col>
      </Row>
      <AllBlogs />
      <Footer />
    </Container>
  );
};

export default Blogs;
