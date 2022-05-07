import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const AddNewBlog = () => {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://desolate-gorge-47759.herokuapp.com/api/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  const handleAddNewBlog = (e) => {
    e.preventDefault();
    const newBlog = {
      title: title,
      image: image,
      desc: desc,
      author: user.displayName,
    };

    axios
      .post("https://desolate-gorge-47759.herokuapp.com/api/blogs", newBlog)
      .then((res) => setBlogs(blogs.concat(res.data)));

    setTitle("");
    setImage("");
    setDesc("");
    navigate("/blogs");
  };
  return (
    <Row>
      <Col md={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              placeholder="Enter Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={({ target }) => setImage(target.value)}
              placeholder="Image Link"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={({ target }) => setDesc(target.value)}
            />
          </Form.Group>
          <Button variant="info" type="submit" onClick={handleAddNewBlog}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddNewBlog;
