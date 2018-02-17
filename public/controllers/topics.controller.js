angular.module('myApp')
.controller('TopicsController', ['$scope', 'TopicService', function($scope,TopicService) {
  //FETCH ALL TOPICS
  TopicService.fetchTopics();
  $scope.topics = TopicService.getTopics();

  //INSERT TOPIC
  $scope.newTopic = {
    name: ''
  };
  //GETS FIRED FROM NG-CLICK 
  $scope.addTopic = function(newTopic) {
    let topic = Object.assign({}, $scope.newTopic);
    console.log(topic)
    TopicService.insertTopic(topic);
    $scope.newTopic.name = '';
  };






}])