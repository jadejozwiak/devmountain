var chats = [];
module.exports = {

  getChats: function(req, res) {
    res.json(chats);
  },
  postChats: function(req, res) {
    var chat = req.body.chat;
    chat.screenname = req.session.screenname;
    chats.push(chat);
    res.json(chats);
  },
  deleteChats: function(req, res) {
    chats = [];
    res.send(chats);
  }
}
