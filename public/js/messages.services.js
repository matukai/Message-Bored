angular.module('myApp')
.service('MessageService', ['$http', function ($http) {
  
  this.insertMessage = function (newMessage) {
    console.log('MESSAGE SERVICE' , newMessage)
    return $http.post('api/messages', newMessage)
    .then(data => {
      console.log('MESSAGE SERVICES DATA PROMISE', data.data)
      return data.data;
    })
    .catch(err => {
      console.log(err)
    })
  }







}])