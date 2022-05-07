import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useGoodsHook from "../../Hooks/useGoodsHook";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [goods] = useGoodsHook();
  const navigate = useNavigate();
  return (
    <Row className="my-5 py-5 d-flex align-items-center">
      <Col md={4}>
        <h1 className="text-center my-5">Inventory Items</h1>
      </Col>
      <Col md={6}></Col>
      <Col md={2}>
        <Button
          variant="info"
          className="text-white"
          onClick={() => navigate("/manageinventory")}
        >
          Manage Inventory
        </Button>
      </Col>

      <Row>
        {goods.slice(0, 6).map((product) => {
          return (
            <Col md={4} key={product.id}>
              <SingleProduct product={product} />
            </Col>
          );
        })}
      </Row>
    </Row>
  );
};

export default Products;
