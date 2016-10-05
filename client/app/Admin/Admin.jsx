import React from 'react';

class Admin extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {


  }

  render() {
    return (
      <div>
        <h1>This is the Admin Page</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Admin;
