angular.module('myApp')
.service('UserService', ['$http' , function($http) {
  const userArr = [];

  this.getUsers = function() {
    return userArr;
  }
  this.fetchUsers = function () {
    return $http.get('/api/users')
    .then(data => {
      //console.log(data)
      let result = data.data;
      result.forEach(element => {
        userArr.push(element);
      })
      return userArr;
    })
    .catch(err => {
      console.log(err);
    })
  }

  this.insertUser = function (newUser) {
    console.log('NEW USER FROM CONTROLLER', newUser)
    return $http.post('/api/users', newUser)
    .then(data => {
      let result = data.data;
      userArr.push(result)
    })
  }





}])