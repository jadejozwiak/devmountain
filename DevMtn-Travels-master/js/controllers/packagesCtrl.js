angular.module( 'devmtnTravel' )
  .controller( 'packagesCtrl', function ( $scope, mainSrv ) {
    console.log( 'this is the packages controller' )
    $scope.locations = mainSrv.travelInfo;
  } )
