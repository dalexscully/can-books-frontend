import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import AuthButtons from './AuthButton';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem><Link id='link' to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link id='link2' to="/about" className="nav-link">About</Link></NavItem>
          <NavItem><Link id='link3' to="/profile" className="nav-link">Profile</Link></NavItem>

        </Navbar>
        <AuthButtons />
      </>

    )
  }
}

export default Header;
