angular.module( 'devmtnTravel' )
  .controller( 'bookedCtrl', function ( $scope, mainSrv ) {
    $scope.locations = mainSrv.travelInfo;
  } )
