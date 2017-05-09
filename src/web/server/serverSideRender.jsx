import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from 'reducers';
import App from 'web/App';
import Html from './Html';

export default function (req, res) {
  const store = createStore(
    combineReducers(reducers),
  );

  const context = {};
  let markup = '';
  try {
    markup = ReactDOMServer.renderToString(
      <Provider store={store} key="provider">
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>
      </Provider>);
  } catch (err) {
    return res.status(500).send(err.message);
  }

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    return res.redirect(301, context.url);
  }

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html {...{ markup, currentState: store.getState() }} />);

  return res.send(`<!DOCTYPE html>${html}`);
}
