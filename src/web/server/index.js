const express = require('express');

const serverSideRender = require('../../../dist/serverSideRender').default;

// Feel free to change the port Chris ****
const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  serverSideRender(req, res);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`); // eslint-disable-line no-console
});
