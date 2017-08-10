(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

/*CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var catList = this;
  catList.categories = categories;
  console.log(catList.categories);
}
*/


  //Controller
  CategoriesListController.$inject = ['MenuDataService'];
  function CategoriesListController(MenuDataService) {
    var categList = this;

    //console.log(menu.searchString);

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

})();
