import { Col, Row } from "react-bootstrap";
import useGoodsHook from "../../Hooks/useGoodsHook";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [goods] = useGoodsHook();
  return (
    <Row className="my-5 py-5">
      <h1 className="text-center my-5">Products Catalog</h1>

      {goods.slice(0, 6).map((product) => {
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
