
'use strict';

function itemPreviewDirective(){
    
  return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/directives/templates/itempreview.html',
        scope: {
          productName: "=",
          price: "=",
          type: "=", 
          sku: "=",
          images: "="    
        },
        link: function(scope, element, attrs){
           
            scope.checkBoxSelectHandler = function(el){
                console.log("clicked");
            }
        }
    
    }
};
