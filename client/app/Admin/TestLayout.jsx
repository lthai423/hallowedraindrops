import React from 'react';
import ChallengeInfo from './ChallengeInfo.jsx';
import TestEntry from './TestEntry.jsx';

//React Bootstrap
import PageHeader from 'react-bootstrap/lib/PageHeader.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

class TestingLayout extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tests: []
    };
  }

  handleNewTest() {
    var test = <TestEntry />;
    var tests = this.state.tests.slice();
    tests.push(test);
    console.log('add new test');
    this.setState({
      tests: tests
    });
  }

  handleSubmit() {

  }
  render() {
    return (
      <div>
        <Row>
          <Col sm={6} md={12}>
            <ChallengeInfo handleInfo={this.props.handleInfo} />
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={12}>
            <h3>Add a test case:</h3>
            <div className='container'>
            <p className='col-xs-2'>Snippet</p>
            <p className='col-xs-2'>Method</p>
            <p className='col-xs-2'>Answer</p>
            </div>
            <form>
              {this.state.tests}
            </form>
            <button onClick={this.handleNewTest.bind(this)} type="button" className="btn btn-outline-primary">Add Another Test</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestingLayout;
