angular.module('myApp')
.controller('TopicsController', ['$scope', 'UserService','TopicService', function($scope,UserService,TopicService) {
  //FETCH ALL TOPICS
  TopicService.fetchTopics();
  $scope.topics = TopicService.getTopics();

  //INSERT TOPIC
  $scope.newTopic = {
    name: ''
  };
  $scope.getLoggedIn = UserService.getLoggedIn;

  //GETS FIRED FROM NG-CLICK 
  $scope.addTopic = function(newTopic) {
    let topic = Object.assign({}, $scope.newTopic);
    //console.log(topic)
    TopicService.insertTopic(topic);
    $scope.newTopic.name = '';
  };






}])