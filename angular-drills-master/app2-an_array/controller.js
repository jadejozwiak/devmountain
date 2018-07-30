angular.module("arrayApp")
  .controller("arrayController", function($scope, dataService) {
    $scope.test = "this is a test";
    $scope.theData = dataService.getMyData();

})
