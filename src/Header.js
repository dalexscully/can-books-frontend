import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link id='link' to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link id='link2' to="/about" className="nav-link">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
