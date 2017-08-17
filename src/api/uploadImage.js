/* eslint-disable no-console */

const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.loadFromPath('./aws.config.json');

module.exports = (req, res) => {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  // console.log(req.files);

  req.files.forEach((file) => {
    fs.readFile(file.path, (err, data) => {
      if (err) {
        console.log('error from fs !!!!!');
        console.log(err);
        res.status(500).json({ success: false, message: 'fs error' });
      }

      const base64data = new Buffer(data, 'binary');

      const s3 = new AWS.S3();
      s3.putObject({
        Bucket: 'tay-images',
        Key: `${file.filename}.jpg`,
        Body: base64data,
        ACL: 'public-read',
      }, (s3err, s3data) => {
        if (s3err) {
          console.log('error from s3');
          console.log(s3err);
          res.status(500).json({ success: false, message: 's3 error' });
        } else {
          console.log('Successfully uploaded image.');
          console.log(s3data);
          res.json({ success: true, filename: file.filename });
        }
      });
    });
  });
};
