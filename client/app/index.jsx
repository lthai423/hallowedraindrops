import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		text: '' // text is going to be the code the user inputs
  	}
  }

  componentDidMount() {
  	console.log('entered into here');
	this.editorSetup();
  }

  getText() {
  	var code = editor.getValue();
  	console.log('value for code is: ', code);
  	this.setState({
  	  text : code
  	})
  }

  editorSetup () {
  	var editor = ace.edit("editor");
  	editor.setTheme("ace/theme/monokai");
  	editor.getSession().setMode("ace/mode/javascript");
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