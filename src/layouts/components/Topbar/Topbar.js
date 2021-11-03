import React, { Component } from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

class Topbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Admin Cinema</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">На Главную</Nav.Link>
              <Nav.Link href="/">Фильмы</Nav.Link>
              <Nav.Link href="/">Кинотеатры</Nav.Link>
              <Nav.Link href="/">Расписание</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Topbar;
