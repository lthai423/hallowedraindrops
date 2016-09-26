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

  // sendCode will take the code on the 'text' state
  // and will be processed on the server
  sendCode() {
    // var myHeaders = new Headers();
    var myInit = {
      method: 'POST',
      body: this.state.text
    }
    fetch('api/runcode', myInit)
    .then((resp)=> {
      console.log('response received is ', resp);
    })
    .catch((err) => {
      console.log('error has occurred in index.jsx for sendcode');
      throw err;
    });
  }

  setupSocket() {
    console.log('setting up socket.io...');
    var socket = io();
    this.getText();
    socket.emit('text change', this.state.text);

    socket.on('alter text', (msg) => {
      console.log('RECEIVED CHANGES', msg);
      this.setState({
        text: msg
      });
    });

  //    $('form').submit(function(){
  //   socket.emit('chat message', $('#m').val());
  //   $('#m').val('');
  //   return false;
  // });
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

  // react keyboard events: 
  // onkeydown / onkeypress / onkeyup
  render () {
  	return (
  	  <div>
  	  	<button onClick={this.getText.bind(this)}>get code</button>
        <button onClick={this.sendCode.bind(this)}>process code</button>
  	    <div>
  	    <div id="editor" onKeyDown={this.setupSocket.bind(this)}></div>
  	    </div>
  	  </div>
  	)
  }
}

render(<App/>, document.getElementById('app'));