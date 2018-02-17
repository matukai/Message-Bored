angular.module('myApp')
  .service('TopicService', ['$http', function ($http) {
    const topicArr = [];

    this.getTopics = function () {
      return topicArr;
    }
    this.fetchTopics = function () {
      return $http.get('/api/topics')
        .then(data => {
          console.log('daaataaa', data)
          let result = data.data;
          console.log(result)
          //console.log('RRRRRRRRR' + data.data);
          result.forEach(element => {
            topicArr.push(element);
          })
          return topicArr;
        })
        .catch(err => {
          console.log(err);
        })
    }

  }])