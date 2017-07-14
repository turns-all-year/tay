/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';

import reducers from 'reducers';
import routes from 'web/routes';

const store = createStore(
  combineReducers(reducers),
  window.__data, // eslint-disable-line no-underscore-dangle
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

const render = (routesFile) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key="provider">
        <Router routes={routesFile} render={props => <ReduxAsyncConnect {...props} />} history={browserHistory} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root'),
  );
};

render(routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('web/routes.jsx', () => {
    const nextRoutes = require('web/routes').default;
    render(nextRoutes);
  });
}
