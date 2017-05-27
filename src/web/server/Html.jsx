/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  markup: PropTypes.string.isRequired,
  currentState: PropTypes.object.isRequired,
};

const Html = ({ markup, currentState }) => {
  const scriptContents = `window.__data = ${JSON.stringify(currentState).replace(/<\//g, '<\\/')};`;

  return (
    <html lang="en-US">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>Turns All Year</title>

        <link href="http://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css" />
        <link href="/icomoon/style.css" rel="stylesheet" type="text/css" />
        <link href="/styles.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: scriptContents }} />
        <div id="react-root" dangerouslySetInnerHTML={{ __html: markup }} />
        <script src="http://localhost:8080/bundle.js" />
      </body>
    </html>
  );
};

Html.propTypes = propTypes;

export default Html;
