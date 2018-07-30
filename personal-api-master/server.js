var express = require('express');
var bodyParser = require('body-parser');
var port = 8887;
var app = express();

app.listen(port, function() {
  console.log('listening on port', port);
});
