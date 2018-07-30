var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var messages = [{ message: "Hello there!", time: "5:45PM" }, { message: "Hola!", time: "5:44PM" }, { message: "Hallo!", time: '5:43PM' }];
app.use(express.static('assets'));
app.use(bodyParser.json());
app.get('/messages', function(req, res, next) {
  res.status(200)
    .json({
      messages: messages
    });
});
app.post('/messages', function(req, res, next) {
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200)
    .json({
      messages: messages
    });
});
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
