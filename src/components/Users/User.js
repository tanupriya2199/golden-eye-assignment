import { useState } from "react";
import { Card, Button } from "react-bootstrap";
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

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={`https://avatars.dicebear.com/v2/avataaars/${userInfo.username}.svg`}
        />
        <Card.Body>
          <h5 className="cursor-pointer">{userInfo.name}</h5>
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
            <FontAwesomeIcon className="cursor-pointer" icon={faPen} />
            <FontAwesomeIcon className="cursor-pointer" icon={faTrash} />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default User;
