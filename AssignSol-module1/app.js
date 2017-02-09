(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.CheckIfTooMuch = function(){
      $scope.customStyle = {};
      if($scope.items == null || $scope.items == '') {
        $scope.showMsg = "Please enter data first!";
        $scope.myStyle = {"color":"red"};
        $scope.boxStyle = {"border-color": "red"};
      } else {
        $scope.myStyle = {"color":"green"};
        $scope.showMsg = splitString($scope.items, ",");
        $scope.boxStyle = {"border-color": "green"};
      }
    };

    function splitString(stringToSplit, separator) {
      //console.log('new: '+stringToSplit);
      var arrayOfStrings = stringToSplit.split(separator);
      if (arrayOfStrings.length<=3) {
        return "Enjoy!";
      } else if (arrayOfStrings.length>3) {
        return "Too much!";
      }
      // var totallength = 0;
      // for (var i = 0; i < arrayOfStrings.length; i++) {
      //   if (arrayOfStrings[i].length>0 && arrayOfStrings[i]!=null &&  arrayOfStrings[i]!=' ') {
      //     totallength++;
      //   }
      // }
      // if (totallength<=3) {
      //   return "Enjoy!";
      // } else if (totallength>3) {
      //   return "Too much!";
      // }
    }

  }
})();
