import React from 'react';
import { render } from 'react-dom';

//react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	githubAuth () {
		document.location.href='/auth/github';
	}

	setPad() {
		$.get('/pad/create', (data) => {
			window.location = data;
		})
	}


	render() {
		return (
			<div>
				<Jumbotron className="banner"> 
					<span className="banner-text">codedrop</span>
				</Jumbotron>

				<div className="below-banner">
					<span className="below-banner-text">Seting you for Success.</span>
				</div>

				<Grid>
					<Row className="home-github">
						<Col md={1} mdPush={5} className="vcenter">
							<div className="home-selection">
								<Image src="./styling/img/github-mark-resized-4.png" circle responsive onClick={this.githubAuth.bind(this)}/>
							</div>
						</Col>
						<Col md={1} mdPush={5} className="vcenter">
							<div className="home-selection">
								<span className="home-terminal" onClick={this.setPad.bind(this)}>     >_</span>
							</div>
						</Col>
					</Row>
				</Grid>


			</div>
		)
	}
}

export default Home;
// have the page load in home.jsx
// render(<App/>, document.getElementById('app'));
