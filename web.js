var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

content_buffer = fs.readFileSync('index.html');
content_string = content_buffer.toString('utf8');


app.get('/', function(request, response) {
  response.send(content_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
