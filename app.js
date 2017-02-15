(function(){
  'use strict';

  angular.module('myFirstApp',[])
  .controller('myFirstController',function($scope){
   $scope.name = "Rabten";
   $scope.sayHello= function(){
     return "hello students";
   };
  });


})();
