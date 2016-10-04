// a placeholder for our editor file.
// code in here is only for testing purposes

import React from 'react';
import { render } from 'react-dom';

import Output from './output.jsx';
// import Sidebar from './challenge.jsx';
import Sidebar from './challenge.jsx';
import Navigation from './navigation.jsx';

import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';


var Promise = require('bluebird');


// var Promise = require('bluebird');

class Editor extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    text: "console.log('hello world')", // text is going to be the code the user inputs
	    outputText: [],
	    sidebar: false,
	    question: '',
	    auth: false
	  };
	}
	
	componentDidMount() {
    this.editor = this.editorSetup();
    this.socket = this.setupSocket();
    this.editor.setValue(this.state.text);

    // functions that are getting passed into navigation.jsx
    this.sidebar = this.sidebar.bind(this);
    this.getText = this.getText.bind(this);
    this.sendCode = this.sendCode.bind(this);

    console.log('state-bar', this.state.sidebar);
  }


  getText() {
    var code = this.editor.getValue();
    this.setState({
      text : code
    });
  }

  // sendCode will take the code on the 'text' state
  // and will be processed on the server
  sendCode() {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/api/replservice/runcode',
      data: {code: this.state.text},
      success: (data) => {
        console.log('data value is: ', data);
        this.socket.emit('append result', data);
        // $('.response').append(data);
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
    });
  }

  // setupSocket will emit the events when the keydown event occurs
  // there is a problem here... where we are transmitting every key
  setupSocket() {
    console.log(window.location.pathname)
    var socket = io(window.location.pathname); // FIX ME
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    socket.on('alter text', (msg) => {
      if(this.state.text !== msg) {
        console.log('making changes');
        this.setState({
          text: msg
        });

        //Get the range of selected text adn cursor
        var pos = this.editor.getCursorPosition();
        var range = this.editor.getSelectionRange();

        this.editor.setValue(this.state.text);

        // make sure the selected word stays highlighted
        if (range.start.row === pos.row && range.start.column === pos.column) {
          this.editor.selection.setRange(range, true);
        } else {
          this.editor.selection.setRange(range);
        }
      }
    });

    socket.on('alter result', (msg) => {
      console.log('going to append this: ', msg);
      var output = [];
      msg.split('\n').forEach((line) => {
        output.push(line);
      });
      this.setState({
        outputText: output
      });
      // $('.response').append(msg);
    });

    return socket;
  }

  // editorSetup will place in the settings for our editor
  // i.e. themes, language, etc.
  editorSetup () {
    var editor = ace.edit("editor");

    editor.setTheme("ace/theme/dreamweaver");
    editor.getSession().setMode("ace/mode/javascript"); // going to execute js
    editor.getSession().setUseSoftTabs(true); // use soft-tabs
    editor.setHighlightActiveLine(false); // sets line highlighting
    document.getElementById('editor').style.fontSize='16px'; // sets the font-size
    editor.getSession().setUseWrapMode(true);
    editor.resize();



    return editor;
  }

  handleKeyPress (e) {
    console.log('keypress is called');
    var text = this.editor.getValue();
    this.setState({
      text: text
    });

    this.socket.emit('text change', text);
  }

	sidebar () {
	  this.setState({
	    sidebar: !this.state.sidebar
	  });
  	console.log('menutoggled has been triggered');
  	$("#wrapper").toggleClass("toggled");
	}
/*
<div>
	<button onClick={this.sidebar.bind(this)}>Toggle Sidebar</button>
	<button onClick={this.getText.bind(this)}>get code</button>
	<button onClick={this.sendCode.bind(this)}>process code</button>
	{ this.state.sidebar ? <Menu>
	  <a id="home" className="menu-item" href="/">Home</a>
	  <a id="about" className="menu-item" href="/about">About</a>
	  <a id="contact" className="menu-item" href="/contact">Contact</a>
	</Menu> : null }
</div>
*/

	      // { this.state.sidebar ? <Sidebar></Sidebar> : null }
	      // onClick={this.sendCode.bind(this)}
	render () {

		var navFns = {
			sidebar: this.sidebar,
			getText: this.getText,
			sendCode: this.sendCode
		};

    return (
    	<div>
    	<Navigation sidebar={this.sidebar} sendcode={this.sendCode}></Navigation>
	    	<div id="wrapper">
	    		<Sidebar></Sidebar>
	        <div id="page-content-wrapper">
	        	<Grid>
		        	<Row className="home-editor">
		        			<div id="editor" className="home-editor" onKeyUp={this.handleKeyPress.bind(this)}></div>
		        	</Row>
		        	<Row className="home-console">
		        			<div id="console" className="home-console"></div>
		      		</Row>
	      		</Grid>
		      </div>
		    </div>
	    </div>
    )
  }
}

export default Editor;
