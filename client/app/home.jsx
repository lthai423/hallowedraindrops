import React from 'react';
import { render } from 'react-dom';

//react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

// Somewhere like a Redux middleware or Flux action:
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

// var $ = require('jquery');

// Go to /some/path.

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log('did not mount yet');
	}

	componentDidMount() {
		console.log('entered inside of the home.jsx file');
	}

	githubAuth () {
		document.location.href='/auth/github';
	}

	setPad() {
		$.get('/pad/create', (data) => {
			window.location = 'editor' + data;
		})
	}

	// whatever link they added in, throw in a post request with the id

	// *may need a promise
	// 1. user wants to create a pad
	// 2. we give client back a unique pad_ID key
	// 3. with that unique pad_ID key, we move them to that page
	// 4. on our server side, we catch that route and then send them the pad.html using res.render
	// 5. then for that specific route, we will serve

	// 	<div className="banner-bottom" id="home-bottom">
	// 			<div className="row">
	// 				<div className = "home-desc col-md-6.push-md-3.pull-md-3"> We understand preparing for  a bootcamp can be difficult. Resarch is often the first part of the Bootcamp process, but it's often the most tedious. Whether it be finding materials to study or seeking relevant coding problems to solve, accurate and helpful information are a hassle to locate.
	// 				</div>
	// 			</div>
	// 			<br/>
	// 			<br/>
	// 			<div className="row">
	// 				<div className ="home-desc col-md-6.push-md-3.pull-md-3">Codedrop helps fill this content gap. We are working with many in industry to devise the most up-to-date and relevant problems that'll help you guage where you are in your studying process. Questions like, "Am I up to par in regards to Algorithms? How much more do I need to know about Closures?" can be easily answered by seeing how you fare against the many problems and tests we've set up. 
	// 				</div>
	// 			</div>
	// 			<br/>
	// 			<br/>
	// 			<div className="row">
	// 				<div className ="home-desc col-md-6.push-md-3.pull-md-3">But let's say you need help, or are simply looking for someone else to work through a problem with. And all of your friends are at work, and nobody you know is also studying for Bootcamp. No need to fret. Codedrop's Pair Programming feature allows you to queue up in our Partners Lobby to find others who are ready and willing to work alongside you. 
	// 				</div>
	// 			</div>
	// 	</div>
	// </div>

/*<div>
						<Link to="/blog">Blog (temporary)</Link>
					</div>*/

	render() {
		return (
			<div>
				<Jumbotron className="banner">
					<span className="banner-text">codedrop</span>

					

				</Jumbotron>

				<div className="below-banner">
					<span className="below-banner-text">preparing <b className="blue-you">you</b> for success</span>
				</div>

				<div className="home-bar">
					<Grid className="home-grid">
						<Row className="home-github">
							<Col md={1} mdPush={5} className="vcenter">
								<div className="home-selection">
									<Image src="./styling/img/github-mark-resized.png" circle responsive onClick={this.githubAuth.bind(this)}/>
								</div>
							</Col>
							<Col md={1} mdPush={5} className="vcenter">
								<div className="home-selection">
									 <span className="home-terminal" onClick={this.setPad}><Link>  >_</Link></span>
								</div>
								
								{this.props.children}
							</Col>
						</Row>
					</Grid>
					<a className="a-home" href="#"><div className="home-works">How does it work?</div></a>
				</div>
			</div>
		)
	}
}

export default Home;
// have the page load in home.jsx
// render(<App/>, document.getElementById('app'));
