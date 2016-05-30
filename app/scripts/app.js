'use strict';

/**
 * @ngdoc overview
 * @name trackstudioApp
 * @description
 * # trackstudioApp
 *
 * Main module of the application.
 */
angular
  .module('trackstudioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/loadcv', {
        templateUrl: 'views/loadcv.html',
        controller: 'LoadCVCtrl',
        controllerAs: 'loadcv'
      })
      .when('/loadinterview', {
        templateUrl: 'views/loadinterview.html',
        controller: 'LoadInterviewCtrl',
        controllerAs: 'loadinterview'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
