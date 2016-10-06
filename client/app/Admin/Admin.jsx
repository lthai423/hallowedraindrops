import React from 'react';
import Navigation from './AdminNavigation.jsx';


class Admin extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {


  }

  render() {
    return (
      <div>
        <Navigation />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Admin;
