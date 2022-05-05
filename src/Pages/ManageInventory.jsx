import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import AddNewModal from "../Components/AddNewModal/AddNewModal";
import Footer from "../Components/Footer/Footer";
import NavMenu from "../Components/NavMenu/NavMenu";
import SingleProductManage from "../Components/SingleProductManage/SingleProductManage";
import { auth } from "../firebase.init";
import useProductsHook from "../Hooks/useProductsHook";

const ManageInventory = () => {
  const [products, setProducts] = useProductsHook();
  const [user] = useAuthState(auth);

  // Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
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
              <Button
                variant="success"
                className="text-white"
                onClick={handleShow}
              >
                Add New Product
              </Button>
            )}
          </Col>
          <AddNewModal handleClose={handleClose} show={show} />
        </Row>
        {products.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <SingleProductManage
                product={product}
                handleDelete={handleDelete}
              />
            </Col>
          );
        })}
      </Row>
      <Footer />
    </Container>
  );
};

export default ManageInventory;
<h1>Hello Moto</h1>;
