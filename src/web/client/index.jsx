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

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store} key="provider">
      <Component />
    </Provider>,
    document.getElementById('react-root'),
  );
};

render(Routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('Routes', () => {
    render(Routes);
  });
}
