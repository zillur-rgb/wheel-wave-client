import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProductsHook from "../../Hooks/useProductsHook";
import Button from "../Button/Button";

const SingleProductManage = ({ product }) => {
  const [allDesc, setAllDesc] = useState(false);
  const [products, setProducts] = useProductsHook();

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/api/products/${id}`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };
  return (
    <div className="card my-3">
      <img src={product.image} className="card-img-top" alt="productimage" />

      <div className="card-body">
        <h5 className="card-title text-capitalize">{product.name}</h5>
        <p className="card-text">
          {allDesc && product.desc}
          {!allDesc && product.desc.slice(0, 120)} <br />
          <span
            className="btn px-0 text-info"
            onClick={() => setAllDesc(!allDesc)}
          >
            {"  "}Show {allDesc ? "Less" : "More"}...
          </span>
        </p>
      </div>
      <div className="card-footer">
        <Row>
          <Col md={4} className="text-muted">
            <p>Price: €{product.price}</p>
          </Col>
          <Col md={4}></Col>
          <Col md={4} className="text-muted">
            Quantity: {product.quantity}
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={4}>
            <Link to={`/product/${product.id}`}>
              <Button label="Update" bg="info" />
            </Link>
          </Col>
          <Col md={5}></Col>
          <Col md={3}>
            <Button
              label="Delete"
              bg="danger"
              onClick={() => {
                handleDelete(product.id);
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SingleProductManage;
