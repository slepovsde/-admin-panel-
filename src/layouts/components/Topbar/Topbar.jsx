import React, { Component } from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

class Topbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Skypro Events</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#/homepage">На Главную</Nav.Link>
              <Nav.Link href="#/admin/cinemas">Фильмы</Nav.Link>
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
