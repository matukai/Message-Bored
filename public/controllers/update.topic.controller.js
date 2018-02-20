angular.module('myApp')
.controller('UpdateTopicController', ['$scope','$location', '$routeParams','TopicService','MessageService', function ($scope, $location, $routeParams, TopicService, MessageService) {

  //FETCH ALL TOPICS
  MessageService.fetchMessages();
  $scope.messages = MessageService.getMessages();

  

  let id = $routeParams.id
  //console.log(id)

  let authorID = localStorage.getItem('user_id')
  //console.log(authorID)

  $scope.newTopic = {
    name: ''
  };
  $scope.newMessage = {
    body: '',
    author_id: authorID,
    topic_id: id
  }
  //console.log($scope.newMessage)

  $scope.changeTopic = function(newtopic) {
    //console.log('CHANGE TOPIC ID' , id)
    let changedTopic = Object.assign({}, $scope.newTopic);
    TopicService.updateTopic(id,changedTopic);
    $scope.newTopic.name = '';
  }

  $scope.insertMessage = function(newMessage) {
    let message = Object.assign({}, $scope.newMessage);
    MessageService.insertMessage(message);
    $scope.newMessage = '';
  }


}])