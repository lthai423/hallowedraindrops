// component for a user to select that he/she wants to solve a problem

import React from 'react';
import { render } from 'react-dom';

class Sidebar extends React.Component {
	//Sidebar will list questions

	// a sidebar that pops out listing all of the questions (TOP QUESTIONS)
		// *label as only top questions, since we don't want to populate this field as
		// *filled with questions since there should be other functionalities included
			// *in the future, like real-time analyses on their code's complexities and such
	// user selects one, and then the coderpad will pre-populate with that challenge
		// if code is already on page, then a warning pops up first
	constructor(props) {
		super(props);
			// state stuff if needed
	}

	// future, we'd need a pull of the top 5 challenges
	// for now, have a temporary testcode to pull from

	/* @name: getChallengeQuestion
	 * @input: Click
	 * @output: Desired Question will populate in Editor in comments
	*/
	getChallengeQuestion() {
		console.log('value for props is: ', props);

		// stick it in here for now...
		var testQuestionSnippet = "/* Question Snippet: Set x to be 2 */";

	}


	/* Components Needed:
	 * 
	*/
	render() {
		return (
			<div id="wrapper">
				<div className="sidebar sidebar-nav">
					<li className="sb-title">
					</li>
					<li className="sb-title">
						<p>Questions</p>
					</li>
					<li className="sb-small">
						<p onClick={this.getChallengeQuestion.bind(this)}>Question 1</p>
					</li>
					<li className="sb-small">
						<p>Question 2</p>
					</li>
					<li className="sb-small">
						<p>Question 3</p>
					</li>
				</div>
		</div>
	)}
}

module.exports = Sidebar;