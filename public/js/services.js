angular.module('myApp')
.service('TopicService', ['$http', function($http) {
  const topicArr = [];
  
  let getTopics = function() {
    return topicArr;
  }
  let fetchTopics = function() {
    $http.get('/api/topics')
    .then(data => {
      console.log('RRRRRRRRR' + data.data);
    })
  }

}])