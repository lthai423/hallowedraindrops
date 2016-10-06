import React from 'react';

class TestEntry extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="form-group">
        <div className="form-group">
          <div className="col-xs-4">
            <input className="form-control" type="text" placeholder="fn(arguments)" id="snippet"/>
          </div>
        </div>
        <div className="form-group">
          <div className='col-xs-4'>
            <select className="form-control" id="method">
              <option></option>
              <option>should.exist</option>
              <option>should.not.exist</option>
              <option>should.Throw</option>
              <option>should.not.Throw</option>
              <option>should.equal</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-4">
            <input className="form-control" type="text" placeholder="4" id="answer"/>
          </div>
        </div>
      </div>
    );
  }
};

export default TestEntry;
