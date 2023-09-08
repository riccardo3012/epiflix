import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg" className="nav">
      <Navbar.Brand href="#home">Il Tuo Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Chi Siamo</Nav.Link>
          <NavDropdown title="Servizi" id="basic-nav-dropdown">
            <NavDropdown.Item href="#service1">Servizio 1</NavDropdown.Item>
            <NavDropdown.Item href="#service2">Servizio 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#other">Altro</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contattaci</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signup">Registrati</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
