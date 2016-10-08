import React from 'react';
import ReactDOM from 'react-dom';

import Image from 'react-bootstrap/lib/Image.js';
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';


class BloggerProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// backgroundUrl: 
		}
	}

	componentDidMount () {

	}

	// need to make a pull from github or something
	// all of these items should be within our props (?)
	// image comes in as avatar_url: https://avatars.githubusercontent.com/u/5092263?v=3
	// url: 

	// need to find a better way to display their image....
	// <Image src="https://www.hackreactorconnect.com/assets/photos/1469481559380.jpg" circle responsive width={64} height={64}/>
// width={64} height={64}

	/* the div with class 'blogger-banner-img' will be space where they can enter a photo */
	render () {
		return (
			<div>
				<Jumbotron>
					<div className="blogger-banner-img">

					</div>
					<div className="banner-text-blog">
						{this.props.name}
					</div>
					<div>
						<strong>Github:</strong>   www.github.com/brianzhou13
						<br/>
						<strong>LinkedIn:</strong> www.linkedin.com 
					</div>
				</Jumbotron>
			</div>
		)
	}
}

export default BloggerProfile;