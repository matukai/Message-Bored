angular.module('myApp')
.controller('UsersController', ['$scope', 'UserService', function($scope, UserService) {
  //FETCH ALL TOPICS
  UserService.fetchUsers();
  $scope.users = UserService.getUsers();

  //INSERT USER
  $scope.newUser = {
    name: ''
  };
  //FIRED FROM NG-CLICK
  $scope.addUser = function(newUser) {
    let user = Object.assign({}, $scope.newUser);
    console.log('usercontroller', user)
    UserService.insertUser(user);
    $scope.newUser.name = '';
  };

  






}])