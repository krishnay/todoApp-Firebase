'use strict';

/**
 * @ngdoc function
 * @name todoAppFirebaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoAppFirebaseApp
 */
angular.module('todoAppFirebaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
