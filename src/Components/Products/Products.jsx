import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <Row className="my-5 py-5">
      <h1 className="text-center my-5">Products Catalog</h1>

      {products.slice(0, 6).map((product) => {
        return (
          <Col md={4} key={product.id}>
            <SingleProduct product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Products;
