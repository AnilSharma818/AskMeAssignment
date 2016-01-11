'use strict';

function HomeController($scope, dataService){
    
    function init(){
        
        getCategories();
        getProducts();
    };
    
    function getCategories(){
        
        dataService.getCategories()
            .then(function(values){
                console.log("Categories loaded...."); 
                
                var appdata = angular.fromJson(values.data[0]);
                $scope.categories = appdata.categories;
                $scope.sizes = appdata.sizes;
            });
        
    }
    
    function getProducts(){
        
        dataService.getProducts()
            .then(function(values){
                console.log("Products loaded...."); 
                
                $scope.products = angular.fromJson(values.data);
            });
        
    }
    
    $scope.handleOffCanvas = function(){
        $('.row-offcanvas').toggleClass('active')
    }
    
    $scope.largeGridClickHandler = function(){
        $('.largeGrid').find('a').addClass('active');
        $('.smallGrid a').removeClass('active');

        $('.product').addClass('large').each(function(){});						
        setTimeout(function(){
            $('.info-large').show();	
        }, 200);
        setTimeout(function(){

            $('.view_gallery').trigger("click");	
        }, 400);								

        return false;				
    }
    
    $scope.smallGridClickHandler = function(){
        $('.largeGrid a').removeClass('active');
        $('.smallGrid').find('a').addClass('active');
        
		$('div.product').removeClass('large');
		$(".make3D").removeClass('animate');	
        $('.info-large').fadeOut("fast");
		setTimeout(function(){								
				$('div.flip-back').trigger("click");
		}, 400);
        $('.product').removeClass('large');			
		return false;
    }
    
    init();
}
