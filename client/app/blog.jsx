import React from 'react';
import ReactDOM from 'react-dom';
import BlogNavigation from './blog.jsx';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// empty for now
			currentPage: 0, // the page in the array
			users: ['brianz', 'chris', 'thai'], // the users who have pages
			testAvatar: 'https://avatars.githubusercontent.com/u/5092263?v=3',
			testGithub: 'https://github.com/brianzhou13',
			testLogin: 'brianzhou13'
		}
	}

	// a service that will make a call to the db for that blog profile
		// should be a sql db

	// will pull in data from the database for the user
		// the user that's being pulled will be from the url
			// 

	render () {
		return (
			<div>
				<BlogNavigation></BlogNavigation>
				<Jumbotron className="banner">
					<BloggerProfile></BloggerProfile>
				</Jumbotron>
			</div>
		)
	}

}

export default Blog;

// we need 4 components
// photo
// questions
// page
// user info
// navbar
