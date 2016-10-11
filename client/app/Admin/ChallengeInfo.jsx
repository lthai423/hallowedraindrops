import React from 'react';
import store from '../store/index';
import {challengeTitle} from '../actions/index';

class ChallengeInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // title : '',
      difficulty: ''
    };
  }

  sendInfo() {
   this.props.handleInfo(this.state);
  }

  handleChange(e) {
    var title = e.target.value;
    store.dispatch(challengeTitle(title));
    // this.setState({
    //   title: title
    // });
    // var obj = this.state;
    // obj.title = title;
    // this.props.handleInfo(obj);

  }


  handleSelect(e) {
    var difficulty = e.target.value.slice(0, 1);
    this.setState({
      difficulty: difficulty
    });
    var obj = this.state;
    obj.difficulty = difficulty;
    this.props.handleInfo(obj);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group row">
            <label for="challenge-title" className="col-xs-2 col-form-label">Challenge Title</label>
            <div className="col-xs-8">
              <input className="form-control" type="text" placeholder="Challenge Name" value={store.getState().challengeTitle} onChange={this.handleChange.bind(this)} ref='title' id="challenge-title"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="difficulty" className='col-xs-2 col-form-label'>Difficulty</label>
            <div className ='col-xs-3'>
              <select onChange={this.handleSelect.bind(this)}className="form-control" id="difficulty" ref='difficulty'>
                <option>1 (easy)</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5 (hard)</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default ChallengeInfo;
