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
  }

  handlePrompt(code) {
    this.setState({
      prompt: code
    });
  }

  handleTests(tests) {
    this.setState({
      tests: tests
    });
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
    console.log('state to send', this.state);
    this.sendQuestion();
    this.sendRequest();
  }

  sendQuestion() {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/admin/challenge',
      data: {
        question: {
          name: this.state.info.title,
          difficulty: this.state.info.difficulty,
          attempts: 0,
          answers: 0,
          prompt: this.state.prompt,
        }
      },
      success: (data) => {
        console.log('Success!', data);
      },
      error: (err) => {
        console.log('Error in posting question', error);
      }
    });
  }
  sendRequest() {
    console.log('sending state');
    $.ajax({
      method: 'POST',
      url: 'http://localhost:1337/db/test',
      data: this.state,
      success: (data) => {
        console.log('data value is: ', data);
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus, errorThrown, jqXHR);
      }
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
