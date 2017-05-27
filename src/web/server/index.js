/* eslint-disable no-console, global-require, import/no-dynamic-require */
const express = require('express');

const serverRenderPath = '../../../dist/serverSideRender';
let serverSideRender = require(serverRenderPath).default;

// Feel free to change the port Chris ****
const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  serverSideRender(req, res);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

require('piping')({
  main: './dist/serverSideRender.js',
  hook: true,
}, (reloader) => {
  reloader.on('reloaded', () => {
    // clear the cache so we can get latest changes
    delete require.cache[require.resolve(serverRenderPath)];

    // pull in the latest changes
    serverSideRender = require(serverRenderPath).default;

    console.info('serverSideRender.js reloaded successfully');
  });
});
