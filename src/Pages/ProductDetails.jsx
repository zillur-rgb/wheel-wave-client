import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu/NavMenu";
import Footer from "../Components/Footer/Footer";

const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useState();
  const exact = products.find((product) => product.id === params.productid);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row className="my-5 py-5">
        <Col md={1}></Col>
        <Col md={5}>
          <img src={exact.image} alt="singleProd" height="350px" />
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
          <h1>Product Details</h1>
          <h3>{exact.name}</h3>
          <h5>Price: € {exact.price}</h5>
          <p>Quantity: {exact.quantity}</p>
          <p>Description: {exact.desc}</p>
          <Button variant="info">Delivered?</Button>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ProductDetails;
