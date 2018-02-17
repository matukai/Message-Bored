angular.module('myApp')
.controller('UsersController', ['$scope', 'UserService', function($scope, UserService) {
  //FETCH ALL TOPICS
  UserService.fetchUsers();
  $scope.users = UserService.getUsers();
}])