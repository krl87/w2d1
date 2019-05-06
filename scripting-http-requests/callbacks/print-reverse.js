getHTML = require('../step-5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, printReverse);