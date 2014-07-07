'use strict';

/**
 * @ngdoc function
 * @name todoAppFirebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppFirebaseApp
 */
angular.module('todoAppFirebaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
