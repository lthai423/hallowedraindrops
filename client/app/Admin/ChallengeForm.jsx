import React from 'react';
import Navigation from './AdminNavigation.jsx';
import PageHeader from 'react-bootstrap/lib/PageHeader.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

class ChallengeForm extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.editor = this.editorSetup();

  }

  editorSetup () {
    var editor = ace.edit("editor");

    editor.setTheme("ace/theme/dreamweaver");
    editor.getSession().setMode("ace/mode/javascript"); // going to execute js
    editor.getSession().setUseSoftTabs(true); // use soft-tabs
    editor.setHighlightActiveLine(false); // sets line highlighting
    document.getElementById('editor').style.fontSize='13px'; // sets the font-size
    editor.getSession().setUseWrapMode(true);
    editor.resize();

    return editor;
  }

  render() {
    return (
      <div>
          <PageHeader>Add a new challenge:</PageHeader>
           <div id="page-content-wrapper">
            <Grid>
              <Col sm={6} md={6}>
                <Row>
                  <Col sm={6} md={12}>
                    <div id="challenge-editor" className="challenge-editor">This is where editor 1 goes</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} md={12}>This is where editor 2 goes</Col>
                </Row>
              </Col>
              <Col sm={6} md={6}>
                <h1>This is where tests goes</h1>
              </Col>
            </Grid>
          </div>
      </div>
    );
  }
}

export default ChallengeForm;
