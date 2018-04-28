(function () {
"use strict";

angular.module('public')
.directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf("a") > -1) {
                    mCtrl.$setValidity('charA', true);
                } else {
                    mCtrl.$setValidity('charA', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
});
