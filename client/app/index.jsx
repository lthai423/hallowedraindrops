import React from 'react';
import { render } from 'react-dom';

var Promise = require('bluebird');

class App extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  text: 'hello world', // text is going to be the code the user inputs
  	}
    //returns an editor
  }

  componentDidMount() {

    this.editor = this.editorSetup();
    this.socket = this.setupSocket();

    this.editor.setValue(this.state.text);
  }

  getText() {
  	var code = this.editor.getValue();
  	console.log('value for code is: ', code);
  	this.setState({
  	  text : code
  	});
    console.log('text value is: ', this.state.text)
  }

  // sendCode will take the code on the 'text' state
  // and will be processed on the server
  sendCode() {
    // var myHeaders = new Headers();
    var myInit = {
      method: 'POST',
      body: {code: this.state.text}
    }
    fetch('api/replservice/runcode', myInit)
    .then((resp)=> {
      $('.response').append(resp);
      console.log('response received is ', resp);
    })
    .catch((err) => {
      console.log('error has occurred in index.jsx for sendcode');
      throw err;
    });
  }

  // setupSocket will emit the events when the keydown event occurs
  // there is a problem here... where we are transmitting every key
  setupSocket() {
    var socket = io();

    var text = this.editor.getValue();
    this.setState({
      text: text
    })
    
    socket.on('alter text', (msg) => {
      this.setState({
        text: msg
      });
      this.editor.setValue(this.state.text, 1);
    });
    return socket;
  }

  // editorSetup will place in the settings for our editor
  // i.e. themes, language, etc.
  editorSetup () {
  	var editor = ace.edit("editor");
  	editor.setTheme("ace/theme/monokai");
  	editor.getSession().setMode("ace/mode/javascript");
  	editor.resize();

    var socket = io();

  	return editor;
  }

  handleKeyPress () {
    console.log('keypress is called');
    var text = this.editor.getValue();
    this.setState({
      text: text
    })

    this.socket.emit('text change', text);
  }

  // react keyboard events: 
  // onkeydown / onkeypress / onkeyup
  // onKeyDown={this.setupSocket.bind(this)}
  render () {
  	return (
  	  <div>
  	  	<button onClick={this.getText.bind(this)}>get code</button>
        <button onClick={this.sendCode.bind(this)}>process code</button>
        <div>
          Response is: <p className="response"></p>
        </div>
  	    <div>
  	    <div id="editor" onKeyUp={this.handleKeyPress.bind(this)}></div>
  	    </div>
  	  </div>
  	)
  }
}

render(<App/>, document.getElementById('app'));