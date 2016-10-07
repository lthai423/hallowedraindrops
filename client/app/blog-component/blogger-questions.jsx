import React from 'react';
import ReactDOM from 'react-dom';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

class BloggerQuestions extends React.Component {

	/* @input: Expecting from Props an array of questions
	 * 	       Expecting from Props an array of answers to those questions
	 *
	 * @output: A BloggerQuestions component that contains properly styled questions
	 */

	constructor(props) {
		super(props)
		// response is going to be an array of responses to that question
		// ques is going to be an array of questions
		var questions = ["Did you feel that you got your value from attending HackReactor?"];
		var response = ["Yeah. "];


		this.state = {
			questions: questions,
			response: response
		}

	}



	// need to change to this.props.questions after testing

	render () {
		var responses = this.state.response;
		return (
			<div>
				{this.state.questions.map(function(ques, i) {
					/*
					 * @input: "ques" - question that was asked
					 *         "i"    - index of the question that was asked
					 * @output: a div element wrapping each question
					 */
					
					return (
						// return styled element
						<div>
							<h3 className="ques">Question {i}:{ques}</h3>
							<h5 className="res">{responses[i]}</h5>
						</div>
						)	
					})
				// end of inner return
				} 
			</div>
		)
	}
}

export default BloggerQuestions;

// we need 4 components
// photo
// questions
// page
// user info
// navbar
