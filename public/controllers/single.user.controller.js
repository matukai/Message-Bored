angular.module('myApp')
.controller('SingleUserController', ['$scope', '$location', 'SingleUserService', function ($scope, $location,  SingleUserService){

  //FETCH SINGLE USER BY ID
  let url = $location.url();
  //console.log(url)
  //SingleUserService.fetchSingleUser(url);
  SingleUserService.fetchSingleUser(url)
  .then(result => {
    $scope.user = result;
  })
}]);