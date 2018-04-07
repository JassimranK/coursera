(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath' ];
function MyInfoController(MenuService, ApiPath) {
  var disp = this;
  disp.completed= false;
  disp.basePath = ApiPath;

  console.log("Saved user: "+disp)
  disp.user = MenuService.getUserInfo();
  if (!(disp.user === undefined || disp.user === null || Object.keys(disp.user).length === 0)){

    disp.completed= true;
  } else{
    disp.completed= false;
  }


 };

})();
