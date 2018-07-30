var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;


app.use(express.static('public'));
app.use(bodyParser.json());

app.use(session({ secret: 'whatever you want' }));
app.post("/api/screenname", function(req, res) {
  req.session.screename = req.body.screenname;
  res.send('screenname set');
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function() {
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
