import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleBlog from "../SingleBlog/SingleBlog";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://desolate-gorge-47759.herokuapp.com/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      });
  }, []);
  return (
    <Row>
      {blogs.map((blog) => {
        return <SingleBlog key={blog.id} blog={blog} />;
      })}
    </Row>
  );
};

export default AllBlogs;
