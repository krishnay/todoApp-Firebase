'use strict';

/**
 * @ngdoc overview
 * @name todoAppFirebaseApp
 * @description
 * # todoAppFirebaseApp
 *
 * Main module of the application.
 */
angular.module('todoapp', ['firebase']);
function TodoCtrl($scope, angularFire) {
  var fireData = new Firebase('https://angular-todos-krishna.firebaseio.com/');
  
  angularFire(fireData, $scope, 'todos');
  $scope.todos = [
  ];
  
  $scope.addTodo = function (){
    var newTodo = {
      done : false,
      text : $scope.todoText
    };
    $scope.todos.push(newTodo);
    $scope.todoText = '';
  };
  $scope.removeTodo = function(start){
    $scope.todos.splice(start, 1);
  };
  
  $scope.move = function(index, direction) {
    
    if(direction === 'up'){
      
      if(index === 0 ){
        return;
      }
      index = index -1;
    }
    if(direction === 'down'){
          if(index === $scope.todos.length-1){
      return;
    }
    }

    var todo = $scope.todos[index];
      $scope.todos.splice(index + 2, 0, todo);
      $scope.todos.splice(index, 1);
  };
}