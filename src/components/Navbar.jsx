import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="navbar-brand-custom" href="/">Pizzería Mamma Mia!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/cart">Compras</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;