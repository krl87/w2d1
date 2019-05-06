var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
  var htmlFile = "";
  https.get(options, function(response) {
    // set utf encoding
    response.setEncoding('utf8');
    response.on('data', function(data){
      htmlFile += data;
    });

    response.on('end', function(){
      callback(htmlFile);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);