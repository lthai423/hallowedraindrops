import React from 'react';
import { render } from 'react-dom';

var Promise = require('bluebird');

class App extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  text: 'hello world', // text is going to be the code the user inputs
  	  editor: '' // editor is added as a state since it'll be used elsewhere
  	}
  }

  componentDidMount() {

  	var editorPromise = new Promise((resolve, reject) => {
  	  this.editorSetup();
  	  resolve();
  	}).then(() => {
      this.setupSocket();
    }).then(() => {
  	  this.state.editor.setValue(this.state.text);
  	}).catch((err) => {
  		console.log('error occurred', err);
  		throw err;
  	})

	var toBeEnteredText = this.state.text;
  }

  getText() {
  	var code = this.state.editor.getValue();
  	console.log('value for code is: ', code);
  	this.setState({
  	  text : code
  	})
  }

  setupSocket() {
    console.log('setting up socket.io...');
    var socket = io();
  }

  editorSetup () {
  	var editor = ace.edit("editor");
  	editor.setTheme("ace/theme/monokai");
  	editor.getSession().setMode("ace/mode/javascript");
  	editor.resize();

  	this.setState({
  		editor: editor
  	});
  }


  render () {
  	return (
  	  <div>
  	  	<button onClick={this.getText.bind(this)}>get code</button>
  	    <div>
  	    <div id="editor"></div>
  	    </div>
  	  </div>
  	)
  }
}

render(<App/>, document.getElementById('app'));