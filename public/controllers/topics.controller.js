angular.module('myApp')
.controller('TopicsController', ['$scope', 'TopicService', function($scope,TopicService) {

  $scope.TopicService = TopicService.fetchTopics();
  $scope.newTopic = {
    name: ''
  };

  $scope.addTopic = function() {
    let topic = Object.assign({}, $scope.newTopic);
    TopicService.addTopic(topic);
    $scope.newTopic.name = '';
  };

}])