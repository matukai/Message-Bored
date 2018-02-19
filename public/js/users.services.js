angular.module('myApp')
.service('UserService', ['$http' , function($http) {
  const userArr = [];

  this.getUsers = function() {
    return userArr;
  }
  this.fetchUsers = function () {
    return $http.get('/api/users')
    .then(data => {
      console.log('DATA',data)
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
      userArr.push(result);
    })
    .catch(err => {
      console.log(err)
    })
  }

  this.fetchSingleUser = function () {
    return $http.get('/api/users/:id')
    .then(data => {
      console.log('SERVICES CATCHING FROM DATABASE', data)
      return data;
    })
    .catch(err => {
      console.log(err)
    })
  }

  this.login = function (input) {
    console.log('services' , input)
    return $http({
      method: 'POST',
      url: '/api/users/login',
      data: input
    })
    .then(result => {
      console.log('SERVICES PROMISE RETURNING FROM SERVER')
      console.log('SERVICES DATA' , result.data)
      console.log(result.data.id)
      if(!result.data.id){

      }
      localStorage.setItem(result.data.name, result.data.id)

    }) 
    .catch(err => {
      console.log(err)
    })
  }






}])