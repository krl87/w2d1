getHTML = require('../step-5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);