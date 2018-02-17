angular.module('myApp')
.controller('TopicsController', ['$scope', 'TopicService', function($scope,TopicService) {
  TopicService.fetchTopics();
  $scope.topics = TopicService.getTopics();
  // $scope.newTopic = {
  //   name: ''
  // };

  // $scope.addTopic = function() {
  //   let topic = Object.assign({}, $scope.newTopic);
  //   TopicService.addTopic(topic);
  //   $scope.newTopic.name = '';
  // };

}])