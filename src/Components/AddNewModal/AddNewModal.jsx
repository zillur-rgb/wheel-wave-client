import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import useGoodsHook from "../../Hooks/useGoodsHook";

const AddNewModal = ({ handleClose, show }) => {
  const [productName, setProductName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplierName, setSupplierName] = useState("");

  const [user] = useAuthState(auth);

  //This is a custom hook where I am fetching data.
  const [goods, setGoods] = useGoodsHook();

  const handleAddProduct = () => {
    const newProduct = {
      userEmail: user.email,
      name: productName,
      image: imageLink,
      desc: desc,
      price: +price,
      quantity: +quantity,
      supplier: supplierName,
    };
    axios.post("http://localhost:5000/api/goods", newProduct).then((res) => {
      setGoods(goods.concat(res.data));
      setProductName("");
      setImageLink("");
      setDesc("");
      setPrice("");
      setQuantity("");
      setSupplierName("");
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          className="mb-3"
          placeholder="Product Name"
          value={productName}
          onChange={({ target }) => {
            setProductName(target.value);
          }}
        />
        <Form.Control
          type="text"
          className="mb-3"
          placeholder="Image Link"
          value={imageLink}
          onChange={({ target }) => {
            setImageLink(target.value);
          }}
        />
        <Form.Control
          as="textarea"
          className="mb-3"
          rows={3}
          placeholder="Description"
          value={desc}
          onChange={({ target }) => {
            setDesc(target.value);
          }}
        />
        <Form.Control
          type="number"
          className="mb-3"
          placeholder="Price"
          value={price}
          onChange={({ target }) => {
            setPrice(target.value);
          }}
        />
        <Form.Control
          type="number"
          value={quantity}
          className="mb-3"
          placeholder="Quantity"
          onChange={({ target }) => {
            setQuantity(target.value);
          }}
        />
        <Form.Control
          type="text"
          className="mb-3"
          placeholder="Supplier Name"
          value={supplierName}
          onChange={({ target }) => {
            setSupplierName(target.value);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="info"
          onClick={() => {
            handleAddProduct();
            handleClose();
          }}
        >
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewModal;
