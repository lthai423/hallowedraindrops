import React from 'react';
import { render } from 'react-dom';
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

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
				<button onClick={this.githubAuth.bind(this)}>Github</button>
				<button onClick={this.setPad.bind(this)}>Pad</button>
			</div>
		)
	}
}

export default Home;
// have the page load in home.jsx
// render(<App/>, document.getElementById('app'));
