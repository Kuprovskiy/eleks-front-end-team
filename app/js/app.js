var app = angular.module("fridge",
    // load dependencies
    [
      'ngRoute'
    ]
  );

/* var app = angular.module('fridge', [
    'ngRoute',
    'appControllers',
    'security'
]);                             

angular.module('fridge').run(['security', function(security) {
  // Get the current user when the application starts
  // (in case they are still logged in from a previous session)
  security.requestCurrentUser();
}]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'index.html',
                controller: 'HomeCtrl'
            }).
            when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }).
            otherwise({
                redirectTo: '/404.html'
            });
}]); */