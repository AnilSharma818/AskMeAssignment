
'use strict';

function checkboxDirective(){
  
  return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/directives/templates/checkbox.html',
        scope: {
          labelText: "="
        },
        link: function(scope, element, attrs){
           
            scope.checkBoxSelectHandler = function(el){
                console.log("clicked");
            }
        }
    
    }
};
