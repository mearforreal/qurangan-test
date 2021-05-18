import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LogOutAuthAction } from "../redux/actions/AuthActions";

function Profile(props) {
  const { userState, logout } = props;

  return (
    <div>
      {!userState?.isLoggedIn && <Redirect to="/login" />}
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={{ span: 6, offset: 5 }}>
            <h3 className="text-align-center">Профиль</h3>
          </Col>
        </Row>
        <Row className="offset-2">
          <Col sm={6}>
            <Col className="mt-5">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={userState?.user?.userInfo?.name}
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col className="mt-2">
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="surname"
                  value={userState?.user?.userInfo?.username}
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col className="mt-2">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={userState?.user?.userInfo?.email}
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col className="mt-2">
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  value={userState?.user?.userInfo?.phone}
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col className="mt-2">
              <Form.Group>
                <Form.Label>Web-site</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="website"
                  value={userState?.user?.userInfo?.website}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Col>
          <Col sm={4}>
            <Card style={{ width: "18rem" }} className="mt-5">
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <Container>
                  <Row>
                    <strong className="mr-2 bold">улица:</strong>
                    <p>{userState?.user?.userInfo?.address?.street}</p>
                  </Row>
                  <Row>
                    <strong className="mr-2 bold">suite:</strong>
                    <p>{userState?.user?.userInfo?.address?.suite}</p>
                  </Row>
                  <Row>
                    <strong className="mr-2 bold">city:</strong>
                    <p>{userState?.user?.userInfo?.address?.city}</p>
                  </Row>
                  <Row>
                    <strong className="mr-2 bold">zipcode:</strong>
                    <p>{userState?.user?.userInfo?.address?.zipcode}</p>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="mt-5">
              <Card.Body>
                <Card.Title>Company</Card.Title>
                <Container>
                  <Row>
                    <h6 style={{ textDecoration: "underline" }}>
                      {userState?.user?.userInfo?.company?.name}
                    </h6>
                  </Row>
                  <Row>
                    <p style={{ backgroundColor: "#326da8", color: "azure" }}>
                      {userState?.user?.userInfo?.company?.catchPhrase}
                    </p>
                  </Row>
                  <Row>
                    <p style={{ backgroundColor: "#32a86d", color: "azure" }}>
                      {userState?.user?.userInfo?.company?.bs}
                    </p>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="offset-2 pl-4">
          <Button
            variant="danger"
            onClick={() => {
              logout();
            }}
          >
            Выйти
          </Button>
        </Row>
      </Container>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userState: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(LogOutAuthAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
