import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu/NavMenu";
import Footer from "../Components/Footer/Footer";

const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  console.log(products);
  const exact = products.find((product) => product.id === params.productid);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleDelivered = (id) => {
    const product = products.find((product) => product.id === id);

    const updatedProduct = { ...product, quantity: product.quantity - 1 };

    axios
      .put(`http://localhost:5000/api/products/${id}`, updatedProduct)
      .then((res) => {
        setProducts(
          products.map((product) => (product.id !== id ? product : res.data))
        );
      });
  };
  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row className="my-5 py-5">
        <Col md={1}></Col>
        <Col md={5}>
          <img src={exact?.image} alt="singleProd" height="350px" />
        </Col>
        <Col md={1}></Col>
        <Col md={4}>
          <h1>Product Details</h1>
          <h3>{exact?.name}</h3>
          <h5>Price: € {exact?.price}</h5>
          <p>Id: {exact?.id}</p>
          <p>Quantity: {exact?.quantity}</p>
          <p>Description: {exact?.desc}</p>
          <Button
            variant="info"
            onClick={() => {
              handleDelivered(exact.id);
            }}
          >
            Delivered?
          </Button>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ProductDetails;
