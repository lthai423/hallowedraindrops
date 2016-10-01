import React from 'react';
import { render } from 'react-dom';
import Editor from './editor.jsx';
import Navigation from './navigation.jsx';
import Output from './output.jsx';
import Sidebar from './challenge.jsx';


var Promise = require('bluebird');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "console.log('hello world')", // text is going to be the code the user inputs
      outputText: [],
      sidebar: false,
      question: ''
    };
  }

  componentDidMount() {

    this.editor = this.editorSetup();
    this.socket = this.setupSocket();
    this.editor.setValue(this.state.text);
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
        console.log('value for success is: ', this);
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
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
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
  }

  // getSelection (question) {
  //   console.log('question passed back up is: ', question);

  // }

  // react keyboard events:
  // onkeydown / onkeypress / onkeyup
  // onKeyDown={this.setupSocket.bind(this)}
  render () {
    return (
      <div>
        <div>
          <button onClick={this.sidebar.bind(this, question)}>Toggle Sidebar</button>
            { this.state.sidebar ? <Sidebar></Sidebar> : null }
        </div>
        <button onClick={this.getText.bind(this)}>get code</button>
        <button onClick={this.sendCode.bind(this)}>process code</button>
        <div>
        <div id="editor" onKeyUp={this.handleKeyPress.bind(this)}></div>
        <Output output={this.state.outputText}/>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
