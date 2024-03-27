import React from "react";
import Appname from "../componets/Appname";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Appname />
          </Navbar.Brand>
            {/* Here  to means link */}
          <Nav className="ms-auto navbar-wrapper">
            <Link to="/add">Product</Link>              
            <Link to="/update">UProduct</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
