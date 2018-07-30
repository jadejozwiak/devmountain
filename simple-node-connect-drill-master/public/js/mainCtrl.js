angular.module("myChats")
  .controller("mainCtrl", function($scope, mainSrvc, $interval) {

    $scope.chatAppName = "Name my chatapp";

    //Dummy data to show what the chat messages should look like
    // to work with the frontend
    // TODO Remove once server is integrated;
    $scope.chats = [{
      screenname: "Mr Wiggles",
      message: "I canz sit still"
    }, {
      screenname: "Mr Loud",
      message: "I canz use my inside voice"
    }, {
      screenname: "Mr Author",
      message: "I canz write childrenz books"
    }]

    $scope.addChat = function(chatmessage) {
      mainSrvc.addChat(chatmessage);
    }

    function getChats() {
      mainSrvc.getChats()
        .then(function(response) {
          $scope.chats = response;
        })
    }

    $scope.deleteChats = function() {
      mainSrvc.deleteChats();
    }

    // Gets initial chats
    getChats();

    // Set up repeating call to get chats
    $interval(getChats, 3000);

  })
