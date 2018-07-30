angular.module( 'app' )
  .controller( 'mainCtrl', function ( $scope ) {
    $scope.test = "it's working";
    var pages = [ 'view', 'find', 'update' , 'signUp' , 'landing', 'addFriend'];
    $scope.view = false;
    $scope.find = false;
    $scope.update = false;
    $scope.signUp = true;
    $scope.landing = false;
    $scope.addFriend = false;
    $scope.togglePage = function ( displayView ) {
      pages.forEach( function ( page ) {
        if ( page === displayView ) {
          $scope[ page ] = true;
        } else {
          $scope[ page ] = false;
        }
      } )
      console.log( displayView, 'working as intended' );
    }
  } )
