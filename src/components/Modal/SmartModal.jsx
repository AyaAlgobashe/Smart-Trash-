import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const SmartModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.method === "view" ? (
          ""
        ) : (
          <>
            <Button
              style={{ background: "gray" }}
              variant="secondary"
              onClick={props.onHide}
            >
              Cancel
            </Button>
            <Button
              disabled={!props.isButtonDisabled}
              type="submit"
              variant="success"
              onClick={props.handleSubmit}
            >
              Submit
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default SmartModal;
