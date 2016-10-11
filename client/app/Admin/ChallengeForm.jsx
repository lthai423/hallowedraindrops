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

import store from '../store/index';

class ChallengeForm extends React.Component{
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    var question = {
      name: store.getState().challengeTitle,
      difficulty: store.getState().challengeDifficulty,
      attempts: 0,
      answers: 0,
      prompt: store.getState().challengePrompt,
    };

    var body = {
      question: question,
      varArry: store.getState().challengeTests,
      sourceCode: store.getState().challengeSRCCode,
    };
    console.log('sending this body of info to test server', body);
    this.addChallenge(body);
  }

  addChallenge(body) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/admin/challenge/' + store.getState().challengeTitle,
      data: body,
      success: (data) => {
        console.log('Success!', data);
      },
      error: (error) => {
        console.log('Error in posting question', error);
      }
    });
  }

  render() {
    return (
      <div>
          <PageHeader>Add a new challenge!</PageHeader>
          <button onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-outline-primary">Submit Challenge</button>
           <div id="page-content-wrapper">
            <Grid>
              <Col sm={6} md={6}>
                <TestLayout />
              </Col>
              <Col sm={6} md={6}>
                <Row>
                  <Col sm={6} md={12}>
                    <ChallengePrompt />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} md={12}>
                    <ChallengeAnswer />
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
