
import React from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';


const Navigation = () =>(
  <div>
    <NavBar fixedTop fluid staticTop>
      <Nav bsStyle="tabs" pullLeft>
        <NavItem>Prep-Challenges</NavItem>
        <NavItem>Run Code</NavItem>
      </Nav>
      <Nav bsStyle="tabs" pullRight>
        <NavItem pullRight>Profile asdf</NavItem>
      </Nav>
    </NavBar>
  </div>
)
export default Navigation;
