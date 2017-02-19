'use strict';

// Declare app level module which depends on views, and components
/*var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/
var myApp = angular.module('myApp', [

]);

myApp.directive('home', function() {
    return {
        restrict: 'E',
        templateUrl: './components/home/home.html'
    };
});