import React from 'react';

class ChallengeInfo extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group row">
            <label for="challenge-title" className="col-xs-2 col-form-label">Challenge Title</label>
            <div className="col-xs-8">
              <input className="form-control" type="text" placeholder="Challenge Name" id="challenge-title"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="difficulty" className='col-xs-2 col-form-label'>Difficulty</label>
            <div className ='col-xs-3'>
              <select className="form-control" id="difficulty">
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
