import React from 'react';
import ReactDOM from 'react-dom';
// other pages such as home-page
// other pages such as signup-page
// other pages such as interviewer page
// other pages such as profile page
import Index from './app/index.jsx';
import Editor from './app/editor.jsx';
import Home from './app/home.jsx';

//*********** We need an App.jsx

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Changes in Routes.js include removing the '/' component to be 'App' to be 'Home'

console.log('entered into the react-router');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="/editor" component={Editor} />
		</Route>
	</Router>
	, document.getElementById('app'));
