import React from 'react';
import ReactDOM from 'react-dom';
import BlogNavigation from './blog-navigation.jsx';

// react-router elements
import { Link } from 'react-router';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import Media from 'react-bootstrap/lib/Media.js';

class Blog extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			users: ['brianz', 'chris', 'thai'], // the users who have pages
		}
	}

	componentDidMount () {
		console.log('entered into the blog page');
	}

	// this will purely hold all of the links to the blogger pages

	/*
	   ** in the future, we can have a filter section
	*/

	/* Styles 
		.blog-selection-header     : Title of their post
		.blog-selection-name       : Extra fun snippet
		.blog-selection-bootcamp   : "Name"@"Bootcamp"
		.blog-selection-link       : Used to allow element to be clickable, but no style changes
	*/

	/* test grid:
		<BlogNavigation></BlogNavigation>
			<Grid>
				<Row>
					<Col lg ={12}>
						<Jumbotron className="banner-blog"></Jumbotron>
						<h1 className="banner-text-blog">BootCamp Reviews</h1>
					</Col>
				</Row>
			</Grid>
	*/

	render () {
		return (
			<div className="blog-page">
				<BlogNavigation></BlogNavigation>
					<Jumbotron className="banner-blog"></Jumbotron>
					<h1 className="banner-text-blog">BootCamp Reviews</h1>
						<Grid>
							{this.state.users.map((user) => 
								<Row>
									<Col>
										<Media.List>
											<a className="blog-selection-link" href="/blog/brian"><Media.ListItem className="blog-selection blog-outline">
												<Media.Body>
													<Media.Heading className="blog-selection-header">A Difficult, but Very Humbling 12 Weeks</Media.Heading>
														<span className="blog-selection-bootcamp">Brian Zhou @ HackReactor </span>
														<br/>
														<br/>
														<span className="blog-selection-name">Here could be a 140 character tagline (insertion of twitter handle, pickup line, etc. etc.) ...</span>
												</Media.Body>
												<Media.Right>
													<Image src="https://avatars.githubusercontent.com/u/5092263?v=3" width={64} height={64} circle/>
												</Media.Right>
											</Media.ListItem></a>
										</Media.List>
									</Col>
								</Row>
							)}
						</Grid>
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
