/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from 'reducers';
import Routes from 'Routes';

const store = createStore(
  combineReducers(reducers),
);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Routes />
  </Provider>,
  document.getElementById('react-root'));
