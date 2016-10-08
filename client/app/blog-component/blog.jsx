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

	/* For the UI, how about have them include a 1-liner about their exp
	   and then have it go across the grid as a clickable that would
	   highlight their experience at their bootcamp
	   so we need to map through the people

	   ** in the future, we can have a filter section

	   .blog-selection-header {
    font-family: SourceSansPro;
    font-style: bold;
}

.blog-selection-name {
    font-family: SourceSansPro;
    font-style: italic;
}

.blog-selection-bootcamp {
    font-family: SourceSansPro;
}
	*/

	/* removed this code: 
	<div>
		<Link to="/blog/brian">to {user}</Link>
	</div>*/

	render () {
		return (
			<div>
				<BlogNavigation></BlogNavigation>
						<Grid>
						<Jumbotron className="banner-blog">
							<h1 className="banner-text-blog">BootCamp Reviews</h1>
						</Jumbotron>
							{this.state.users.map((user) => 
								<Row>
									<Col>
										<Media.List>
											<Media.ListItem href="/blog/brian" className="blog-selection blog-outline">
												<Media.Body>
													<Media.Heading className="blog-selection-header">A Difficult, but Very Humbling 12 Weeks</Media.Heading>
														<span className="blog-selection-name">Here could be a 140 character tagline (insertion of twitter handle, pickup line, etc. etc.) ...</span>
														<br/>
														<br/>
														<span className="blog-selection-bootcamp">Brian Zhou @ HackReactor </span>
												</Media.Body>
												<Media.Right>
													<Image src="https://www.hackreactorconnect.com/assets/photos/1469481559380.jpg" width={64} height={64} circle/>
												</Media.Right>
											</Media.ListItem>
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
