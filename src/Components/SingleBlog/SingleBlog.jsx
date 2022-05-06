import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";

const SingleBlog = ({ blog }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Col md={4}>
      <Card border="muted">
        <Card.Img variant="top" src={blog.image} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>
            {showAll ? blog.desc : blog.desc.slice(0, 55)}
            {"   "}{" "}
            <Button variant="link" onClick={() => setShowAll(!showAll)}>
              See {showAll ? "Less" : "More"}
            </Button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Posted by <b>{blog.author}</b>
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleBlog;
