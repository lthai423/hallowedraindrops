import React from 'react';

//Other Components
import Navigation from './AdminNavigation.jsx';
import ChallengePrompt from './ChallengePrompt.jsx';
import ChallengeAnswer from './ChallengeAnswer.jsx';
import TestLayout from './TestLayout.jsx';

//React Bootstrap
import PageHeader from 'react-bootstrap/lib/PageHeader.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';


class ChallengeForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      prompt: '',
      tests: [],
      sourceCode: '',
      info: {
        title: '',
        difficulty: ''
      },
    };
  }

  componentDidMount() {
    // this.editor = this.editorSetup();

  }

  handlePrompt(code) {
    console.log(code);
    this.setState({
      prompt: code
    });
    console.log('at challengeForm', this.state.prompt);
  }

  handleTests() {

  }

  handleSourceCode(code) {
    this.setState({
      sourceCode: code
    });
  }

  handleChallengeInfo(info) {
    this.setState({
      info: info
    });
  }

  handleSubmit() {
    var name;
    var prompt;
    var sourceCode;
    var tests;

  }

  sendRequest() {
    $.ajax({


    });
  }
  // editorSetup () {
  //   var editor = ace.edit("editor");

  //   editor.setTheme("ace/theme/dreamweaver");
  //   editor.getSession().setMode("ace/mode/javascript"); // going to execute js
  //   editor.getSession().setUseSoftTabs(true); // use soft-tabs
  //   editor.setHighlightActiveLine(false); // sets line highlighting
  //   document.getElementById('editor').style.fontSize='13px'; // sets the font-size
  //   editor.getSession().setUseWrapMode(true);
  //   editor.resize();

  //   return editor;
  // }

  render() {
    return (
      <div>
          <PageHeader>Add a new challenge!</PageHeader>
          <button onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-outline-primary">Submit Challenge</button>
           <div id="page-content-wrapper">
            <Grid>
              <Col sm={6} md={6}>
                <TestLayout handleInfo={this.handleChallengeInfo.bind(this)} handleTests={this.handleTests.bind(this)}/ >
              </Col>
              <Col sm={6} md={6}>
                <Row>
                  <Col sm={6} md={12}>
                    <ChallengePrompt handlePrompt={this.handlePrompt.bind(this)} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} md={12}>
                    <ChallengeAnswer handleSourceCode={this.handleSourceCode.bind(this)}/>
                  </Col>
                </Row>
              </Col>
            </Grid>
          </div>
      </div>
    );
  }
}

export default ChallengeForm;
