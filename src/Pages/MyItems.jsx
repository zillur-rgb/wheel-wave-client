import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";
import SingleProductManage from "../Components/SingleProductManage/SingleProductManage";
import { auth } from "../firebase.init";
import useGoodsHook from "../Hooks/useGoodsHook";

const MyItems = () => {
  const [goods, setGoods] = useGoodsHook();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  const particular = goods.filter((good) => good.uEmail === user.email);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/goods/${id}`).then(() => {
      setGoods(goods.filter((good) => good.id !== id));
    });
  };

  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row className="my-5 py-5">
        <Row
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col md={5}>
            <h1 className="my-5">Manage Products</h1>
          </Col>
          <Col md={5}></Col>
          <Col md={2}>
            {user && (
              <Button variant="success" className="text-white">
                Add New Product
              </Button>
            )}
          </Col>
        </Row>
        {particular.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <SingleProductManage
                product={product}
                handleDelete={() => {
                  handleDelete(product.id);
                }}
              />
            </Col>
          );
        })}
      </Row>
      <Footer />
    </Container>
  );
};

export default MyItems;
