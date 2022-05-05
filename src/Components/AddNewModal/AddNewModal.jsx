import React from "react";
import { Button, Modal } from "react-bootstrap";
import useProductsHook from "../../Hooks/useProductsHook";

const AddNewModal = ({ handleClose, show }) => {
  const [products] = useProductsHook();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="info" onClick={handleClose}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewModal;
