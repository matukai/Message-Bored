//creation uses a 2nd array argument to import dependencies
//creates a module
angular.module('myApp', ['ngRoute']);


//retrival has only one argument
//grab module
angular.module('myApp')
.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: '/views/home.html'
  })
  .when('/topics', {
    controller: 'TopicsController',
    templateUrl: '/views/topics.html'
  })
  // .when('/movies', {
  //   controller: 'MoviesController',
  //   templateUrl: '/views/movies.html'
  // })
  // .when('/other', {
  //   controller: 'OtherController',
  //   templateUrl: '/views/other.html'
  // })
  // .otherwise({
  //   templateUrl: 'views/notfound.html'
  // })
  $locationProvider.html5Mode(true);
})
// .run(['APP_VERSION', '$rootScope', function(APP_VERSION, $rootScope){
//   //initialize
//   $rootScope.version = APP_VERSION;

// }])
.run(function() {

})

