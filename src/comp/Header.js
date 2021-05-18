import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/posts">Пост</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Профиль</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
