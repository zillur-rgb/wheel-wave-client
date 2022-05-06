import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavMenu from "../Components/NavMenu/NavMenu";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import SingleBlog from "../Components/SingleBlog/SingleBlog";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

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
      <Row>
        {blogs.map((blog) => {
          return <SingleBlog key={blog.id} blog={blog} />;
        })}
      </Row>
      <Footer />
    </Container>
  );
};

export default Blogs;
