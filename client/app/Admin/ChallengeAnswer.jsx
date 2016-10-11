import React from 'react';
import store from '../store/index';
import {challengeSRCCode} from '../actions/index';

class ChallengeAnswer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      textform: true,
    };

  }

  handleSave() {
    var text = this.refs.textarea.value;

    store.dispatch(challengeSRCCode(text));
    this.setState({
      textform: false
    });
    $('#save').toggleClass("hide");
  }

  handleEdit() {
    $('#save').toggleClass("hide");
    this.setState({
      textform: true
    });

  }

  handlePaste(e) {
    // let code to be pasted
    setTimeout(function () {
      var text = this.refs.textarea.value;
      store.dispatch(challengeSRCCode(text));

      this.setState({
        textform: false,
      });
    }.bind(this), 100)
    $('#save').toggleClass("hide");
  }

  handleChange(e) {
    store.dispatch(challengeSRCCode(e.target.value));
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="comment">Challenge Answer:</label>
          {this.state.textform ?
          <textarea placeholder="Paste Challenge Answer Here"
            onPaste={this.handlePaste.bind(this)} onChange={this.handleChange.bind(this)} className="form-control" rows="14"
            id="comment" ref='textarea'>{store.getState().challengeSRCCode}</textarea> :
          <pre id='pre' className='pre-scrollable'>{store.getState().challengeSRCCode}</pre>}
          <button id='save' onClick={this.handleSave.bind(this)} className="btn btn-default" type="button">Save</button>
          <button onClick={this.handleEdit.bind(this)} className="btn btn-default" type="button">Edit</button>
        </div>
      </form>
    )
  }
}

export default ChallengeAnswer;
