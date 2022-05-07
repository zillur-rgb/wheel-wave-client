import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import { auth } from "../firebase.init";
import useGoodsHook from "../Hooks/useGoodsHook";

const Products = () => {
  const [goods, setGoods] = useGoodsHook();
  const [user] = useAuthState(auth);

  useEffect(() => {
    axios
      .get("https://desolate-gorge-47759.herokuapp.com/api/goods")
      .then((res) => {
        setGoods(res.data);
      });
  }, [setGoods]);

  return (
    <Container>
      <Row>
        <NavMenu />
      </Row>
      <Row className="my-5 py-5">
        <h1 className="text-center my-5">Products Catalog</h1>

        {goods.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <SingleProduct product={product} />
            </Col>
          );
        })}
      </Row>
      <Row>{user && <Button variant="info">Manage Inventory</Button>}</Row>
      <Footer />
    </Container>
  );
};

export default Products;
