angular.module('myApp')
.service('SingleUserService', ['$http' , function($http) {

  this.fetchSingleUser = function (id) {
    return $http.get('/api' + id)
    .then(data => {
      //console.log('SINGLE USER SERVICE',data.data)
      //console.log('ID',id)
      return data.data;
    })
    .catch(err => {
      console.log(err);
    })
  }

}]);