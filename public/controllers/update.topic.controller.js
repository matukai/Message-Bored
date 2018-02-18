angular.module('myApp')
.controller('UpdateTopicController', ['$scope','$location', '$routeParams','TopicService', function ($scope, $location, $routeParams, TopicService) {

  let id = $routeParams.id
  console.log(id)

  $scope.newTopic = {
    name: ''
  };
  $scope.changeTopic = function(newtopic) {
    console.log('CHANGE TOPIC ID' , id)
    let changedTopic = Object.assign({}, $scope.newTopic);
    TopicService.updateTopic(id,changedTopic);
    //$scope.newTopic.name = '';
  }

}])