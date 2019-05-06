var https = require('https');


 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTML (args) {
  var htmlFile = "";
  https.get(args, function(response) {
    // set utf encoding
    response.setEncoding('utf8');
    response.on('data', function(data){
        htmlFile += data;
    });

    response.on('end', function(){
      console.log(htmlFile);
    });
  });
}
getAndPrintHTML(requestOptions);