import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./users.css";

const UserDetail = () => {
  const { state } = useLocation();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (state?.user) {
      setUserInfo(state.user);
    }
  }, [state]);

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col sm={4}>
            <div>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${userInfo.username}.svg`}
                alt="User Profile Pic"
              />
            </div>
            <hr />
          </Col>
          <Col sm={8}>
            <div>
              <h2 className="mb-0 sub-heading">{userInfo.name}</h2>
              <small>{userInfo.username}</small>
              <hr></hr>
              <div className="">
                <h5 className="sub-heading">Work At</h5>
                <div>
                  <h6>{userInfo?.company?.name}</h6>
                </div>
              </div>
              <hr />
              <div className="user-info-container">
                <h5 className="sub-heading">Contact Information</h5>
                <div>
                  <div>
                    <span className="fw-bold">Phone :</span>{" "}
                    <span>{userInfo.phone}</span>
                  </div>
                  <div>
                    <span className="fw-bold">email :</span>{" "}
                    <span>{userInfo.email}</span>
                  </div>
                  <div>
                    <span className="fw-bold">Address :</span>
                    <span>
                      {userInfo.address?.street} {userInfo.address?.suite}{" "}
                      <br />
                      {userInfo.address?.zipcode}
                    </span>
                  </div>
                  <div>
                    <span className="fw-bold">Site :</span>{" "}
                    <span>{userInfo.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDetail;
