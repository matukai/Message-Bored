angular.module('myApp')
.controller('LogoutController', ['$scope', 'UserService', function ($scope,UserService) {
  UserService.logout();
}])