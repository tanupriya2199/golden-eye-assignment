import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/usersAction";
import User from "./User";

const UsersList = () => {
  const users = useSelector((state) => {
    return state.users.users;
  });

  const loading = useSelector((state) => {
    return state.users.loading;
  });
  const error = useSelector((state) => {
    return state.users.error;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers([]));
  }, []);

  return (
    <div className="my-5">
      <Container>
        <Row>
          {loading && <p>Loading...</p>}
          {users &&
            users.map((user) => {
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
          {error === 0 && <p>{error}</p>}
        </Row>
      </Container>
    </div>
  );
};

export default UsersList;
