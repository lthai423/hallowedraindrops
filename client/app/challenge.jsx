// component for a user to select that he/she wants to solve a problem

import React from 'react';
import { render } from 'react-dom';

/* React-Bootstrap Components */

class MenuWrap extends React.Component { 
	//Sidebar will list questions

	constructor(props) {
    super(props);
    this.state = {
    	hidden: false
  	};
  }

	show() {
		this.setState({hidden: false});
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

	render() {
		let style;

		if(this.state.hidden) {
			style = { display: 'none'};
		}

		return (
			<div>
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						<li className="sidebar-brand">
							<a href="#"></a>
						</li>
						<li className="sidebar-brand">
							<a href="#">asyncMap</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">bubbleSort</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">deepEquality</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">powerSet</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">queueStac</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">rangeClass</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">robotPaths</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">treeBFSelect</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">"shuffleDeck"</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}	
}

module.exports = MenuWrap;