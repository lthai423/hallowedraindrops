// component for a user to select that he/she wants to solve a problem

import React from 'react';
import { render } from 'react-dom';

/* React-Bootstrap Components */
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

class MenuWrap extends React.Component { 
	//Sidebar will list questions

	// a sidebar that pops out listing all of the questions (TOP QUESTIONS)
		// *label as only top questions, since we don't want to populate this field as
		// *filled with questions since there should be other functionalities included
			// *in the future, like real-time analyses on their code's complexities and such
	// user selects one, and then the coderpad will pre-populate with that challenge
		// if code is already on page, then a warning pops up first
	
	/* begin copy from example.js */

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


	/* more test code: 
	<div className="editor-sidebar">
				<div className="navmenu navmenu-default navmenu-fixed-left" role="navigation">
				  <a className="navmenu-brand" href="#">Brand</a>
				  <ul className="nav navmenu-nav">
				    <li className="active"><a href="#">Home</a></li>
				    <li><a href="#">Link</a></li>
				    <li><a href="#">Link</a></li>
				  </ul>
				</div>
				<div class="navbar navbar-default navbar-fixed-top">
				  <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target="#myNavmenu" data-canvas="body">
				    <span className="icon-bar"></span>
				    <span className="icon-bar"></span>
				    <span className="icon-bar"></span>
				  </button>
				</div>
		</div> */
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
							<a href="#">Start Bootstrap</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">Shortcuts</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">Overview</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">Events</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}	
}

module.exports = MenuWrap;