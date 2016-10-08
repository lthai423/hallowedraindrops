// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// // import Admin from './reducers';
// import App from './App.jsx';

// // Index is now our store

// // let store = createStore(Admin);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
//   );

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
