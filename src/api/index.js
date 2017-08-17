/* eslint-disable no-console, global-require, import/no-dynamic-require */
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const uploadImage = require('./uploadImage');

const upload = multer({ dest: 'uploads/' });

const port = 4000;
const app = express();

app.use(cors());

app.get('/ping', (req, res) => {
  res.send('pong');
});

// allows us to server icomoon cross domain
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  next();
});

app.use(express.static(path.join(__dirname, 'static')));

app.post('/image-upload', upload.array('photos', 12), uploadImage);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
