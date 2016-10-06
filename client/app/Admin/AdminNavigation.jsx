
import React from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';


class Navigation extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }



  render () { // we also need to build the nav bar on the right
    return (
      <div>
        <NavBar fixedTop='true' fluid staticTop='true'>
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
  }
}

export default Navigation;
