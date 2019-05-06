var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks (requestOptions) {
  https.get(requestOptions, function(response){
    // set utf encoding
    response.setEncoding('utf8');
    response.on('data', function(data){
      console.log('Chunk Recieved. -->', + "\n" + data);
    });
  });
}
getAndPrintHTMLChunks(requestOptions);