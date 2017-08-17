import React from 'react';
import ReactDOM from 'react-dom';

import CreatePost from 'web/pages/CreatePost';
import 'web/client/scss/integration.global.scss';

const form = document.getElementsByTagName('form')[0];
const table = form.getElementsByTagName('table')[1];

function submitOverride(values) {
  const title = document.postmodify.subject;
  const body = document.postmodify.message;

  const bodyWithImages = values.filesUploaded.reduce((acc, file) => (
    `${acc} \n\n[img width=800]https://s3-us-west-2.amazonaws.com/tay-images/${file.filename}.jpg[/img]`
  ), values.body);

  title.value = values.title;
  body.value = bodyWithImages;

  document.postmodify.post.click();
}

function addCss(fileName) {
  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.appendChild(link);
}

// only mess with the post page for now
if (window.location.href.indexOf('trip_reports/index.php?action=post') > -1) {
  table.style.display = 'none';

  addCss('http://localhost:4000/icomoon/style.css');

  form.innerHTML += '<div id="react-root"></div>';

  ReactDOM.render(
    <CreatePost routeParams={{ postType: 'trip-report' }} submitOverride={submitOverride} />,
    document.getElementById('react-root'),
  );
}
