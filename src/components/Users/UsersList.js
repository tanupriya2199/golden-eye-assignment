import { Col, Container, Row } from "react-bootstrap";
import { userData } from "../../userData";
import User from "./User";

const UsersList = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          {userData.length > 0 &&
            userData.map((user) => {
              return (
                <Col
                  className="mb-4"
                  key={user.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <User userInfo={user} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default UsersList;
