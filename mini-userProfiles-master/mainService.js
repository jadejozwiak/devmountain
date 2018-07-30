angular.module('userProfiles').service('mainService', function($http, $q) { //this service is part of the user profile
    //inside of a service, you can do javascript. Anything we put on 'this' keyword will be available in the $scope. This is now accessible in the controller.
    var data;
    this.getUsers = function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=1'
            }).then(function(response) {
                data = response.data.data;
                deferred.resolve(data)
            });
            return deferred.promise;
        }
        //promise has an http
    this.toggleFavorite = function(i) {
        data.forEach(function(user) {
            if (user.id === i) {
                user.isFavorite = !user.isFavorite;
            }
        })
    }
})

// angular.module('userProfiles').service('mainService', function($http) { //this service is part of the user profile
//   //inside of a service, you can do javascript. Anything we put on 'this' keyword will be available in the $scope. This is now accessible in the controller.
//   var data;
//   this.getUsers = function() {
//     return $http({
//       method: 'GET',
//       url: 'https://reqres.in/api/users?page=1'
//     }).then(function(response) {
//       data = response.data.data;

//       return data
//     });
//   }
//   //promise has an http
//   this.toggleFavorite = function(i) {
//     data.forEach(function(user) {
//       if (user.id === i) {
//         user.isFavorite = !user.isFavorite;
//       }
//     })
//   }
// })