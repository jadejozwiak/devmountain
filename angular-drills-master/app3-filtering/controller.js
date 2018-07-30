angular.module("app")
  .controller("mainCtrl", function($scope, dataService) {
    $scope.test = "this is a test";
    $scope.theData = dataService.getMyData();
    $scope.filters = [{
      label: "Name",
      prop: "name"
    }, {
      label: "Email",
      prop: "email"
    }, {
      label: "Date Employed",
      prop: "dateEmployed"
    }, {
      label: "Phone Number",
      prop: "phone"
    }];
  })
