import React from 'react';
import { render } from 'react-dom';

import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';


class BlogNavigation extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('this.props', this.props);
	}

	render () { // we also need to build the nav bar on the right
		return (
		  <div> 
		  	<NavBar fixedTop fluid staticTop>
		  		<Nav bsStyle="tabs" pullLeft>
		  			<NavItem pullLeft>Code</NavItem>
					</Nav>
					<Nav bsStyle="tabs" pullRight>
						<NavItem pullRight>Profile</NavItem>
					</Nav>
				</NavBar>
		  </div>
		)
	}
}

export default BlogNavigation;
