/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reducers from 'reducers';
import App from 'web/App.jsx';

const store = createStore(
  combineReducers(reducers),
);

const render = () => {
  ReactDOM.render(
    <Provider store={store} key="provider">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('react-root'),
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('App', () => {
    render();
  });
}
