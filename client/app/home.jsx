import React from 'react';
import { render } from 'react-dom';
import Carousel from 'react-bootstrap/lib/carouselInstance';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	githubAuth () {
		document.location.href='/auth/github';
	}

	setPad() {
		$.get('/pad/create', (data) {
			window.location = data;
		})
	}


	render() {
		return (
			<div>
				<Carousel> Hello World</Carousel>
				<button onClick={this.githubAuth.bind(this)}>Github</button>
				<button onClick={this.setPad.bind(this)}>Pad</button>
			</div>
		)
	}
}

export default Home;
// have the page load in home.jsx
// render(<App/>, document.getElementById('app'));
