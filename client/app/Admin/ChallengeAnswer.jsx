import React from 'react';

class ChallengeAnswer extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="comment">Challenge Answer:</label>
          <textarea className="form-control" rows="14" id="comment"></textarea>
        </div>
      </form>
    )
  }
}

export default ChallengeAnswer;
