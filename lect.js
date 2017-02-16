(function(){
  'use strict';

  angular.module('NameCalculator',[])
  .controller("NameCalculatorController",function($scope){
    $scope.name = "";
    $scope.totalValue = 0;//to get the total number of the strings
    $scope.displayNumeric = function(){//function to recieve the total sting value
      var totalNameValue = calculatorNumericForString($scope.name);
      $scope.totalValue = totalNameValue;

    };
    function calculatorNumericForString(string){
      var totalStringvalue = 0;
      for (var i=0; i<string.length;i++){//string.length iterate till the lenght of the String.
        totalStringvalue+=string.charCodeAt(i);//charCodeAtis the system function
      }
      return totalStringvalue;

    }

  });

})();
