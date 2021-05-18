import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginAuthAction } from "../redux/actions/AuthActions";

function Login(props) {
  const { user, login } = props;
  const [loginState, setLoginState] = useState({});
  const [show, setShow] = useState(false);

  const fakeUser = {
    username: "Admin",
    password: "12345",
  };

  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-md-center align-item-center">
          <Col md={{ span: 6, offset: 1 }}>
            {show && (
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>
                  Имя пользователя или пароль введены не верно
                </Alert.Heading>
              </Alert>
            )}

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  loginState?.username === fakeUser.username &&
                  loginState?.password === fakeUser.password
                ) {
                  login(loginState);
                } else {
                  setShow(true);
                }
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Логин"
                  onChange={(e) => {
                    const username = e.target.value;

                    setLoginState({ ...loginState, ...{ username } });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="Пароль"
                  placeholder="пароль"
                  onChange={(e) => {
                    const password = e.target.value;

                    setLoginState({ ...loginState, ...{ password } });
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Войти
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      {user?.isLoggedIn && <Redirect to="/profile" />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState) => {
      dispatch(LoginAuthAction(loginState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
