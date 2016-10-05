import React from 'react';
import ReactDOM from 'react-dom';

// react-bootstrap elements
import Image from 'react-bootstrap/lib/Image.js';

class BloggerProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = { // test values for until we implement the API
			testAvatar: 'https://avatars.githubusercontent.com/u/5092263?v=3',
			testGithub: 'https://github.com/brianzhou13',
			testLogin: 'brianzhou13'
		}
		// the props should expect the user
	}

	componentDidMount () {
		console.log('value for this.props.user is: ', this.props.user);
	}

	/* TO-DOs:
		- formally pull in the testAvatars from github
		- import a helpers fn that will make route-api calls
	*/

	render () {
		return (
			<div className="blogger">
				<Image src={this.state.testAvatar} circle />
				<div>
					<span>Github: {this.state.testGithub}</span>
					<span>HR Cohort: 46</span>
				</div>
			</div>
		)		
	}
}

export default BloggerProfile;