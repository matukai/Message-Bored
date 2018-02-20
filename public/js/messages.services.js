angular.module('myApp')
.service('MessageService', ['$http', function ($http) {
  
  let messagesArr = [];

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

  this.getMessages = function () {
    return messagesArr;
  }

  this.fetchMessages = function () {
    return $http.get('api/messages')
    .then(data => {
      let result = data.data;
      result.forEach(element => {
        messagesArr.push(element)
      })
      return messagesArr;
    })
    .catch(err => {
      console.log(err)
    })
  }







}])