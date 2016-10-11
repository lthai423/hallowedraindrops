// component for a user to select that he/she wants to solve a problem

import React from 'react';
import { render } from 'react-dom';

/* React-Bootstrap Components */

class MenuWrap extends React.Component {
	//Sidebar will list questions

	constructor(props) {
    super(props);
    this.state = {
    	hidden: false,
    	questions: [],
    	curr: ''
  	};
  }

  componentDidMount() {
  	this.makeRequest();
  }


	show() {
		this.setState({hidden: false});
	}

	/* @name: getChallengeQuestion
	 * @input: Click
	 * @output: Desired Question will populate in Editor in comments
	*/
	getChallengeQuestion() {
		// find the className of that particular question
		// when rendering, we need to attach a question with it.

		// 1. getter to make a 'GET' request from db for questions
			// 3. we now have the responses, and we use map to display

		//SERVER-SIDE
			// 2. once we get the responses back, then we return only the top 10 back to client

	}

	makeRequest(challenge) {
		$.ajax({
		  method: 'GET',
		  url: 'http://localhost:8080/admin/challenge',
		  success: (data) => {
		    console.log('data value isdddd: ', data);
		    this.setState({
		    	questions: data
		    });
		  },
		  error: (jqXHR, textStatus, errorThrown) => {
		    console.log(textStatus, errorThrown, jqXHR);
		  }
		});
	}

	renderQuestion(question) {
		return (
			<li onClick={() => this.props.pasteCode(question)} className="sidebar-brand">
				<a>{question.name}</a>
			</li>
		);
	}
	render() {
		let style;

		if(this.state.hidden) {
			style = { display: 'none'};
		}

	//<div>
		//{this.state.questions.map((question) => return <div className="top-question" id={question}>{question}</div>)}
	//</div>

		return (

			<div>
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						{this.state.questions.map(this.renderQuestion.bind(this))}
						<li className="sidebar-brand">
							<a href="/admin/addchallenge">-- add challenge --</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = MenuWrap;
