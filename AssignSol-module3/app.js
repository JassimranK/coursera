(function () {
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems', FoundItems)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

  function FoundItems(){
    var ddo = {
      templateUrl:'foundItems.html',
      scope:{
        menu:'<',
        onRemove:'&'
      }
    };
    return ddo;
  }

  //Controller
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    //console.log(menu.searchString);

    menu.searchMenuItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchString);

      promise.then(function(response){
        var foundArr = [];
        var menuItems = response.data['menu_items'];
        for (var i = 0; i < menuItems.length; i++) {
          var desc = menuItems[i]['description'];
          console.log( desc);
          if(desc.search(menu.searchString) != -1){
            console.log( "FOUND");
            foundArr.push( menuItems[i]);
          }
        }
        menu.found = foundArr;
      })
      .catch(function(error){
        console.log(error);
      })
    };

    menu.removeItem = function(itemIndex){
      console.log("hahahahahhahhahahhahahhahahahhaha", this);
      menu.found.splice(itemIndex,1);
    };
  }

  //service
  MenuSearchService.$inject= ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var items = [];

    service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
    };
  }

})();
