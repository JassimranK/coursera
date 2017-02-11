(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items= ShoppingListCheckOffService.getMyToBuyShoppingList();
    toBuy.removeFromBought = function(itemName, itemQuantity, itemIndex){
      ShoppingListCheckOffService.removeFromBought(itemName, itemQuantity, itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.items= ShoppingListCheckOffService.getMyBoughtShoppingList();
  }

  //service
  function ShoppingListCheckOffService(){
    var service = this;
    var myToBuyShoppingList= [
      {itemName: "Milk", itemQuantity:"4"},
      {itemName: "Eggs", itemQuantity:"24"},
      {itemName: "Bread", itemQuantity:"1"},
      {itemName: "Juice", itemQuantity:"2"},
      {itemName: "Cookies", itemQuantity:"10"},
    ];

    var myBoughtShoppingList = [];

    service.removeFromBought = function (itemName, itemQuantity, itemIndex){
      var item = {name: itemName, quantity: itemQuantity};
      myBoughtShoppingList.push(item);
      myToBuyShoppingList.splice(itemIndex,1);
    }
    service.getMyToBuyShoppingList = function () {
      return myToBuyShoppingList;
    };
    service.getMyBoughtShoppingList = function () {
      return myBoughtShoppingList;
    };
  }
})();
