import 'isomorphic-fetch';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import routes from 'web/routes';
import Html from './Html';

export default function (req, res) {
  match({ routes, location: req.url }, (err, redirect, renderProps) => {
    // TODO: handle errors, redirects, etc here
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message);
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search);
    } else if (renderProps) {
      const store = createStore(
        combineReducers(reducers),
        compose(
          applyMiddleware(thunk),
        ),
      );

      loadOnServer({ ...renderProps, store }).then(() => {
        let markup = '';
        try {
          markup = ReactDOMServer.renderToString(
            <Provider store={store} key="provider">
              <RouterContext {...renderProps} render={props => <ReduxAsyncConnect {...props} />} />
            </Provider>);
        } catch (error) {
          return res.status(500).send(error.message);
        }

        const html = ReactDOMServer.renderToStaticMarkup(
          <Html {...{ markup, currentState: store.getState() }} />);

        return res.send(`<!DOCTYPE html>${html}`);
      });
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found');
    }
  });
}
