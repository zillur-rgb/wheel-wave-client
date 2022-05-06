import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu/NavMenu";
import Footer from "../Components/Footer/Footer";
import useGoodsHook from "../Hooks/useGoodsHook";

const ProductDetails = () => {
  const params = useParams();
  const [goods, setGoods] = useGoodsHook();
  const [stockValue, setStockValue] = useState("");
  const exact = goods.find((product) => product.id === params.productid);

  const handleDelivered = (id) => {
    const product = goods.find((product) => product.id === id);

    const updatedProduct = {
      ...product,
      sold: product.sold + 1,
      quantity: product.quantity - 1,
    };

    axios
      .put(`http://localhost:5000/api/goods/${id}`, updatedProduct)
      .then((res) => {
        setGoods(
          goods.map((product) => (product.id !== id ? product : res.data))
        );
      });
  };

  const handleRestock = (id) => {
    const product = goods.find((product) => product.id === id);
    setStockValue("");
    if (parseInt(stockValue) < 1 || !stockValue) {
      alert("Stock value must be greater than 0");
    }
    const restock = {
      ...product,
      quantity: product.quantity + parseInt(stockValue),
    };

    axios.put(`http://localhost:5000/api/goods/${id}`, restock).then((res) => {
      setGoods(
        goods.map((product) => (product.id !== id ? product : res.data))
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
          <p className="text-muted">Sold: {exact?.sold}</p>
          <p>Description: {exact?.desc}</p>

          <Row>
            <Col md={4}>
              {exact?.quantity < 1 ? (
                <Button disabled>Sold Out</Button>
              ) : (
                <Button
                  variant="info"
                  onClick={() => {
                    handleDelivered(exact.id);
                  }}
                >
                  Delivered?
                </Button>
              )}
            </Col>

            <Col md={6}>
              <div
                style={{
                  display: "flex",
                }}
              >
                <input
                  type="number"
                  className="form-control"
                  value={stockValue}
                  onChange={({ target }) => setStockValue(target.value)}
                />
                <Button
                  variant="outline-info"
                  style={{
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => {
                    handleRestock(exact.id);
                  }}
                >
                  Restock item
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default ProductDetails;
