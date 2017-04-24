/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../app/reducers';
import Routes from '../app/Routes';

const store = createStore(
  combineReducers(reducers),
);

const App = () => (
  <Provider store={store} key="provider">
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('react-root'));
