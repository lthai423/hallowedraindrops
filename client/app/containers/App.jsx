import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools';

import CodeDropApp from './CodeDropApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Provider store={store}>
          {() => <CodeDropApp />}
        </Provider>
      </div>
    )
  }
}

