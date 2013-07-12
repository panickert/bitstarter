var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
//test
app.get('/', function(request, response) {
  var buffer = readFile("./index.html");
  //response.send('Hello World 2!');
   response.send(buffer.toString('utf-8'));
});
var readFile = function(fileName)
{
    var buffer=fs.readFileSync(fileName);
    return buffer;
}
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});