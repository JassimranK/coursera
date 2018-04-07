(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.CheckIfTooMuch = function(){
      if ($scope.items == null){
        $scope.showMsg = "Please enter data first!";
        $scope.myStyle = {"color":"red"};
        $scope.boxStyle = {"border-color": "red"};
      } else {
        var noOfItems = splitString($scope.items, ",");
        if(noOfItems==0){
          $scope.showMsg = "Please enter data first!";
          $scope.myStyle = {"color":"red"};
          $scope.boxStyle = {"border-color": "red"};
        } else {
          $scope.myStyle = {"color":"green"};
          $scope.boxStyle = {"border-color": "green"};
          if (noOfItems <=3)
            $scope.showMsg = "Enjoy!";
          else
            $scope.showMsg = "Too much!";
        }
      }
    };

    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);

      //Bonus part 3 has been implemented !
      //I do NOT consider empty item, i.e., , , towards to item count
      var totallength = arrayOfStrings.length;
      for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].trim()=='') {
          totallength--;
        }
      }
      return totallength;
    }
    
  }

})();
