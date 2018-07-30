angular.module("myChats")
  .service("mainSrvc", function($http) {

    this.getChats = function() {
      mainSrvc.getChats()
        .then(function(response) {
          $scope.chats = response;
        })
        .then(function(response) {
          return response.data;
        })
    };

    this.addChat = function(chat) {
      return $http({
          method: 'POST',
          url: '/api/chats',
          data: {
            chat: chat
          }
        })
        .then(function(response) {
          return response.data;
        })
    };

    this.deleteChats = function() {
      return $http({
          method: 'DELETE',
          url: 'api/chats'
        })
        .then(function(response) {
          return response.data;
        })
    };

    this.setScreenname = function(screenname) {
      return $http({
          method: 'POST',
          url: 'api/screenname',
          data: {
            screenname: screenname
          }
        })
        .then(function(response) {
          console.log(response)
        })
    }
  });
