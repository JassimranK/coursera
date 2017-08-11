(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var categList = this;
  categList.categories = categories.data;
}


/*Controller
  CategoriesListController.$inject = ['MenuDataService'];
  function CategoriesListController(MenuDataService) {
    var categList = this;
    categList.$onInit = function () {
      var promise = MenuDataService.getAllCategories();

      promise.then(function(response){
        categList.categories = response.data;
        })
      .catch(function(error){
        console.log(error);
      })
    }
  }
  */

})();
