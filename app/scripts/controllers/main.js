'use strict';

/**
 * @ngdoc function
 * @name trackstudioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackstudioApp
 */
angular.module('trackstudioApp')
  .controller('MainCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


	$scope.loadCV = function(){
		$location.path('/loadcv');
	};

  $scope.loadInterview = function(){
    $location.path('/loadinterview');
  };

  });
