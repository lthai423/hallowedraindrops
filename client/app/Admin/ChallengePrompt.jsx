import React from 'react';

class ChallengePrompt extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: 'edit',
      textform: true,
      code: ''
    };

  }

  handleSave() {
    var text = this.refs.textarea.value;
    this.setState({
      code: text
    });
    this.props.handlePrompt(text);
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
    document.getElementById('comment').html(this.state.code);
    // this.textarea.value = this.state.code;
  }

  handlePaste(e) {
    // let code to be pasted
    setTimeout(function () {
      var code = this.refs.textarea.value;
      this.setState({
        code: code
      });
      this.props.handlePrompt(code);
      this.setState({
        textform: false,
      });
    }.bind(this), 100);
    $('#save').toggleClass("hide");

  }

  handleChange(e) {
    this.setState({
      code: e.target.value
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="comment">Challenge Prompt:</label>
          {this.state.textform ?
          <textarea placeholder="Paste Challenge Code Here"
            onPaste={this.handlePaste.bind(this)} onChange={this.handleChange.bind(this)} className="form-control" rows="14"
            id="comment" ref='textarea'>{this.state.code}</textarea> :
          <pre id='pre' className='pre-scrollable'>{this.state.code}</pre>}
          <button id='save' onClick={this.handleSave.bind(this)} className="btn btn-default" type="button">Save</button>
          <button onClick={this.handleEdit.bind(this)} className="btn btn-default" type="button">Edit</button>
        </div>
      </form>
    )
  }
}

export default ChallengePrompt;
