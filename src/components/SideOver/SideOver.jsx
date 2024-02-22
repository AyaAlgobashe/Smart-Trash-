import React from "react";
import { Button, Card, ListGroup, Offcanvas } from "react-bootstrap";
import profilePic from "../../assets/images/TeamMembers/user.png";
import dateFormatter from "../../utils/dateFormatter.util";
const SideOver = (props) => {
  const { data } = props;

  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={profilePic} />
            <Card.Body>
              <Card.Title>{data?.name}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="d-flex justify-content-between">
                role <span className="text-secondary">{data?.role}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                username
                <span className="text-secondary">{data?.username}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                Email <span className="text-secondary">{data?.email}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                Phone <span className="text-secondary">{data?.phone}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                Created At
                <span className="text-secondary">
                  {dateFormatter(data?.createdAt)}
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                Updated At
                <span className="text-secondary">
                  {dateFormatter(data?.updatedAt)}
                </span>
              </ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideOver;
