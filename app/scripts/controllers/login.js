'use strict';

/**
 * @ngdoc function
 * @name trackstudioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trackstudioApp
 */
angular.module('trackstudioApp')
  .controller('LoginCtrl', function ($location, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  

    $scope.login = function(){
    	$location.path('/main');
    };

  });
