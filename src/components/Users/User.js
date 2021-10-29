import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faPen,
  faTrash,
  faHeart as HeartFill,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";

import "./users.css";

const User = ({ userInfo }) => {
  const [isLiked, setLiked] = useState(false);
  const [showEditUserModal, setEditUserModal] = useState(false);

  const handleCloseModal = () => setEditUserModal(false);
  const handleShowModal = () => setEditUserModal(true);

  const onClickDelete = () => {};

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={`https://avatars.dicebear.com/v2/avataaars/${userInfo.username}.svg`}
        />
        <Card.Body>
          <h5 className="cursor-pointer ">
            <Link
              className="user-name"
              to={{
                pathname: `/users/${userInfo.id}`,
                state: {
                  id: userInfo.id,
                  user: userInfo,
                },
              }}
            >
              {userInfo.name}
            </Link>
          </h5>
          <div className="text-muted user-info-container">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ms-2 ">{userInfo.email}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span className="ms-2">{userInfo.phone}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faGlobe} />
              <span className="ms-2">{userInfo.website}</span>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-around align-items-center footer text-muted">
            {isLiked ? (
              <FontAwesomeIcon
                className="cursor-pointer heart-style"
                icon={HeartFill}
                color={"red"}
                onClick={() => setLiked((prev) => !prev)}
              />
            ) : (
              <FontAwesomeIcon
                className="cursor-pointer heart-style"
                icon={faHeart}
                color={"red"}
                onClick={() => setLiked((prev) => !prev)}
              />
            )}
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={() => handleShowModal()}
              icon={faPen}
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={() => onClickDelete()}
              icon={faTrash}
            />
          </div>
        </Card.Footer>
      </Card>
      <Modal show={showEditUserModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="name">
              <Form.Label column sm="2">
                <span className="text-danger">*</span>Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="col-xs-10"
                  type="text"
                  value={userInfo.name}
                  placeholder="Your Name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label column sm="2">
                <span className="text-danger">*</span>Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="Your Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="phone">
              <Form.Label column sm="2">
                <span className="text-danger">*</span>Phone
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Your Mobile No." />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="website">
              <Form.Label column sm="2">
                <span className="text-danger">*</span>Website
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Website Url" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default User;
