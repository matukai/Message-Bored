angular.module('myApp')
.controller('LoginController', ['$scope','UserService', function ($scope, UserService) {

$scope.username = {
  name: ''
}
$scope.login = function(username) {
  let input = Object.assign({}, $scope.username);
  //console.log('controller' , input)
  UserService.login(input);
  $scope.username.name = '';
}



}])