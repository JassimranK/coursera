(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var userObj = {};
  var menuObj = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.validateMenuShortName = function (short_name) {

    return $http.get(ApiPath + "/menu_items/"+short_name+".json").then(function (response) {
      return response.data;
    });
  };

  service.saveUserInfo = function(user, name, description){
      userObj= angular.copy(user);
      userObj.description = description;
      userObj.name= name;
  };

  service.getUserInfo = function(){
    console.log("servireturning user : "+userObj);
     if (!(userObj === undefined || userObj === null || Object.keys(userObj).length === 0)){
      return userObj;
    }
    return 0;
  };
}
})();
