var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var port = 4242;
var corsOptions = {
  origin: 'http://localhost:' + port
}

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true
}));

app.listen(port, function() {
  console.log('Listening on port', port);
})
