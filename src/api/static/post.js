const form = document.getElementsByTagName('form')[0];
const table = form.getElementsByTagName('table')[1];

table.style.display = 'none';

form.innerHTML += '<div id="rect-root"></div>';
