import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = (props) => {
  const { title, description, handleConfirmDelete } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className=" text-danger"
        >
          <i class="bi bi-exclamation-octagon"></i> Warning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{title}</h4>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "gray" }}
          variant="secondary"
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirmDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
