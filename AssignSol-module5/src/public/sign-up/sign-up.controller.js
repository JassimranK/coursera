(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var reg = this;
  reg.completed = false;

  reg.submit = function (user) {
    var promise = MenuService.validateMenuShortName(user.favmenu);
    promise.then(function(result){
      var shortnames = result.short_name
      console.log(shortnames);
      reg.completed = true;
      reg.error = false;
      MenuService.saveUserInfo(user, result.name, result.description);

    })
    .catch(function(error){
      console.log("DANGER ERROR: "+error);
      reg.error = true;
      reg.completed = false;

    })

  };

 };

})();
