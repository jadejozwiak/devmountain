angular.module('friendsList', [])
  .controller('mainCtrl', function($scope) {
    $scope.message = "hola friends";
    $scope.friends = ["Gwen Stacy", "Miles Morales", "Mary Jane"];
    $scope.addFriend = function(name) {
      $scope.friends.push(name);
    }
  })
