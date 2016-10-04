
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';

var Promise = require('bluebird');

class Navigation extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props);
	}

	componentDidMount() {
		console.log('this.props', this.props);
	}

	render () { // we also need to build the nav bar on the right
		return (
		  <div> 
		  	<NavBar inverse fixedTop fluid staticTop>
		  		<Nav bsStyle="tabs">
		  			<NavItem onClick={() => this.props.sidebar()}>Settings</NavItem>
		  			<NavItem >Profile</NavItem>
		  			<NavItem onClick={() => this.props.sendCode()}>Run Code</NavItem>
					</Nav>
				</NavBar>
		  </div>
		)
	}
}

export default Navigation;
