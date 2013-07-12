var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var buffer = readFile("index.html");
  //response.send('Hello World 2!');
   response.send(buffer.toString());
});
var readFile = function(fileName)
{
    var buffer = new Buffer(fs.readFileSync(fileName, function (err, data) {
        if (err) throw err;
        return data;
    })
    );
    return buffer;
}
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});