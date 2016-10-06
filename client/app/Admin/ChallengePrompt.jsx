import React from 'react';

class ChallengePrompt extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: edit
    };
  }

  handleSave() {

  }

  handleEdit() {

  }

  handlePaste() {

  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="comment">Challenge Prompt:</label>
          <textarea onPaste={handlePaste} className="form-control" rows="14" id="comment"></textarea>
          <button onClick={handleSave} className="btn btn-default" type="button">Save</button>
          <button onClick={handleEdit} className="btn btn-default" type="button">Edit</button>
        </div>
      </form>
    )
  }
}

export default ChallengePrompt;
