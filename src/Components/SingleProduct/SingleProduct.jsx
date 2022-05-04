import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const SingleProduct = ({ product }) => {
  const [allDesc, setAllDesc] = useState(false);
  return (
    <div className="card  my-3">
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
      </div>
      <Link to={`product/${product.id}`}>
        <Button label="Update" bg="info" />
      </Link>
    </div>
  );
};

export default SingleProduct;
