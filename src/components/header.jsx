import React, {useState} from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLogoWhite from "./../assets/images/header_logo_nb_white.png";

function CollapseNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" scrolling fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt="neverbloom-header-logo"
            src={HeaderLogoWhite}
            width="30"
            height="40"
            className="d-inline-block align-top"
          />
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#title">Story</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#about-us">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapseNavbar;